import React, { useState } from 'react'

import Icons from '../../Images/Icons'
import SquareCard from '../../components/SquareCard'
import { requestMugshot } from '../../config/services/mugshot.service'
import MugshotImage from '../../components/MugshotImage'

import {
    PageWrapper,
    PlayerHeader,
    PlayerInfoWrapper,
    PlayerPictureWrapper,
    PlayerPicture,
    PlayerLevel,
    SocialMediaWrapper,
    SocialMediaIcon,
    PlayerName,
    PlayerBio,
    PlayerBadgesWrapper,
    PlayerBadge,
    PostsHighlightWrapper,
    PostTitle,
    PostContentPreview
} from './Profile.style'


const PLAYER_EXAMPLE = {
    playerName: 'Germano Brigido',
    playerLevel: 7,
    playerMugshot: requestMugshot,
    playerBio: 'Envagelista de React, amante de CSS e o melhor ADC que vai conhecer 🏹',
    playerBanner: 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/03/como-adicionar-css-no-html-sem-tag.png',
    playerMedals: [
        {
            name: 'Melhor batata',
            image: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png'
        },
        {
            name: 'Melhor batata',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
        },
        {
            name: 'Melhor batata',
            image: 'https://www.shareicon.net/download/2015/09/16/102069_html5.svg'
        }
    ],
    playerPosts: [
        {
            title: 'REST API com Node.JS',
            content: 'Construir uma API REST não é tão difícil quanto parece. Neste tutorial vamos precisar das ferramentas listadas abaixo:'
        },
        {
            title: 'SpringBoot Primeiros Passos',
            content: 'Aprenda a trabalhar com uma das ferramentas mais utilizadas no mercado de Java.'
        }
    ],
    socialMedia: [
        {
            socialMedia: 'Github',
            userName: '@dani_Santos_S2_<3_XOXO',
            url: 'https://twitter.com'
        },
        {
            socialMedia: 'Linkedin',
            userName: '@dani_Santos_S2_<3_XOXO',
            url: 'https://twitter.com'
        },
        {
            socialMedia: 'Twitter',
            userName: '@dani_Santos_S2_<3_XOXO',
            url: 'https://twitter.com'
        }
    ]
}

const handleBadgesRendering = badges => {
    return badges.map(badge => {
        return (
            <PlayerBadge src = {badge.image}
            title = {badge.name}
            alt = {badge.name} 
            key = {badge.name}/>
        ); 
    });
}

const handlePostsRendering = posts => { 
    return posts.map(post => {
        return(
            <SquareCard key = {post.title}>
                <PostTitle>
                    {post.title}
                </PostTitle>
                <PostContentPreview>
                    {post.content}
                </PostContentPreview>
            </SquareCard>    
        )
    })
}


const handleSocialMediaRendering = socialMediaList => {
    return socialMediaList.map(socialMedia => {
        const SocialMediaSvg = Icons[socialMedia.socialMedia]
        return (
            <SocialMediaIcon href = {socialMedia.url}
            title = {socialMedia.userName}
            alt = {socialMedia.socialMedia} 
            key = {socialMedia.socialMedia}>
                <SocialMediaSvg />
            </SocialMediaIcon>
        ); 
    });
}





const Profile = ({player = PLAYER_EXAMPLE}) => {
    
    
    return (
        <PageWrapper>
            <PlayerHeader headerImage={player.playerBanner} />
            <PlayerInfoWrapper>
                <PlayerPictureWrapper>
                    
                    <PlayerPicture id="mugshot" src={MugshotImage()}/>
                    <PlayerLevel>
                        {player.playerLevel}
                    </PlayerLevel>
                </PlayerPictureWrapper>
                <PlayerName>
                    {player.playerName}
                </PlayerName>
                <PlayerBio>
                    {player.playerBio}    
                </PlayerBio>
                <PlayerBadgesWrapper>
                    {handleBadgesRendering(player.playerMedals)}
                </PlayerBadgesWrapper>
            </PlayerInfoWrapper>
            <SocialMediaWrapper>
                {handleSocialMediaRendering(player.socialMedia)}
            </SocialMediaWrapper>
            <PostsHighlightWrapper>
                {handlePostsRendering(player.playerPosts)}
            </PostsHighlightWrapper>
        </PageWrapper>
    );
}

export default Profile