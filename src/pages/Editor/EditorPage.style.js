import styled from 'styled-components'


export const Page = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;

`
export const Directories = styled.ul`
  width: 150px;
  padding-left: 20px;
  list-style-type: square;
`

export const Directory = styled.button`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: ${props => props.level * 20}px;
`

export const Archive = styled.button`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: ${props => props.level * 20}px;
`

export const Wrapper = styled.div`
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
    font-size: .83em;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  h6 { 
    display: block;
    font-size: .67em;
    margin-top: 2.33em;
    margin-bottom: 2.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  display: flex;
  justify-content: flex-end;
`

export const Editor = styled.div`
  width: 720px;
  height: calc(100vh - 15px);
  overflow-y: auto;
  border: 1px solid red;
`

export const SendButton = styled.button`
  
`