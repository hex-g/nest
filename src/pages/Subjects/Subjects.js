import React from 'react'
import SquareCard from '../../components/SquareCard'
import {
    SubjectTitle, 
    Label, 
    BoldLabel,
    ProgressWrapper, 
    ProgressBar, 
    ProgressPercentage, 
    AuthorWrapper, 
    AuthorImage, 
    AuthorName,
    Page,
    Container,
    CardWrapper,
    Form,
    LabelWrapper
} from './Subjects.style'
import SearchBox from '../../components/SearchBox'

const cards = [
    {
        Subject:"string",
        DaysOfWeek:"string",
        LastExercise:"string",
        NextExamDate:"Date",
        ProgressPercentage:"0",
        pedagogue:"String<userId>"
    },
    {
        Subject:"Curso Hacker 2000",
        DaysOfWeek:"Sábados e Domingos",
        LastExercise:"26/04/2666",
        NextExamDate:"01/10/1001",
        ProgressPercentage:"69",
        pedagogue:"String<userId>"
    },
    {
        Subject:"string",
        DaysOfWeek:"string",
        LastExercise:"string",
        NextExamDate:"Date",
        ProgressPercentage:"100",
        pedagogue:"String<userId>"
    },
    {
        Subject:"Curso Hacker 2000",
        DaysOfWeek:"Sábados e Domingos",
        LastExercise:"26/04/2666",
        NextExamDate:"01/10/1001",
        ProgressPercentage:"30",
        pedagogue:"Elmo"
    }
]

const HandleCardMapping = () => {
    return cards.map((card) => {
        return(
            <SquareCard>
                <SubjectTitle>
                    {card.Subject}
                </SubjectTitle>
                <LabelWrapper>
                    <Label>
                        Aulas:
                    </Label>
                    <BoldLabel>
                        {card.DaysOfWeek}
                    </BoldLabel>
                </LabelWrapper>
                <LabelWrapper>
                    <Label>
                        Último Exercício:
                    </Label>
                    <BoldLabel>
                        {card.LastExercise}
                    </BoldLabel>
                </LabelWrapper>
                <LabelWrapper>
                    <Label>
                        Próxima Prova:
                    </Label>
                    <BoldLabel>
                        {card.NextExamDate}
                    </BoldLabel>
                </LabelWrapper>
                <LabelWrapper>
                    <Label>
                        Progresso de Atividades
                    </Label>
                </LabelWrapper>
                <ProgressWrapper>
                    <ProgressBar  max="100" value={card.ProgressPercentage}></ProgressBar>
                    <ProgressPercentage>
                        {card.ProgressPercentage}%
                    </ProgressPercentage>
                </ProgressWrapper>
                <AuthorWrapper>
                    <AuthorImage src="https://pbs.twimg.com/profile_images/1019786468087271425/fKvODolm_400x400.jpg"/>
                    <AuthorName>
                        {card.pedagogue}
                    </AuthorName>
                </AuthorWrapper>
            </SquareCard>
        )
    })
}

const Subject = () => {
    return (
        <Page>
            <Container>
                <Form>
                    <SearchBox />
                </Form>
                <CardWrapper>
                    {HandleCardMapping()}
                </CardWrapper>
            </Container>
        </Page>
    )
}

export default Subject