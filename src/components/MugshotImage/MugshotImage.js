/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { useState } from 'react'
import {
  requestMugshot,
  postMugshot,
  requestBanner,
  postBanner
} from '../../config/services/mugshot.service'
import { hideAlert } from '../Alert'
import { DEFAULT_IMAGE, DEFAULT_BANNER } from '../../config/constants'


export const MugshotImage = newFile => {
  const [mugshotSrc, setMugshot] = useState(DEFAULT_IMAGE)

  const updateAllMugshots = () => {
    document.querySelectorAll('[data-mugshot = true]').forEach(image => image.src = mugshotSrc)
  }

  const request = () => {
    requestMugshot().then(returnedMugshot => {
      setMugshot(returnedMugshot)
    }).catch(error => { setMugshot(DEFAULT_IMAGE) })
  }

  if (newFile) {
    postMugshot(newFile).then(async () => { await request(); updateAllMugshots(); hideAlert() })
  } else {
    request()
  }
  return mugshotSrc
}

export const BannerImage = newFile => {
  const [bannerSrc, setBanner] = useState(DEFAULT_BANNER)

  const request = () => {
    requestBanner().then(returnedBanner => {
      setBanner(returnedBanner)
    }).catch(error => { setBanner(DEFAULT_BANNER) })
  }

  if (newFile) {
    postBanner(newFile).then(async () => { await request(); hideAlert() })
  } else {
    request()
  }
  return bannerSrc
}
