import styled from 'styled-components'
import {design} from '../Layout'

export const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    top: ${ props => props.behavior.show ? '0px' : '-56px' };
    transition: .3s ease-in;
    height: auto;
    z-index: 3;
    transition-delay: ${props => props.behavior.type === 'idling' ? '.5s' : '0s'};
`

export const MessageBox = styled.div`
    height: 24px;
    padding: 16px 48px;
    background: ${props => props.behavior.type === 'error' 
        ? design.burntSienna 
        : design.hippieBlue};
    color: ${design.wildSand};
    font-family: ${design.primaryFont};
    font-size: ${design.largeText};
    border-radius: 0 0 7px 7px;
    text-align: center;
    min-width: 500px;
`