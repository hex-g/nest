import styled from 'styled-components'
import { design } from '../../components/Layout'

export const Page = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  overflow: auto;
  max-height: 100vh;
`

export const Container = styled.div`
  padding: 10px 0;
  position: relative;
  overflow: auto;
  width: inherit;
`

export const Form = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`

export const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  padding: 24px;
`

export const Card = styled.div`
  box-shadow: ${design.postBoxShadow};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 250px;
  cursor: pointer;
  padding: 16px;
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
`

export const ProgressBar = styled.progress`
`

export const ProgressPercentage = styled.p`
`

export const AuthorWrapper = styled.figure`
`

export const AuthorImage = styled.img`
`

export const AuthorName = styled.figcaption`
`