import React from 'react'
import { MessageWrapper, MessageBox } from './Alert.style'
import {design} from '../Layout'

export const showAlert = (message='Estamos processando...', type = 'idling',  HideAutomaticaly = true, HideTime = 5000) => {
    const alertMessage = document.querySelector('#alertMessage')
    const messageContent = alertMessage.querySelector('#messageContent')

    if (!alertMessage || !messageContent) return

    let color = design.hippieBlue
    switch(type){
        case 'error':
            color = design.burntSienna
            break;
        default:
            color = design.hippieBlue
            break;
    }

    alertMessage.style.top = 0
    messageContent.textContent = message
    messageContent.style.backgroundColor = color

    if(HideAutomaticaly){
        setTimeout(hideAlert, HideTime)
    }
    
}


export const hideAlert = () => {
    const alertMessage = document.querySelector('#alertMessage')

    if (!alertMessage) return

    alertMessage.style.top = '-56px'

}

const Alert = () => {
    return (
        <MessageWrapper id='alertMessage'>
            <MessageBox id='messageContent'>
                Estamos Processando... 
            </MessageBox>
        </MessageWrapper>
    )
}

export default Alert