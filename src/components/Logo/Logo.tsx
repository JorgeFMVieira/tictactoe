import React from 'react'
import styles from './Logo.module.css'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.logoItems}>
                <p>TIC</p>
                <p>TAC</p>
                <p>TOE</p>
            </div>
        </div>
    )
}

export default Logo