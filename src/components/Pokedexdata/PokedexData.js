import { useState } from 'react'
import { requestPokedex } from '../../config/services/pokedex.service'
import { DEFAULT_POKE } from '../../config/constants'


export const PlayerData = () => {
  const [pokeInfo, setPoke] = useState(DEFAULT_POKE)

  if (pokeInfo === DEFAULT_POKE) {
    requestPokedex().then(returnedPokedex => {
      setPoke(returnedPokedex.data)
    }).catch(error => { console.error(error) })
  }
  return pokeInfo
}

export default PlayerData
