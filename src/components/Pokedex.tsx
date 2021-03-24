import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";
import styles from "../styles/components/Pokedex.module.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function Pokemons() {
    const { theme, setTheme } = useTheme();
    const [pokemonData, setPokemonData] = useState([]);

    const getPokemon = async () => {
        try {
            const url = `https://pokeapi.co/api/v2/pokedex/5`;
            const res = await axios.get(url);

            setPokemonData(res.data.pokemon_entries);
            console.log(res.data.pokemon_entries);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <div>
            <Head>
                <title>Pokédex</title>
            </Head>
            <div
                className={`${styles.contentContainer} bg-white-default dark:bg-mirage`}
            >
                <Link href="/">
                    <a
                        className={`${styles.arrowBack} bg-porcelain dark:bg-oxford-blue`}
                    >
                        {theme === "dark" ? (
                            <ArrowBackIcon style={{ color: "#F5F6F7" }} />
                        ) : (
                            <ArrowBackIcon style={{ color: "#232C37" }} />
                        )}
                    </a>
                </Link>
                <h2
                    className={`${styles.title} text-ebony-clay dark:text-white-default`}
                >
                    Pokédex
                </h2>
                <ul className={styles.list}>
                    {pokemonData.map((data) => {
                        return (
                            <Link
                                href={`/pokedex/pokemon/${data.pokemon_species.url
                                    .match(/\d+/g)
                                    .map(Number)
                                    .slice(1)}`}
                                key={data.pokemon_species.url
                                    .match(/\d+/g)
                                    .map(Number)
                                    .slice(1)
                                    .toString()}
                            >
                                <a>
                                    <li
                                        className={`${styles.listItem} bg-mirage dark:bg-oxford-blue`}
                                    >
                                        <div className={styles.itemContainer}>
                                            <span className={styles.pokemonId}>
                                                {`#${(
                                                    "000" +
                                                    data.pokemon_species.url
                                                        .match(/\d+/g)
                                                        .map(Number)
                                                        .slice(1)
                                                ).substr(-3)}`}
                                            </span>
                                            <div className={styles.pokemonInfo}>
                                                <h3>{`${data.pokemon_species.name}`}</h3>
                                            </div>
                                            <div
                                                className={
                                                    styles.pokemonImgContainer
                                                }
                                            >
                                                <img
                                                    src={`${data.pokemon_species.url
                                                        .replace(
                                                            "https://pokeapi.co/api/v2/pokemon-species/",
                                                            "https://pokeres.bastionbot.org/images/pokemon/"
                                                        )
                                                        .slice(0, -1)}.png`}
                                                    className={
                                                        styles.pokemonImg
                                                    }
                                                    width="85"
                                                    height="85"
                                                />
                                            </div>
                                            <div
                                                className={
                                                    styles.pokeballContainer
                                                }
                                            >
                                                <div
                                                    className={`pokeballMd ${
                                                        theme === "dark"
                                                            ? "oxford-blue"
                                                            : "mirage"
                                                    }`}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                </a>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
