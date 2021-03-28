import axios from "axios";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import styles from "../styles/components/Pokemon.module.scss";

const Pokemon = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    const [value, setValue] = React.useState(2);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const [pokemon, setPokemon] = useState(
        `${router.asPath.replace("/pokedex/pokemon/", "")}`
    );
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonImag, setPokemonImag] = useState(
        `https://pokeres.bastionbot.org/images/pokemon/${pokemon}.png`
    );

    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);

            toArray.push(res.data);
            
            setPokemonData(toArray);
            setPokemonType(res.data.types);

            console.log(toArray);
            console.log(pokemonType);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <div className={`${styles.contentContainer} bg-carnation h-screen`}>
            <div className={styles.upperButtons}>
                <Link href="/">
                    <a>
                        {theme === "dark" ? (
                            <ArrowBackIcon style={{ color: "#F5F6F7" }} />
                        ) : (
                            <ArrowBackIcon style={{ color: "#232C37" }} />
                        )}
                    </a>
                </Link>
                <button>
                    {theme === "dark" ? (
                        <FavoriteBorderIcon style={{ color: "#F5F6F7" }} />
                    ) : (
                        <FavoriteBorderIcon style={{ color: "#232C37" }} />
                    )}
                </button>
            </div>
            <div className={styles.pokemonInfo}>
                {pokemonData.map((data) => {
                    return (
                        <div className={styles.nameAndId}>
                            <h2>{data.name}</h2>
                            <span>#{data.id}</span>
                        </div>
                    );
                })}
                <div className={styles.typeList}>
                    {pokemonType.map((data) => {
                        return <span>{data.type.name}</span>;
                    })}
                </div>
            </div>
            <div className={styles.uplayerPokeball}>
                <div className={styles.pokeballContainer}>
                    <div className="pokeballLg carnation animate-spin"></div>
                </div>
            </div>
            <div className={styles.pokemonDetails}>
                <div className={styles.pokemonImage}>
                    <img src={pokemonImag} />
                </div>
                <div>
                    <Paper square>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                        >
                            <Tab label="Active" />
                            <Tab label="Disabled" />
                            <Tab label="Active" />
                        </Tabs>
                    </Paper>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
