import React from 'react'
import { Link } from 'react-router-dom'
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
  CardLink,
  LabelWrapper
} from './Subjects.style'

const cards = [
  {
    Subject: 'Estrutura de Dados',
    DaysOfWeek: 'quartas-feiras',
    LastExercise: 'Lista Estática',
    NextExamDate: '22/05/2019',
    ProgressPercentage: '90',
    profileImage: 'https://media.licdn.com/dms/image/C4D03AQERbUJGQ7saKg/profile-displayphoto-shrink_800_800/0?e=1566432000&v=beta&t=Qq-EnpnRRWSenXY5Sa9595WARS3AB-m3D-ivCen1nLE',
    pedagogue: 'Célia Taniwaki'
  },
  {
    Subject: 'Técnicas de Programação Web',
    DaysOfWeek: 'segundas e terças-feiras',
    LastExercise: 'Testes unitário',
    NextExamDate: '19/05/2019',
    ProgressPercentage: '40',
    profileImage: 'https://media.licdn.com/dms/image/C4E03AQHjlnVy1ck_PA/profile-displayphoto-shrink_800_800/0?e=1566432000&v=beta&t=k7EIrvhG6A9iNxG79YhwiDtDQl7Ja9eNhfH8lE0BRuo',
    pedagogue: 'Rodrigo Pinto'
  },
  {
    Subject: 'Engenharia de Software',
    DaysOfWeek: 'terças-feiras',
    LastExercise: 'Formulário UX',
    NextExamDate: '-',
    ProgressPercentage: '100',
    profileImage: 'https://media.licdn.com/dms/image/C5603AQHvUSwEC84prg/profile-displayphoto-shrink_800_800/0?e=1566432000&v=beta&t=ctSKBs0FUr9aDb0CX8uBadSaudr9SNudBNbGdiIAUNY',
    pedagogue: 'Gerson Santos'
  },
  {
    Subject: 'Pesquisa e Inovação',
    DaysOfWeek: 'quintas-feiras',
    LastExercise: 'Última sprint',
    NextExamDate: '23/05/2019',
    ProgressPercentage: '0',
    profileImage: 'https://media.licdn.com/dms/image/C5603AQGWz5M0js_VjA/profile-displayphoto-shrink_800_800/0?e=1566432000&v=beta&t=3fJqfzuOGUJobmXgOTTpoNx6r5CLdh7h1KwOryaAGQ0',
    pedagogue: 'Fernando Brandão'
  },
  {
    Subject: 'Socioemocional',
    DaysOfWeek: 'exceto às terças-feiras',
    LastExercise: 'Apresentação',
    NextExamDate: '-',
    ProgressPercentage: '100',
    profileImage: 'https://media.licdn.com/dms/image/C5603AQGD7Ux4mw63MQ/profile-displayphoto-shrink_800_800/0?e=1566432000&v=beta&t=xfP3Y-yKnZqMeRmRexlSxyT6rJfBHqMAdpojK3XrHjs',
    pedagogue: 'Vera Goulart'
  }
]

const HandleCardMapping = () => (
  cards.map((card) => (
    <Link to={`subject?subject=${card.Subject}`}>
      <CardLink key={card.Subject}>
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
            <ProgressBar max='100' value={card.ProgressPercentage} />
            <ProgressPercentage>
              {card.ProgressPercentage}%
            </ProgressPercentage>
          </ProgressWrapper>
          <AuthorWrapper>
            <AuthorImage src={card.profileImage} />
            <AuthorName>
              {card.pedagogue}
            </AuthorName>
          </AuthorWrapper>
        </SquareCard>
      </CardLink>
    </Link>
  ))
)

const Subject = () => (
  <Page>
    <Container>
      <CardWrapper>
        {HandleCardMapping()}
      </CardWrapper>
    </Container>
  </Page>
)

export default Subject
