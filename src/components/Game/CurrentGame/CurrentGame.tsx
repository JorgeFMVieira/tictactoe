import React from 'react'
import PlayerVersusPlayer from './PlayerVersusPlayer/PlayerVersusPlayer'
import PlayerVersusAI from './PlayerVersusAI/PlayerVersusAI'

export type CurrentGameProps = {
    currentGame: string
}

const CurrentGame = (props: CurrentGameProps) => {
    return (
        <div style={{ height: '100%' }}>
            {props.currentGame  != "" && props.currentGame === "PlayerVersusAI" ? <PlayerVersusAI currentGame={props.currentGame} /> : <PlayerVersusPlayer currentGame={props.currentGame} />}
        </div>
    )
}

export default CurrentGame