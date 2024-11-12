import styles from './Footer.module.css';
import InstagramLogo from './svg/InstagramLogo';
import SnapchatLogo from './svg/SnapchatLogo';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <p>AD Location. Tous droits réservés.</p>
                <ul className={styles.links}>
                    <h1>Liens</h1>
                    <li><a href="/conditions">Conditions d'utilisation</a></li>
                    <li><a href="/privacy">Politique de confidentialité</a></li>
                </ul>
            </div>
        </div>
    );
}