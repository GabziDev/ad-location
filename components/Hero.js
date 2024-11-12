import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h1>Louez une voiture<br></br>facilement et rapidement !</h1>
                    <p>Profitez d’une réservation simplifiée en quelques clics !</p>
                    <a href='louer'>Louer !</a>
                </div>
                <div className={styles.right}>
                    <img src='/images/hero.png'></img>
                </div>
            </div>
        </div>
    );
}