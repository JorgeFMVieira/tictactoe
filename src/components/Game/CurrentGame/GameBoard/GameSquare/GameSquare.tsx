import React, { useEffect } from 'react'
import styles from '../GameBoard.module.css'

export type GameSquareProps = {
    value: number;
    onClick: () => void;
    color: string;
    winner: string | null;
};

const GameSquare = (props: GameSquareProps) => {

    return (
        <div className={styles.boardCell} onClick={() => {props.winner === null && props.onClick()}} style={{ color: props.color }}>
            {props.value}
        </div>
    )
}

export default GameSquare