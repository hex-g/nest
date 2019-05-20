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
`

export const ProfileHeader = styled.header`
    min-width: 100%;
    background: blue;
    min-height: 215px;
`

export const ProfileInfoWrapper = styled.main`
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
`

export const PlayerPicture = styled.img`
    height: 100%;
    width: 100%;
    background: purple;
    margin-bottom: -10px;
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

export const PlayerBadge = styled.picture`
    width: 78px;
    height: 85px;
    background: pink;
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
    background: black;
    margin: 16px;
`

export const PostsHighlightWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90%;
`

export const PostHighlight = styled.article`
    max-width: 40%;
    box-shadow: ${design.postBoxShadow};
    margin: 16px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
`

export const PostTitle = styled.h2`
    font-size: ${design.smallTitle};
    font-weight: 400;
    margin: 24px 36px;
    line-height: ${design.mediumTitle};
`

export const PostContentPreview = styled.p`
    font-family: ${design.secondaryFont};
    margin: 0 36px;
`