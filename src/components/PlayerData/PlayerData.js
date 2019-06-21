import { useState } from 'react'
import { requestPlayer } from '../../config/services/player.service'

const PlayerData = () => {
    const [player, setPlayer] = useState({})

    requestPlayer().then(returnedPlayer => setPlayer(returnedPlayer)).catch(error => alert(error))
    
    return player
}

export default PlayerData