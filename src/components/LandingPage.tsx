import styles from "../styles/components/LandingPage.module.scss";
import Link from "next/link"
import SearchIcon from '@material-ui/icons/Search';

export default function LandingPage() {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.pokeballContainer}>
                <div className="animate-spin pokeballLg"></div>
            </div>
            <div className={styles.upLayerContainer}>
                <div className={styles.titleContainer}>
                    <h2>What Pokémon<br/>are you looking for?</h2>
                </div>
                <div className={styles.inputContainer}>
                    <SearchIcon style={{ color: '#232C37' }} className={styles.searchIcon}/>
                    <input
                        type="text"
                        placeholder="Seach Pokémon, move, ability etc"
                    />
                </div>
                <div className={styles.gridContainer}>
                    <Link href="/pokedex">
                        <a className={`${styles.cardOption} bg-mountain-meadow`}>
                            <div className={styles.rectangleContainer}>
                                <div className="rectangle"></div>
                            </div>
                            <h4>Pokédex</h4>
                            <div className={styles.cardPokeball}>
                                <div className="pokeballSm mountain-meadow"></div>
                            </div>
                        </a>
                    </Link>
                    <a className={`${styles.cardOption} bg-cinnabar`}>
                        <div className={styles.rectangleContainer}>
                            <div className="rectangle"></div>
                        </div>
                        <h4>Moves</h4>
                        <div className={styles.cardPokeball}>
                            <div className="pokeballSm cinnabar"></div>
                        </div>
                    </a>
                    <a className={`${styles.cardOption} bg-indigo`}>
                        <div className={styles.rectangleContainer}>
                            <div className="rectangle"></div>
                        </div>
                        <h4>Abilities</h4>
                        <div className={styles.cardPokeball}>
                            <div className="pokeballSm indigo"></div>
                        </div>
                    </a>
                    <a className={`${styles.cardOption} bg-buttercup`}>
                        <div className={styles.rectangleContainer}>
                            <div className="rectangle"></div>
                        </div>
                        <h4>Items</h4>
                        <div className={styles.cardPokeball}>
                            <div className="pokeballSm buttercup"></div>
                        </div>
                    </a>
                    <a className={`${styles.cardOption} bg-trendy-pink`}>
                        <div className={styles.rectangleContainer}>
                            <div className="rectangle"></div>
                        </div>
                        <h4>Locations</h4>
                        <div className={styles.cardPokeball}>
                            <div className="pokeballSm trendy-pink"></div>
                        </div>
                    </a>
                    <a className={`${styles.cardOption} bg-coral-tree`}>
                        <div className={styles.rectangleContainer}>
                            <div className="rectangle"></div>
                        </div>
                        <h4>Type charts</h4>
                        <div className={styles.cardPokeball}>
                            <div className="pokeballSm coral-tree"></div>
                        </div>
                    </a>
                </div>
            </div>
            <div className={styles.newsContainer}>
                <div className={styles.newsTitle}>
                    <h3>Pokémon News</h3>
                    <a>Views all</a>
                </div>
                <a className={styles.newsItem}>
                    <div>
                        <h6>Pokémon News</h6>
                        <span>Pokémon News description</span>
                        <span className={styles.newsDate}>Pokémon News date</span>
                    </div>
                    <div className="w-28 h-20 rounded-3xl opacity-80 bg-cinnabar"></div>
                </a>
                <a className={styles.newsItem}>
                    <div>
                        <h6>Pokémon News</h6>
                        <span>Pokémon News description</span>
                        <span className={styles.newsDate}>Pokémon News date</span>
                    </div>
                    <div className="w-28 h-20 rounded-3xl opacity-80 bg-cinnabar"></div>
                </a>
                <a className={styles.newsItem}>
                    <div>
                        <h6>Pokémon News</h6>
                        <span>Pokémon News description</span>
                        <span className={styles.newsDate}>Pokémon News date</span>
                    </div>
                    <div className="w-28 h-20 rounded-3xl opacity-80 bg-cinnabar"></div>
                </a>
            </div>
        </div>
    )
}