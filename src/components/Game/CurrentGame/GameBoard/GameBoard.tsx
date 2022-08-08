import React, { useState } from 'react';
import styles from './GameBoard.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { BsRecordCircle, BsXCircle } from 'react-icons/bs';
import GameSquare from './GameSquare/GameSquare';
import Teste from './Teste';

export type GameBoardProps = {
    currentGame: string
}

const GameBoard = (props: GameBoardProps) => {

    const [player1Points, setPlayer1Points] = useState(0);
    const [player2Points, setPlayer2Points] = useState(0);
    const [player1Turn, setPlayer1Turn] = useState(true);
    const [square, setSquare] = useState(Array(9).fill(null));
    const winner = checkWinner(square);

    let status;
    if (winner) {
        status = 'Winner: ' + (player1Turn ?
            props.currentGame === 'PlayerVersusPlayer' ? 'Player 2' : 'Computer'
            : props.currentGame === 'PlayerVersusPlayer' ? 'Player 1' : 'You');
    } else {
        status = player1Turn ?
            <div>Player <span style={{ color: "#da3232" }}>X</span></div> + '´s Turn'
            : <div>Player <span style={{ color: "#da3232" }}>O</span></div> + '´s Turn';
    }

    const renderSquare = (i: number) => {
        return (
            <GameSquare
                value={square[i]}
                onClick={() => handleClick(i)}
                color={square[i] === 'X' ? '#da3232' : square[i] === 'O' ? '#00a8ff' : ''}
                winner={winner}
            />
        )
    }

    const handleClick = (i: number) => {
        const squares = square.slice();
        if (squares[i] === null) {
            squares[i] = player1Turn ? 'X' : 'O';
            setSquare(squares);
            setPlayer1Turn(!player1Turn);
        }
    }

    function checkWinner(squares: string[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        if (square.every(square => square !== null)) {
            return 'Draw';
        }
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    return (
        <div className={styles.gameBoard}>
            <div className={styles.gameStatus}>
                {winner ?
                    winner === 'Draw' ?
                        <div>Draw</div>
                        :
                        <div>
                            <span>
                                Winner: {player1Turn ? props.currentGame === 'PlayerVersusPlayer' ? 'Player O' : 'Computer'
                                    : props.currentGame === 'PlayerVersusPlayer' ? 'Player X' : 'You'
                                }
                            </span>
                        </div>
                    : player1Turn ?
                        <div>Player <span style={{ color: "#da3232" }}>X</span>´s Turn</div>
                        : <div>Player <span style={{ color: "#da3232" }}>O</span>´s Turn</div>
                }
            </div>
            <div className={styles.gameInfo}>
                <div className={`${styles.playerInfo} ${player1Turn === true && winner === null ? styles.playerActive : ''}`}>
                    <div className={styles.playerImage}><FaUserCircle /></div>
                    <p className={styles.playerName}>{props.currentGame == 'PlayerVersusPlayer' ? 'Player X' : 'You'}</p>
                    <div className={styles.playerShape} style={{ color: '#da3232' }}><BsXCircle /></div>
                </div>
                <div className={styles.board}>
                    <div className={styles.boardRow}>
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className={styles.boardRow}>
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className={styles.boardRow}>
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
                <div className={`${styles.playerInfo} ${player1Turn === false && winner === null ? styles.playerActive : ''}`}>
                    <div className={styles.playerImage}><FaUserCircle /></div>
                    <p className={styles.playerName}>{props.currentGame == 'PlayerVersusPlayer' ? 'Player O' : 'Computer'}</p>
                    <div className={styles.playerShape} style={{ color: '#00a8ff' }}><BsRecordCircle /></div>
                </div>
            </div>
        </div>
    )
}

// Fazer botao Reset
// Fazer botao COntinuar
// Fazer botao Sair

export default GameBoard