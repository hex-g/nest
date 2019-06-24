import React, {useState} from 'react'

import Icons from '../../Images/Icons'
import SquareCard from '../../components/SquareCard'
import { MugshotImage, BannerImage } from '../../components/MugshotImage'
import PlayerData from '../../components/PlayerData'
import PokeData from '../../components/Pokedexdata'
import Badges from '../../Images/Badges'
import Alert, { showAlert } from '../../components/Alert'

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
    HeaderEditLabel,
    BadgeSelectDialog,
    BadgeSelectWrapper,
    BadgeSelectOutter
} from './Profile.style'


const PLAYER_EXAMPLE = {
  playerName: 'Germano Brigido',
  playerLevel: 7,
  playerBio: 'Envagelista backend, amante de C# e a melhor ADC que vai conhecer 🏹',
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
    },
    {
      name: 'Teamwork novice',
      image: Badges.TeamWorkBadge2
    },
    {
      name: '+100 Feedback',
      image: Badges.ChatBadge2
    },
    {
      name: 'CSS Master',
      image: Badges.CssBadge2
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
      url: 'https://github.com/LiviaSayuri'
    },
    {
      socialMedia: 'Linkedin',
      userName: 'LinkedIn',
      url: 'https://linkedin.com'
    },
    {
      socialMedia: 'Twitter',
      userName: 'Twitter',
      url: 'https://twitter.com'
    }
  ]
}


const Profile = ({player = PLAYER_EXAMPLE}) => {   


    const [mugshotFile, setMugshot] = useState(null)
    const [bannerFile, setBanner] = useState(null)
    const [playerProfileInfo, setProfileInfo] = useState(null)
    
    const [selectedBadges, setbadges] = useState([0,1,2])
    const [selectedBadge, setbadge] = useState(0)
    

    const MugshotSrc = MugshotImage(mugshotFile)
    const BannerSrc = BannerImage(bannerFile)
    const PlayerInfo = PlayerData(playerProfileInfo)
    const playerName = PokeData()

    const MB_SIZE = 2000000

    const handleDialog = (show, position) => {
        document.querySelector('#badgesDialog').dataset.show = show
        if(show === false) return 
            
        setbadge(selectedBadges[position])
    }

    const handleBadgeSelect = (newIndex, target) => {
        let verify = target.dataset.disabled

        if(verify === 'true') return

        let position = selectedBadges.indexOf(selectedBadge)
        let newArray = [...selectedBadges]
        newArray[position] = newIndex
        setbadges(newArray)
        setbadge(newIndex)
    
    }

    const handleDisplayBadgesRendering = (badges) => {
        if(!badges) return

        return badges.map((badge, index) => {
            return (
                <PlayerBadge src = {badge.image}
                title = {badge.name}
                alt = {badge.name} 
                key = {badge.name}
                onClick =  {() => handleDialog(true, index)} />
            ); 
        });
    }

    const handleDialogBadgesRendering = (badges) => {
        return badges.map((badge, position) => {
            return (
                <PlayerBadge src = {badge.image}
                title = {badge.name}
                alt = {badge.name} 
                key = {badge.name}
                data-disabled = {selectedBadges.indexOf(position) >= 0}
                data-selected = {selectedBadge === position}
                onClick={({target}) => handleBadgeSelect(position, target)}/>
            ); 
        });
    }


    const handleSelectedBadgesRendering = (allBadges, selected = []) => {

        let displayBadges = []

        let a = selected.forEach((value, backIndex) => {
            allBadges.forEach((badge, index) => {
                if(index === value)displayBadges[backIndex] = badge
            })
        })

        return displayBadges
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
        <SocialMediaIcon href={socialMedia.url}
          title={socialMedia.userName}
          alt={socialMedia.socialMedia}
          key={socialMedia.socialMedia}
          target="_blank">
          <SocialMediaSvg />
        </SocialMediaIcon>
      );
    });
  }


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
            <BadgeSelectDialog id='badgesDialog' data-show={false}>
                <BadgeSelectOutter onClick = { () => handleDialog(false)}/>
                <BadgeSelectWrapper>    
                    {handleDialogBadgesRendering(player.playerMedals)}
                </BadgeSelectWrapper>
            </BadgeSelectDialog>
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
                    {playerName.firstName} {playerName.lastName}
                </PlayerName>
                <PlayerBio 
                    contentEditable={true} 
                    onBlur={({ target }) => {
                            setProfileInfo({...PlayerInfo, flavorText: target.textContent})
                        }
                    }>
                    {(PlayerInfo && PlayerInfo.flavorText) || 'Conte um pouco sobre você...'}
                </PlayerBio>
                <PlayerBadgesWrapper>
                    {handleDisplayBadgesRendering(handleSelectedBadgesRendering(player.playerMedals, selectedBadges), true)}
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