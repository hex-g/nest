import styled from 'styled-components'
import { design, textColor, backgroundScroll } from '../../components/Layout'

export const Page = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  overflow: auto;
  max-height: 100vh;

  a{
    text-decoration: none;
  }
`

export const Container = styled.div`
  padding: 10px 0;
  position: relative;
  overflow: auto;
  width: inherit;

  &::-webkit-scrollbar {
    width: 3px;
    background-color: ${design.wildSand};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${backgroundScroll};
  }
`

export const Form = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`

export const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  padding: 64px 24px;
`
export const CardLink = styled.div`
  text-decoration: none;
  color: ${textColor};
`

export const SubjectTitle = styled.h1`
  font-size: ${design.hugeText};
  font-weight: bold;
  margin-bottom: 24px;
`

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Label = styled.p`
  margin: 8px 0;
  font-size: ${design.largeText};
`

export const BoldLabel = styled(Label)`
  font-weight: bold;
  margin-left: 4px;
`

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
`

export const ProgressBar = styled.progress`
  appearance: none;
  width: 70%;
  height: 20px;

  &::-webkit-progress-bar{
    border-radius: 4px;
    overflow: hidden;
    background: ${design.wildSand};
    border: solid 1px ${design.rajah};
  }

  &::-webkit-progress-value{
    background: ${design.rajah};
  }
`

export const ProgressPercentage = styled(BoldLabel)`
  margin-left: 8px;
  font-size: ${design.mediumText};
`

export const AuthorWrapper = styled.figure`
  position: absolute;
  bottom: 0;
  max-width: 50%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const AuthorImage = styled.img`
  width: 80px;
  clip-path: polygon(50% 0%, 100% 25%, 90% 75%, 50% 100%, 10% 75%, 0% 25%);
`

export const AuthorName = styled.figcaption`
  padding: 16px 8px 24px 8px;
  font-weight: bold;
  box-sizing: border-box;
`