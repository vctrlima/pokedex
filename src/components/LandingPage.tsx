import styles from "../styles/components/LandingPage.module.scss";
import Link from "next/link";
import SearchIcon from "@material-ui/icons/Search";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import GitHubIcon from '@material-ui/icons/GitHub';
import { useTheme } from "next-themes";

export default function LandingPage() {
    const { theme, setTheme } = useTheme();

    return (
        <div className={`${styles.contentContainer} dark:bg-mirage`}>
            <div className={styles.pokeballContainer}>
                <div
                    className={`animate-spin pokeballLg ${
                        theme === "dark" ? "ebony-clay" : ""
                    }`}
                ></div>
            </div>
            <div
                className={`${styles.upLayerContainer} bg-white-default dark:bg-ebony-clay`}
            >
                <div>
                    <div>
                        <div className={styles.titleContainer}>
                            <h2 className="text-ebony-clay dark:text-white-default">
                                What Pokémon
                                <br />
                                are you looking for?
                            </h2>
                        </div>
                        <div className={styles.inputContainer}>
                            <SearchIcon
                                style={{ color: "#232C37" }}
                                className={styles.searchIcon}
                            />
                            <input
                                type="text"
                                placeholder="Seach Pokémon, move, ability etc"
                            />
                        </div>
                    </div>
                    <div className={styles.gridContainer}>
                        <Link href="/pokedex">
                            <a
                                className={`${styles.cardOption} ${styles.mountainMeadow} bg-mountain-meadow dark:bg-white-default dark:bg-opacity-5 mountain-meadow`}
                            >
                                <div className={styles.rectangleContainer}>
                                    <div className="rectangle"></div>
                                </div>
                                <h4>Pokédex</h4>
                                <div className={styles.cardPokeball}>
                                    <div className="pokeballSm mountain-meadow"></div>
                                </div>
                            </a>
                        </Link>
                        <a className={`${styles.cardOption} ${styles.cinnabar} bg-cinnabar dark:bg-white-default dark:bg-opacity-5 cinnabar`}>
                            <div className={styles.rectangleContainer}>
                                <div className="rectangle"></div>
                            </div>
                            <h4>Moves</h4>
                            <div className={styles.cardPokeball}>
                                <div className="pokeballSm cinnabar"></div>
                            </div>
                        </a>
                        <a className={`${styles.cardOption} ${styles.indigo} bg-indigo dark:bg-white-default dark:bg-opacity-5 indigo`}>
                            <div className={styles.rectangleContainer}>
                                <div className="rectangle"></div>
                            </div>
                            <h4>Abilities</h4>
                            <div className={styles.cardPokeball}>
                                <div className="pokeballSm indigo"></div>
                            </div>
                        </a>
                        <a className={`${styles.cardOption} ${styles.buttercup} bg-buttercup dark:bg-white-default dark:bg-opacity-5 buttercup`}>
                            <div className={styles.rectangleContainer}>
                                <div className="rectangle"></div>
                            </div>
                            <h4>Items</h4>
                            <div className={styles.cardPokeball}>
                                <div className="pokeballSm buttercup"></div>
                            </div>
                        </a>
                        <a className={`${styles.cardOption} ${styles.trendyPink} bg-trendy-pink dark:bg-white-default dark:bg-opacity-5 trendy-pink`}>
                            <div className={styles.rectangleContainer}>
                                <div className="rectangle"></div>
                            </div>
                            <h4>Locations</h4>
                            <div className={styles.cardPokeball}>
                                <div className="pokeballSm trendy-pink"></div>
                            </div>
                        </a>
                        <a className={`${styles.cardOption} ${styles.coralTree} bg-coral-tree dark:bg-white-default dark:bg-opacity-5 coral-tree`}>
                            <div className={styles.rectangleContainer}>
                                <div className="rectangle"></div>
                            </div>
                            <h4>Type charts</h4>
                            <div className={styles.cardPokeball}>
                                <div className="pokeballSm coral-tree"></div>
                            </div>
                        </a>
                    </div>
                <div className={styles.themeButtonContainer}>
                    <button
                        aria-label="Toggle dark mode"
                        type="button"
                        className={`${styles.themeButton} bg-porcelain dark:bg-oxford-blue`}
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                    >
                        {theme === "dark" ? (
                            <Brightness4Icon
                                style={{ color: "#F5F6F7" }}
                                className={styles.themeButtonIcon}
                            />
                        ) : (
                            <Brightness4Icon
                                style={{ color: "#232C37" }}
                                className={styles.themeButtonIcon}
                            />
                        )}
                    </button>
                </div>
                </div>
            </div>
            <div className={styles.newsContainer}>
                <div>
                    <div className={styles.newsTitle}>
                        <h3 className="dark:text-white-default">Pokémon News</h3>
                        <a className="text-indigo">Views all</a>
                    </div>
                    <a className={`${styles.newsItem} dark:text-white-default`}>
                        <div>
                            <h6>Pokémon News</h6>
                            <span>Pokémon News description</span>
                            <span className={styles.newsDate}>
                                Pokémon News date
                            </span>
                        </div>
                        <div className={styles.newsImg}></div>
                    </a>
                    <a className={`${styles.newsItem} dark:text-white-default`}>
                        <div>
                            <h6>Pokémon News</h6>
                            <span>Pokémon News description</span>
                            <span className={styles.newsDate}>
                                Pokémon News date
                            </span>
                        </div>
                        <div className={styles.newsImg}></div>
                    </a>
                    <a className={`${styles.newsItem} dark:text-white-default`}>
                        <div>
                            <h6>Pokémon News</h6>
                            <span>Pokémon News description</span>
                            <span className={styles.newsDate}>
                                Pokémon News date
                            </span>
                        </div>
                        <div className={styles.newsImg}></div>
                    </a>
                </div>
            </div>
            <div className={`${styles.githubRepo} bg-white-default dark:bg-transparent`}>
                <a
                    href="https://github.com/vctrlima/pokedex-with-pokeapi"
                    target="_blank"
                    className="text-ebony-clay dark:text-white-default bg-white-default dark:bg-ebony-clay"
                >
                    GitHub Repository
                    {theme === "dark" ? (
                        <GitHubIcon 
                            style={{ color: "#F5F6F7" }}
                            className={styles.githubIcon}
                        />
                    ) : (
                        <GitHubIcon 
                            style={{ color: "#232C37" }}
                            className={styles.githubIcon}
                        />
                    )}
                </a>
            </div>
        </div>
    );
}
