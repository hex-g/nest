import { useState } from 'react'
import { requestMugshot, postMugshot, requestBanner, postBanner } from '../../config/services/mugshot.service'
import { hideAlert } from '../../components/Alert'
import {DEFAULT_IMAGE} from '../../config/constants'


export const MugshotImage = (newFile) => {
    const [mugshotSrc, setMugshot] = useState(DEFAULT_IMAGE)

    const updateAllMugshots = () => {
        document.querySelectorAll('[data-mugshot = true]').forEach( (image) => image.src=mugshotSrc )
    }

    const request = () => {
        requestMugshot().then(returnedMugshot => {setMugshot(returnedMugshot) }).catch(error => {setMugshot(DEFAULT_IMAGE)})
    }

    if(newFile){
        postMugshot(newFile).then(async () => {await request(); updateAllMugshots(); hideAlert()})
    }
    else{
        request();
    }
    return mugshotSrc
}

export const BannerImage = (newFile) => {
    const [bannerSrc, setBanner] = useState(DEFAULT_IMAGE)

    const request = () => {
        requestBanner().then(returnedBanner => { setBanner(returnedBanner) }).catch(error => {setBanner(DEFAULT_IMAGE)})
    }
    
    if(newFile){
        postBanner(newFile).then(async () => {await request(); hideAlert()})
    }
    else{
        request();
    }
    return bannerSrc
}
