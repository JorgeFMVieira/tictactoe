import React, { useEffect, useState } from 'react';
import styles from './App.module.css'
import GameSelector from './components/Game/GameSelector/GameSelector';
import Logo from './components/Logo/Logo';
import CurrentGame from './components/Game/CurrentGame/CurrentGame';
import { Routes, Route } from 'react-router-dom';

const App = () => {

    const [currentGame, setCurrentGame] = useState("");

    useEffect(() => {
        if (sessionStorage.getItem("currentGame") !== "") {
            const game = sessionStorage.getItem("currentGame");
            setCurrentGame(game ? game : "");
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("currentGame", currentGame);
    }, [currentGame]);

    return (
        <div className={styles.backgroundScreen}>
            <div className={`${styles.light} ${styles.x1}`}></div>
            <div className={`${styles.light} ${styles.x2}`}></div>
            <div className={`${styles.light} ${styles.x3}`}></div>
            <div className={`${styles.light} ${styles.x4}`}></div>
            <div className={`${styles.light} ${styles.x5}`}></div>
            <div className={`${styles.light} ${styles.x6}`}></div>
            <div className={`${styles.light} ${styles.x7}`}></div>
            <div className={`${styles.light} ${styles.x8}`}></div>
            <div className={`${styles.light} ${styles.x9}`}></div>
            <div className={styles.content}>
                <Logo />
                <div className={styles.gameContent}>
                    <Routes>
                        <Route path="/" element={<GameSelector setCurrentGame={setCurrentGame} />} />
                        <Route path="/game" element={<CurrentGame currentGame={currentGame} />} />
                    </Routes>
                </div>
            </div>

        </div>
    )
}

export default App