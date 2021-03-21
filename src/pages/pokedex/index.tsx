import React, { useEffect, useState } from "react";
import styles from "../../styles/pages/pokedex/Index.module.scss";
import Link from "next/link"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from "axios";
import Head from "next/head";

export default function Pokemons() {
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
            <div className={styles.contentContainer}>
                <Link href="/">
                    <a className={styles.arrowBack}>
                        <ArrowBackIcon style={{ color: '#232C37' }} />
                    </a>
                </Link>
                <h2 className={styles.title}>Pokédex</h2>
                <ul className={styles.list}>
                    {
                        pokemonData.map((data) => {
                            return (
                                <Link href={`/pokedex/${(((data.pokemon_species.url).match(/\d+/g).map(Number)).slice(1))}`} key={(((data.pokemon_species.url).match(/\d+/g).map(Number)).slice(1)).toString()}>
                                    <a>
                                        <li className={`${styles.listItem} bg-shamrock`}>
                                            <div className={styles.itemContainer}>
                                                <span className={styles.pokemonId}>
                                                    {`#${('000' + (((data.pokemon_species.url).match(/\d+/g).map(Number)).slice(1))).substr(-3)}`}
                                                </span>
                                                <div className={styles.pokemonInfo}>
                                                    <h3>{`${data.pokemon_species.name}`}</h3>
                                                    <div className={styles.pokemonType}>
                                                        <span>Grass</span>
                                                    </div>
                                                    <div className={styles.pokemonType}>
                                                        <span>Poison</span>
                                                    </div>
                                                </div>
                                                <img
                                                    src={`${(data.pokemon_species.url).replace("https://pokeapi.co/api/v2/pokemon-species/", "https://pokeres.bastionbot.org/images/pokemon/").slice(0, -1)}.png`}
                                                    className={styles.pokemonImg} width="85" height="85"
                                                />
                                                <div className={styles.pokeballContainer}>
                                                    <div className="pokeballMd porcelain shamrock"></div>
                                                </div>
                                            </div>
                                        </li>
                                    </a>
                                </Link>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
