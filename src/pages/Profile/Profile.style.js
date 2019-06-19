import styled from 'styled-components'
import { design } from '../../components/Layout'

export const PageWrapper = styled.section`
    display: flex;
    max-height: 100vh;
    width: inherit;
    flex-direction: column;
    align-items: center;
    font-family: ${design.primaryFont};
    font-weight: normal;
    font-size: ${design.largeText};
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
  }
  &::-webkit-scrollbar {
    width: 16px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555555;
  }
`

export const PlayerHeader = styled.header`
    min-width: 100%;
    background: url('${ ({headerImage}) => headerImage }');
    min-height: 215px;
    background-size: cover;
`

export const PlayerInfoWrapper = styled.main`
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -60px;
`

export const PlayerPictureWrapper = styled.picture`
    height: 150px;
    width: 150px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
`

export const PlayerPicture = styled.img`
    height: 100%;
    width: 100%;
    clip-path: polygon(50% 0%, 100% 25%, 90% 75%, 50% 100%, 10% 75%, 0% 25%);
    margin-bottom: -10px;
    background: transparent;
`

export const PlayerLevel = styled.em`
    position: relative;
    bottom: 0;
    color: ${design.wildSand};
    background: ${design.burntSienna};
    padding: 3px 12px;
    border-radius: 4px;
    font-weight: bold;
    font-size: ${design.mediumText};
`

export const PlayerName = styled.h2`
    font-size: ${design.smallTitle};
    font-weight: 400;
    margin: 16px 0;
`

export const PlayerBio = styled.blockquote`
    font-family: ${design.secondaryFont};
    text-align: center;
`

export const PlayerBadgesWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PlayerBadge = styled.img`
    width: 78px;
    height: 85px;
    margin: 16px;

    &:nth-child(even){
        margin-top: 56px;
    }
`

export const SocialMediaWrapper = styled.div`
    position: absolute;
    top: 210px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SocialMediaIcon = styled.a`
    min-height: 50px;
    min-width: 50px;
    margin: 8px;
    margin-top: 24px;
`

export const PostsHighlightWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    max-width: 90%;
    margin-bottom: 48px;
`

export const PostTitle = styled.h2`
    font-size: ${design.smallTitle};
    font-weight: 400;
    margin: 24px;
    line-height: ${design.mediumTitle};
`

export const PostContentPreview = styled.p`
    font-family: ${design.secondaryFont};
    margin: 0 24px;
`