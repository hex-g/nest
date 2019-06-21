import React, {useState} from 'react'

import Icons from '../../Images/Icons'
import SquareCard from '../../components/SquareCard'
import MugshotImage from '../../components/MugshotImage'
import Badges from '../../Images/Badges'
import Alert, { showAlert, hideAlert } from '../../components/Alert'

import {
    PageWrapper,
    PlayerHeader,
    PlayerInfoWrapper,
    PlayerPictureWrapper,
    PlayerMugshotWrapper,
    PlayerMugshot,
    MugshotEdit,
    MugshotEditLabel,
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
    playerBio: 'Envagelista de React, amante de CSS e o melhor ADC que vai conhecer 🏹',
    playerBanner: 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/03/como-adicionar-css-no-html-sem-tag.png',
    playerMedals: [
        {
            name: 'Melhor batata',
            image: Badges.TeamWorkBadge
        },
        {
            name: 'Melhor baatata',
            image: Badges.ChatBadge
        },
        {
            name: 'Melhor bataata',
            image: Badges.CssBadge
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

    const [file, setFile] = useState(null)

    const MugshotSrc = MugshotImage(file)
    const MB_SIZE = 1000000

    const validateFile = ({ target }) => {
        const file = target.files[0]
        if(file.size){
            if(file.size > MB_SIZE){
                showAlert('Ops, Seu arquivo deve ser menor que 1MB', 'error')
                return false
            }
            showAlert('Só um minutinho, Estamos processando...')
            setFile(file)
            return true
        }
        return false
    }

    return (
        <PageWrapper>
            <Alert />
            <PlayerHeader headerImage={player.playerBanner} />
            <PlayerInfoWrapper>
                <PlayerPictureWrapper>
                    <PlayerMugshotWrapper>
                        <PlayerMugshot id="mugshot" src={MugshotSrc}/>
                        <MugshotEditLabel htmlFor='mugshotEdit'>
                            Clique para Editar
                            <MugshotEdit type='file' accept="image/*" data-max-size="1024" id='mugshotEdit' onChange={e => validateFile(e)}></MugshotEdit>
                        </MugshotEditLabel>
                    </PlayerMugshotWrapper>
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