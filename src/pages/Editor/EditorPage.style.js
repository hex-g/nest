import styled from 'styled-components'
import { design, textColor, backgroundScroll, codeBackground } from '../../components/Layout'

export const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 100%;
`

export const Directories = styled.div`
  min-width: 300px;
  overflow: hidden;
  max-width: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 35px 20px 0;
`

export const Files = styled.div`
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 3px;
    background-color: ${design.wildSand};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${backgroundScroll};
  }
`

export const Folder = styled.button`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: ${props => props.level * 20}px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`

export const FolderName = styled.span`
  color: ${textColor};
  white-space: nowrap;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
  font-weight: bold;
  flex-grow: 1;
`

export const File = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: ${props => props.level * 20}px;
`

export const FileButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  outline: none;
  border: 1px dashed transparent;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    border: 1px dashed orange;
    transition: 0.2s ease;
  }
`

export const FileName = styled.span`
  width: 150px;
  color: ${textColor};
  white-space: nowrap;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 10px);
  padding-left: 20px;
  border-left: 1px solid #d3d3d3;
  overflow-y: auto;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;

  &::-webkit-scrollbar {
    width: 3px;
    background-color: ${design.wildSand};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${backgroundScroll};
  }

  h1 {
    display: block;
    font-size: 2em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h2 {
    display: block;
    font-size: 1.5em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h3 {
    display: block;
    font-size: 1.17em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h4 {
    display: block;
    font-size: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h5 {
    display: block;
    font-size: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h6 {
    display: block;
    font-size: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  textarea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 70px;
    background-color: ${codeBackground};
    color: ${textColor};
    resize: none;
  }
`

export const Breadcrumb = styled.span`
  margin-top: 32px;
  font-size: ${design.mediumText};
  color: ${design.rajah};
`

export const EditorMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  border-bottom-color:${props => props.empty ? 'transparent' : textColor};
  padding: 16px 0 8px 0;

  svg {
    display: ${props => props.empty ? 'none' : 'inline'};
    width: 100%;
    height: 100%;

    &:hover {
      fill: blue;
    }
  }
`

export const Title = styled.span`
  font-size: ${design.smallTitle};
`

export const WaitComponent = styled.div`
  display: inline;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  margin: auto 0;
  padding: 0 20%;
  font-size: 32px;
`

export const Editor = styled.div`
  width: auto;
  height: calc(100vh - 110px);
  
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555555;
  }
`

export const SendButton = styled.button`
  display: ${props => props.empty ? 'none' : 'inline'};
  z-index: 2;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  color: ${textColor};
  margin-right: 16px;
  padding: 0;
`

export const NewFile = styled.button`
  width: 100%;
  height: 72px;
  font-size: ${design.largeText};
  position: relative;
  background-color: ${design.rajah};
  color: ${design.wildSand};
  border: none;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${design.burntSienna};
    transition: 0.2s ease-in;
  }
`

export const DeleteButton = styled.button`
  border: none;
  color: ${design.burntSienna};
  font-size: 24px;
  font-weight: bold;
  padding: 4px;
  background: transparent;
  outline: none;
  cursor: pointer;
`
