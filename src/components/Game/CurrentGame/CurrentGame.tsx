import React from 'react'
import PlayerVersusPlayer from './PlayerVersusPlayer/PlayerVersusPlayer'
import PlayerVersusAI from './PlayerVersusAI/PlayerVersusAI'

export type CurrentGameProps = {
    currentGame: string
}

const CurrentGame = (props: CurrentGameProps) => {
    return (
        <div>
            {props.currentGame  != "" && props.currentGame === "PlayerVersusAI" ? <PlayerVersusAI /> : <PlayerVersusPlayer />}
        </div>
    )
}

export default CurrentGame