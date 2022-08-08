import React from 'react';
import styles from './GameSelector.module.css';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export type GameSelectorProps = {
    setCurrentGame: (game: string) => void
};

const GameSelector = (props: GameSelectorProps) => {

    const navigate = useNavigate();

    return (
        <div className={styles.selectorBackground}>
            <div className={styles.selectorTitle}>
                Choose an option
            </div>
            <div className={styles.gameSelector}>
                <div className={styles.gameItem} onClick={() => {props.setCurrentGame("PlayerVersusPlayer");navigate("/game")}}>
                    <div className={styles.gameItemIcon}><BsFillPeopleFill /></div>
                    <div className={styles.gameItemText}>Play With Friends</div>
                </div>
                <div className={styles.gameItem} onClick={() => {props.setCurrentGame("PlayerVersusAI");navigate("/game")}}>
                    <div className={styles.gameItemIcon}><MdOutlineComputer /></div>
                    <div className={styles.gameItemText}>Play With Computer</div>
                </div>
                <div className={styles.gameItem}>
                    <div className={styles.gameItemIcon}><IoMdSettings /></div>
                    <div className={styles.gameItemText}>Settings</div>
                </div>
            </div>
        </div>
    )
}

export default GameSelector