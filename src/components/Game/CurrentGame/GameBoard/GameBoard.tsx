import React, { useEffect, useState } from 'react';
import styles from './GameBoard.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { BsRecordCircle, BsXCircle } from 'react-icons/bs';
import GameSquare from './GameSquare/GameSquare';
import { BiCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export type GameBoardProps = {
    currentGame: string
}

const GameBoard = (props: GameBoardProps) => {

    const [player1Turn, setPlayer1Turn] = useState(true);
    const [square, setSquare] = useState(Array(9).fill(null));
    const winner = checkWinner(square);

    const renderSquare = (i: number) => {
        return (
            <GameSquare
                value={square[i]}
                onClick={() => handleClick(i)}
                color={square[i] === 'X' ? '#da3232' : square[i] === 'O' ? '#00a8ff' : ''}
                winner={winner}
                icon={square[i] === 'X' ? <AiOutlineClose /> : square[i] === 'O' ? <BiCircle /> : null}
            />
        )
    }

    const handleClick = (i: number) => {
        const squares = square.slice();
        if (squares[i] === null) {
            squares[i] = player1Turn === true ? 'X' : 'O';
            setSquare(squares);
            setPlayer1Turn(!player1Turn);
        }
    }

    const computerPlays = () => {
        const squares = square.slice();
        const randomNumber = Math.floor(Math.random() * 9);
        if(squares[randomNumber] === null) {
            squares[randomNumber] = player1Turn === true ? 'X' : 'O';
            setTimeout(() => {
                setSquare(squares);
                setPlayer1Turn(!player1Turn);
            }, 500);
        }else{
            computerPlays();
        }
    }

    useEffect(() => {
        if(player1Turn === false && props.currentGame === 'PlayerVersusAI' && winner === null) {
            computerPlays();
        }
    }, [player1Turn]);

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
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        if (square.every(square => square !== null)) {
            return 'Draw';
        }

        return null;
    }

    const clearBoard = () => {
        setSquare(Array(9).fill(null));
        setPlayer1Turn(true);
    }

    useEffect(() => {
        if (winner) {
            if (winner === 'X') {
                if (props.currentGame === 'PlayerVersusPlayer') {
                    const points = sessionStorage.getItem('player1Points') === null ? 0 : parseInt(sessionStorage.getItem('player1Points') as string);
                    sessionStorage.setItem('player1Points', points + 1 + '');
                } else {
                    const points = sessionStorage.getItem('youPoints') === null ? 0 : parseInt(sessionStorage.getItem('youPoints') as string);
                    sessionStorage.setItem('youPoints', points + 1 + '');
                }
            } else if (winner === 'O') {
                if (props.currentGame === 'PlayerVersusPlayer') {
                    const points = sessionStorage.getItem('player2Points') === null ? 0 : parseInt(sessionStorage.getItem('player2Points') as string);
                    sessionStorage.setItem('player2Points', points + 1 + '');
                } else {
                    const points = sessionStorage.getItem('computerPoints') === null ? 0 : parseInt(sessionStorage.getItem('computerPoints') as string);
                    sessionStorage.setItem('computerPoints', points + 1 + '');
                }
            }
        }
    }, [winner]);

    return (
        <div className={styles.gameBoard}>
            <div className={styles.gameStatus}>
                {winner ?
                    winner === 'Draw' ?
                        <span>Draw</span>
                        :
                        <span>
                            Winner: {player1Turn ? props.currentGame === 'PlayerVersusPlayer' ? 'Player O' : 'Computer'
                                : props.currentGame === 'PlayerVersusPlayer' ? 'Player X' : 'You'
                            }
                        </span>
                    : player1Turn ?
                        props.currentGame === 'PlayerVersusPlayer' ?
                            <span>Player <span style={{ color: "#da3232" }}>X</span>´s Turn</span>
                            : <span><span style={{ color: "#da3232" }}>Your</span> Turn</span>
                        : props.currentGame === 'PlayerVersusPlayer' ?
                        <span>Player <span style={{ color: "#00a8ff" }}>O</span>´s Turn</span>
                        : <span><span style={{ color: "#00a8ff" }}>Computer</span> Turn</span>
                }
            </div>
            <div className={styles.gameInfo}>
                <div className={`${styles.playerInfo} ${player1Turn === true && winner === null ? styles.playerActiveCross : ''}`}>
                    <div className={styles.playerImage}><FaUserCircle /></div>
                    <p className={styles.playerName}>{props.currentGame === 'PlayerVersusPlayer' ? 'Player X' : 'You'}</p>
                    <div className={styles.playerShape} style={{ color: '#da3232' }}><BsXCircle /></div>
                    <div className={styles.playerName}>{props.currentGame === 'PlayerVersusPlayer' ?
                        sessionStorage.getItem('player1Points') === null ? '0' : sessionStorage.getItem('player1Points')
                        : sessionStorage.getItem('youPoints') === null ? '0' : sessionStorage.getItem('youPoints')}</div>
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
                <div className={`${styles.playerInfo} ${player1Turn === false && winner === null ? styles.playerActiveCircle : ''}`}>
                    <div className={styles.playerImage}><FaUserCircle /></div>
                    <p className={styles.playerName}>{props.currentGame === 'PlayerVersusPlayer' ? 'Player O' : 'Computer'}</p>
                    <div className={styles.playerShape} style={{ color: '#00a8ff' }}><BsRecordCircle /></div>
                    <div className={styles.playerName}>{props.currentGame === 'PlayerVersusPlayer' ?
                        sessionStorage.getItem('player2Points') === null ? '0' : sessionStorage.getItem('player2Points')
                        : sessionStorage.getItem('computerPoints') === null ? '0' : sessionStorage.getItem('computerPoints')}</div>
                </div>
            </div>
            <div className={styles.gameStatus}>
                {winner ?
                    <button className={`${styles.button} ${styles.buttonWinner}`} onClick={() => { clearBoard() }}>Continue</button>
                    : <button className={`${styles.button} ${styles.buttonReset}`} onClick={() => { clearBoard() }}>Reset</button>}
            </div>
        </div>
    )
}

export default GameBoard