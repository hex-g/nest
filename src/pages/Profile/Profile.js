import React from 'react'
import Icons from '../../Images/Icons'
import SquareCard from '../../components/SquareCard'
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
    // PostHighlight,
    PostTitle,
    PostContentPreview
} from './Profile.style'

const PLAYER_EXAMPLE = {
    playerName: 'Germano Brigido',
    playerLevel: 7,
    playerMugshot: 'https://media.licdn.com/dms/image/C4D03AQHv3UDt2OH7uw/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=qcsJy1xt4V8brdPvHXDU6WcBSnEr2mkH-FpmcFZRonU',
    playerBio: 'Envagelista de React, amante de CSS e o melhor ADC que vai conhecer 🏹',
    playerBanner: 'http://2.bp.blogspot.com/-hrv3ysQ065Y/VHdDPPDHJqI/AAAAAAAAnVs/ZqfAgci55Ag/s1600/elmo%2Bxablau.jpg',
    playerMedals: [
        {
            name: 'Melhor batata',
            image: 'data:image/png;base64,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'
        },
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
                    <PlayerPicture src={player.playerMugshot} />
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