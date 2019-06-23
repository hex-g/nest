import { useState } from 'react'
import { requestPlayer, postPlayer } from '../../config/services/player.service'
import {DEFAULT_PLAYER} from '../../config/constants'


export const PlayerData = (newPlayer = null) => {
    const [playerInfo, setPlayer] = useState(DEFAULT_PLAYER)
    

    const request = () => {
        requestPlayer().then(returnedPlayer => { setPlayer(returnedPlayer.data) }).catch(error => { console.error(error) })
    }

    if(newPlayer){
        delete newPlayer.playerId
        postPlayer(newPlayer)
    }
    else if(playerInfo === DEFAULT_PLAYER){
        request();
    }

    return playerInfo
}

export default PlayerData