import React from 'react'

import {
    PageWrapper,
    ProfileHeader,
    ProfileInfoWrapper,
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
    PostHighlight,
    PostTitle,
    PostContentPreview
} from './Profile.style'

const Profile = () => {
    return (
        <PageWrapper>
            <ProfileHeader>
            </ProfileHeader>
            <ProfileInfoWrapper>
                <PlayerPictureWrapper>
                    <PlayerPicture>
                    </PlayerPicture>
                    <PlayerLevel>
                        7
                    </PlayerLevel>
                </PlayerPictureWrapper>
                <PlayerName>
                    Daniela Santos
                </PlayerName>
                <PlayerBio>
                    Envagelista de React, amante de CSS e a melhor ADC que vai conhecer <span role="img" aria-label="emojo">🏹</span>
                </PlayerBio>
                <PlayerBadgesWrapper>
                    <PlayerBadge></PlayerBadge>
                    <PlayerBadge></PlayerBadge>
                    <PlayerBadge></PlayerBadge>
                </PlayerBadgesWrapper>
            </ProfileInfoWrapper>
            <SocialMediaWrapper>
                <SocialMediaIcon></SocialMediaIcon>
                <SocialMediaIcon></SocialMediaIcon>
                <SocialMediaIcon></SocialMediaIcon>
            </SocialMediaWrapper>
            <PostsHighlightWrapper>
                <PostHighlight>
                    <PostTitle>
                        REST API com Node.JS
                    </PostTitle>
                    <PostContentPreview>
                        Construir uma API REST não é tão difícil quanto parece. Neste tutorial vamos precisar das ferramentas listadas abaixo:
                    </PostContentPreview>
                </PostHighlight>
                <PostHighlight>
                    <PostTitle>
                        SpringBoot Primeiros Passos
                    </PostTitle>
                    <PostContentPreview>
                        Aprenda a trabalhar com uma das ferramentas mais utilizadas no mercado de Java.
                    </PostContentPreview>
                </PostHighlight>
            </PostsHighlightWrapper>
        </PageWrapper>
    );
}

export default Profile