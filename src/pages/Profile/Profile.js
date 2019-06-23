import React, {useState} from 'react'

import Icons from '../../Images/Icons'
import SquareCard from '../../components/SquareCard'
import { MugshotImage, BannerImage } from '../../components/MugshotImage'
import PlayerData from '../../components/PlayerData'
import Badges from '../../Images/Badges'
import Alert, { showAlert, hideAlert } from '../../components/Alert'

import {
    PageWrapper,
    PlayerHeader,
    PlayerInfoWrapper,
    PlayerPictureWrapper,
    PlayerMugshotWrapper,
    PlayerMugshot,
    ImageEdit,
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
    PostContentPreview,
    HeaderEditLabel
} from './Profile.style'


const PLAYER_EXAMPLE = {
    playerName: 'Germano Brigido',
    playerLevel: 7,
    playerBio: 'Envagelista de React, amante de CSS e o melhor ADC que vai conhecer 🏹',
    playerBanner: 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/03/como-adicionar-css-no-html-sem-tag.png',
    playerMedals: [
        {
            name: 'Teamwork maestry',
            image: Badges.TeamWorkBadge
        },
        {
            name: '+50 Feedback',
            image: Badges.ChatBadge
        },
        {
            name: 'CSS Ninja',
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
            userName: 'GitHub',
            url: 'https://twitter.com'
        },
        {
            socialMedia: 'Linkedin',
            userName: 'LinkedIn',
            url: 'https://twitter.com'
        },
        {
            socialMedia: 'Twitter',
            userName: 'Twitter',
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

    const [mugshotFile, setMugshot] = useState(null)
    const [bannerFile, setBanner] = useState(null)
    const [playerBio, setBio] = useState('Fale sobre você...')
    const playerInfo = PlayerData()

    //console.table(playerInfo)
    const MugshotSrc = MugshotImage(mugshotFile)
    const BannerSrc = BannerImage(bannerFile)
    const MB_SIZE = 2000000

    const validateFile = (file) => {
        if(file && file.size){
            if(file.size > MB_SIZE){
                showAlert('Ops, Seu arquivo deve ser menor que 2MB', 'error')
                return false
            }
            showAlert('Só um minutinho, Estamos processando...', 'idling', false)
            return true
        }
        return false
    }

    const validateMugshot = ({ target }) => {
        const file = target.files[0]
        if(validateFile(file)) 
            setMugshot(file)
    }

    const validateBanner = ({ target }) => {
        const file = target.files[0]
        if(validateFile(file)) 
            setBanner(file)
    }

    return (
        <PageWrapper>
            <Alert />
            <PlayerHeader headerImage={BannerSrc}>
                <HeaderEditLabel htmlFor='HeaderEdit'>
                    Clique para Editar
                    <ImageEdit type='file' accept="image/*" data-max-size="2048" id='HeaderEdit' onChange={e => validateBanner(e)}></ImageEdit>
                </HeaderEditLabel>
            </PlayerHeader>
            <PlayerInfoWrapper>
                <PlayerPictureWrapper>
                    <PlayerMugshotWrapper>
                        <PlayerMugshot id="mugshot" data-mugshot={true} src={MugshotSrc}/>
                        <MugshotEditLabel htmlFor='mugshotEdit'>
                            Clique para Editar
                            <ImageEdit type='file' accept="image/*" data-max-size="2048" id='mugshotEdit' onChange={e => validateMugshot(e)}></ImageEdit>
                        </MugshotEditLabel>
                    </PlayerMugshotWrapper>
                    <PlayerLevel>
                        {player.playerLevel}
                    </PlayerLevel>
                </PlayerPictureWrapper>
                <PlayerName>
                    {player.playerName}
                </PlayerName>
                <PlayerBio contentEditable={true} onBlur={({ target }) => setBio(playerBio)}>
                    {playerBio}
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