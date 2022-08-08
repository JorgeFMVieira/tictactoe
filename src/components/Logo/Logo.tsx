import React from 'react'
import styles from './Logo.module.css'
import { BiMenu } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Logo = () => {

    const navigate = useNavigate();

    const clearPoints = () => {
        sessionStorage.setItem("player1Points", "0");
        sessionStorage.setItem("player2Points", "0");
        sessionStorage.setItem("youPoints", "0");
        sessionStorage.setItem("computerPoints", "0");
    }

    return (
        <div className={styles.logo}>
            <div className={styles.logoItems}>
                <p>TIC</p>
                <p>TAC</p>
                <p>TOE</p>
            </div>
            <div className={styles.menu} onClick={() => {navigate("/");clearPoints()}}>
                <span><BiMenu className={styles.menuIcon} />Menu</span>
            </div>
        </div>
    )
}

export default Logo