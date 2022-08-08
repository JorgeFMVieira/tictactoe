import React from 'react'
import styles from '../GameBoard.module.css'

export type GameSquareProps = {
    value: number;
    onClick: () => void;
    color: string;
    winner: string | null;
    icon: JSX.Element | null
};

const GameSquare = (props: GameSquareProps) => {

    return (
        <div className={styles.boardCell} onClick={() => { props.winner === null && props.onClick() }} style={{ color: props.color }}>
            {props.value === 0 ? null : props.icon}
        </div>
    )
}

export default GameSquare