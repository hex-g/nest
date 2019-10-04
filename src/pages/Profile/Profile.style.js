import styled from 'styled-components'
import { design, textColor, backgroundBadge } from '../../components/Layout'

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
		width: 3px;
		background-color: #F5F5F5;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #555555;
	}
`

export const HeaderEditLabel = styled.label`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	bottom: 0;
	display: none;
	background: rgba(0,0,0,.5);
	align-items: center;
	justify-content: center;
	font-family: ${design.secondaryFont};
	font-size: ${design.mediumText};
	font-weight: 100;
	cursor: pointer;
`

export const PlayerHeader = styled.header`
	min-width: 100%;
	background: url('${ ({ headerImage }) => headerImage}');
	min-height: 215px;
	background-size: cover;
	background-position: center;
	position: relative;
	
	&:hover ${HeaderEditLabel} {
		display: flex;
	}
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

export const ImageEdit = styled.input`
	display: none;
`

export const MugshotEditLabel = styled.label`
	display: none;
	background: rgba(0,0,0,.5);
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 1;
	top: 0;
	text-align: center;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-family: ${design.secondaryFont};
	font-size: ${design.mediumText};
	box-sizing: border-box;
	padding: 24px;
	font-weight: 100;
	line-height: 1.2em;
`

export const PlayerMugshotWrapper = styled.div`
	display: flex;
	justify-content: center;
	border: 4px solid ${design.rajah};
	background-color: ${design.rajah};
	height: 100%;
	width: 100%;
	position: absolute;
	overflow: hidden;
	&:hover ${MugshotEditLabel} {
		display: flex;
	}
`

export const PlayerMugshot = styled.img`
	height: 100%;
	background: transparent;
`


export const PlayerLevel = styled.em`
	position: absolute;
	bottom: -10px;
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
	max-width: 390px;
	flex-shrink: 1;
	line-break: unset;
	width: auto;
	cursor: pointer;

	&:focus{
		cursor: text;
	}
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
	box-sizing: border-box;
	cursor: pointer;

	&:nth-child(even){
		margin-top: 56px;
	}

	&:hover{
		filter: drop-shadow(0px 0px 0.25em ${textColor}) brightness(50%)
	}
`

export const SocialMediaWrapper = styled.div`
	position: absolute;
	fill: ${design.rajah};
	top: 210px;
	right: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const SocialMediaIcon = styled.a`
	min-height: 50px;
	min-width: 50px;
	margin-top: 24px;
`

export const PostsHighlightWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	line-height: 1.5;
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

export const BadgeSelectDialog = styled.dialog`
	position: fixed;
	display: none;
	justify-content: center;
	align-items: center;
	align-self: center;
	justify-self: center;
	background: transparent;
	border: none;
	height: auto;
	width: auto;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 2;

	&[data-show='true']{
		display: flex;
	}
`

export const BadgeSelectOutter = styled.div`
	position: absolute;
	z-index: -1;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	cursor: pointer;
`

export const BadgeSelectWrapper = styled.div`
	position: absolute;
	height: auto;
	width: auto;
	max-width: 660px;
	display: flex;
	flex-wrap: wrap;
	padding: 24px;
	align-items: flex-start;
	justify-content: flex-start;
	background: ${backgroundBadge};
	border: none;
	box-shadow: 0px 4px 8px rgba(0,0,0,.5);
	border-radius: 7px;
	overflow-y: auto;

	& ${PlayerBadge} {
		margin: 16px;
		height: auto;
		width: auto;

		&[data-disabled='true']{
			filter: grayscale(100%);
			opacity: .2;

			&:hover{
					filter: grayscale(100%);
			}
		}
		&[data-selected='true']{
			filter: grayscale(100%) drop-shadow(0 0 4px ${textColor});
			opacity: 1;

			&:hover{
				filter: grayscale(100%) drop-shadow(0 0 4px ${textColor});
			}
		}
	}
`