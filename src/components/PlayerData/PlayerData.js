import { useState } from 'react'
import { requestPlayer } from '../../config/services/player.service'

const PlayerData = () => {
    const [player, setPlayer] = useState(null)
    
    requestPlayer().then(returnedPlayer => {if(!player) setPlayer(returnedPlayer.data)}).catch(error => alert(error))
    
    return player
}

export default PlayerData