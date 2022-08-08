import React from 'react';
import styles from './GameSelector.module.css';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';

export type GameSelectorProps = {
    setCurrentGame: (game: string) => void
};

const GameSelector = (props: GameSelectorProps) => {
    return (
        <div className={styles.selectorBackground}>
            <div className={styles.selectorTitle}>
                Choose an option
            </div>
            <div className={styles.gameSelector}>
                <div className={styles.gameItem} onClick={() => props.setCurrentGame("PlayerVersusPlayer")}>
                    <div className={styles.gameItemIcon}><BsFillPeopleFill /></div>
                    <div className={styles.gameItemText}>Play With Friends</div>
                </div>
                <div className={styles.gameItem} onClick={() => props.setCurrentGame("PlayerVersusAI")}>
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