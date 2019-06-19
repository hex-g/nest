import { design } from '../../../components/Layout'
import styled from 'styled-components'

export const Options = styled.div`
      width: 200px;
<<<<<<< Updated upstream
      height: 100%;
=======
      max-height: 100%;
      display: flex;
      flex-direction: column;
>>>>>>> Stashed changes
    `

export const ButtonWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 0;
    `

export const Label = styled.label`
      cursor: pointer;
      background-color: ${design.wildSand};
      text-indent: -9999px;
      border: 2px solid ${design.burntSienna};
      width: 55px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      position: relative;

      &::after {
        content: '';
        background: ${design.burntSienna};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        left: 4px;
        transition: ease-in-out 200ms;
      }
    `
export const ThemeButton = styled.input`
      height: 0;
      width: 0;
      visibility: hidden;

      &:checked + label {
        background-color: ${design.rajah};

        &::after {
          left: calc(100% - 5px);
          transform: translateX(-100%);
        }
      }
    `