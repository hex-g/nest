import React, { useState } from 'react'
import { requestMugshot } from '../../config/services/mugshot.service'
import {DEFAULT_IMAGE} from '../../config/constants'

const Mugshotimage = (newMugshot) => {
    const [mugshotSrc, setMugshot] = useState(DEFAULT_IMAGE)

    requestMugshot().then(returnedMugshot => setMugshot(returnedMugshot)).catch(error => console.error(error))
    
    return mugshotSrc
}

export default Mugshotimage