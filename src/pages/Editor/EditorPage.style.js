import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`

export const Directories = styled.ul`
  max-width: calc(100vh - 50px);
  height: calc(100vh - 35px);
  padding: 10px 20px;
  list-style-type: square;
  border-right: 1px solid #d3d3d3;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
  }
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555555;
  }
`

export const Folder = styled.button`
  width: 200px;
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
  width: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
  font-weight: bold;
`

export const File = styled.button`
  width: 200px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: ${props => props.level * 20}px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    border: 1px dashed orange;
  }
`

export const FileName = styled.span`
  width: inherit;
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
  h1 {
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  h2 {
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  h3 {
    display: block;
    font-size: 1.17em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  h4 {
    display: block;
    font-size: 1em;
    margin-top: 1.33em;
    margin-bottom: 1.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  h5 {
    display: block;
    font-size: 0.83em;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  h6 {
    display: block;
    font-size: 0.67em;
    margin-top: 2.33em;
    margin-bottom: 2.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
`

export const Title = styled.h1`
`

export const Editor = styled.div`
  width: inherit;
  height: calc(100vh - 110px);
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
  }
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555555;
  }

  border: 1px solid rgb(21,21,21);
`

export const SendButton = styled.button`
  z-index: 2;
  width: 50px;
  height: 20px;
  box-shadow: 0px 3px 5px 0px rgba(21,21,21,0.3);
  border: 1px solid rgb(21,21,21);
  background: transparent;
  outline: none;
  cursor: pointer;
  font-size: 12px;
`
