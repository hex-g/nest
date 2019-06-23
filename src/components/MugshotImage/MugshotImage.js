import { useState } from 'react'
import { requestMugshot, postMugshot } from '../../config/services/mugshot.service'
import { hideAlert } from '../../components/Alert'
import {DEFAULT_IMAGE} from '../../config/constants'

const Mugshotimage = (newFile) => {
    const [mugshotSrc, setMugshot] = useState(DEFAULT_IMAGE)
    const updateAllMugshots = () => {
        document.querySelectorAll('[data-mugshot = true]').forEach( (image) => image.src=mugshotSrc )
    }

    const request = () => {
        requestMugshot().then(returnedMugshot => { setMugshot(returnedMugshot); hideAlert() }).catch(error => setMugshot(DEFAULT_IMAGE))
    }
    
    if(newFile){
        postMugshot(newFile).then(() => {request(); updateAllMugshots()})
    }
    else{
        request();
    }
    return mugshotSrc
}

export default Mugshotimage