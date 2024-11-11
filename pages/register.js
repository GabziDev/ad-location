import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Auth.module.css";
import PasswordShow from "@/components/svg/PasswordShow";
import PasswordHide from "@/components/svg/PasswordHide";

export default function Home() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <>
            <Head>
                <title>Inscription</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className={styles.authContainer}>
                    <h1>Inscriptions</h1>
                    <div className={styles.sectionDouble}>
                        <div className={styles.box}>
                            <label>Prénom</label>
                            <input type="text" placeholder="Entrez votre prénom"></input>
                        </div>

                        <div className={styles.box}>
                            <label>Nom de famille</label>
                            <input type="text" placeholder="Entrez votre nom"></input>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <label>E-mail</label>
                        <input type="email" placeholder="Entrez votre email"></input>
                    </div>

                    <div className={styles.section}>
                        <label>Mot de passe</label>
                        <div className={styles.passwordContainer}>
                            <input type={showPassword ? "text" : "password"} placeholder="Entrez votre mot de passe"/>
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className={styles.togglePasswordBtn}
                            >
                                {showPassword ? <PasswordShow/> : <PasswordHide/>}
                            </button>
                        </div>
                    </div>

                    <button className={styles.submit}>Créer le compte</button>

                    <p className={styles.text}>Vous avez déjà un compte? <a href="login">Se connecter</a></p>
                </div>
            </div>
        </>
    );
}
