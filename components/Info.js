import styles from './Info.module.css';
import CarFront from './svg/CarFront';
import Clock from './svg/Clock';
import CreditCard from './svg/CreditCard';

export default function Info() {
    return (
        <div className={styles.info}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.left}>
                        <CarFront />
                    </div>

                    <div className={styles.right}>
                        <h2>Location à votre disposition</h2>
                        <p>Nous vous proposons une large sélection de voitures à louer pour tous vos besoins. Que ce soit pour un week-end ou un voyage plus long, nous avons la voiture qu'il vous faut.</p>                        <div className={styles.separator}></div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.left}>
                        <CreditCard />
                    </div>

                    <div className={styles.right}>
                        <h2>Modes de Paiement</h2>
                        <p>Vous pouvez régler votre location en toute simplicité avec Twint ou en espèces directement sur place. Nous rendons le processus de paiement rapide et sans stress.</p>
                        <div className={styles.separator}></div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.left}>
                        <Clock />
                    </div>

                    <div className={styles.right}>
                        <h2>Réservation à tout moment</h2>
                        <p>Réservez votre voiture facilement à tout moment, sans contrainte. Nous sommes disponibles pour répondre à vos demandes de réservation quand vous le souhaitez.</p>
                        <div className={styles.separator}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}