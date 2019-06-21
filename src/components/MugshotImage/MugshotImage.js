import { useState } from 'react'
import { requestMugshot, postMugshot } from '../../config/services/mugshot.service'
import {DEFAULT_IMAGE} from '../../config/constants'

const Mugshotimage = (newFile) => {
    const [mugshotSrc, setMugshot] = useState(DEFAULT_IMAGE)

    
    const request = () => {
        requestMugshot().then(returnedMugshot => setMugshot(returnedMugshot)).catch(error => setMugshot(DEFAULT_IMAGE))
    }
    
    if(newFile){
        postMugshot(newFile).then(request)
    }
    else{
        request();
    }
    
    return mugshotSrc
}

export default Mugshotimage