import React from 'react'
import GameBoard from '../GameBoard/GameBoard'

export type PlayerVersusPlayerProps = {
    currentGame: string
}

const PlayerVersusPlayer = (props: PlayerVersusPlayerProps) => {
    return (
        <div style={{ height: '100%' }}>
            <GameBoard currentGame={props.currentGame} />
        </div>
    )
}

export default PlayerVersusPlayer