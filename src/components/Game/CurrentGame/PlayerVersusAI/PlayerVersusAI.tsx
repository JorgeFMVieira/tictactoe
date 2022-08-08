import React from 'react'
import GameBoard from '../GameBoard/GameBoard'

export type PlayerVersusAIProps = {
    currentGame: string
}

const PlayerVersusAI = (props: PlayerVersusAIProps) => {
    return (
        <div style={{ height: '100%' }}>
            <GameBoard currentGame={props.currentGame} />
        </div>
    )
}

export default PlayerVersusAI