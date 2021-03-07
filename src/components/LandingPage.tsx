import styles from "../styles/components/LandingPage.module.scss";

export function LandingPage() {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.titleContainer}>
                <h2>What Pokémon<br/>are you looking for?</h2>
            </div>
            <div className={styles.inputContainer}>
                <img src="./svg/icon-search.svg"/>
                <input
                    type="text"
                    placeholder="Seach Pokémon, move, ability etc"
                />
            </div>
            <div className={styles.gridContainer}>
                /* Continue here */
            </div>
        </div>
    )
}