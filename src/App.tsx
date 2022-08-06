import React, { useEffect, useState } from 'react';
import styles from './App.module.css'
import GameSelector from './components/Game/GameSelector/GameSelector';
import Logo from './components/Logo/Logo';
import CurrentGame from './components/Game/CurrentGame/CurrentGame';

const App = () => {

    const [currentGame, setCurrentGame] = useState("");

    useEffect(() => {
        if(localStorage.getItem("currentGame") !== "") {
            const game = localStorage.getItem("currentGame");
            setCurrentGame(game ? game : "");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("currentGame", currentGame);
    }, [currentGame]);

    return (
        <div className={styles.backgroundScreen}>
            <div className={styles.area} >
            <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
            <Logo />
            {currentGame === "" ?
            <GameSelector setCurrentGame={setCurrentGame} />
        : <CurrentGame currentGame={currentGame} />}
        </div>
    )
}

export default App