import styles from "../styles/components/PageLanding.module.scss";

export function PageLanding() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>What Pokémon are you looking for?</h2>
            </div>
        </div>
    )
}