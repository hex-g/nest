import React from 'react'
import { 
    Card, 
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

const Subject = () => {
    return (
        <Page>
            <Container>
                <Form>
                    <SearchBox />
                </Form>
                <CardWrapper>
                    <Card>
                        <SubjectTitle>
                            Curso Hacker 2000
                        </SubjectTitle>
                        <Label>
                            Virus:
                        </Label>
                        <BoldLabel>
                            Baidu anti Java
                        </BoldLabel>
                        <ProgressWrapper>
                            <ProgressBar  max="100" value="70">
                                69%
                            </ProgressBar>
                            <ProgressPercentage>
                                69%
                            </ProgressPercentage>
                        </ProgressWrapper>
                        <AuthorWrapper>
                            <AuthorImage/>
                            <AuthorName>
                                An elephant in the sunset
                            </AuthorName>
                        </AuthorWrapper>
                    </Card>
                    <Card>
                        <SubjectTitle>
                            Curso Hacker 2000
                        </SubjectTitle>
                        <Label>
                            Virus:
                        </Label>
                        <BoldLabel>
                            Baidu anti Java
                        </BoldLabel>
                        <ProgressWrapper>
                            <ProgressBar  max="100" value="70">
                                69%
                            </ProgressBar>
                            <ProgressPercentage>
                                69%
                            </ProgressPercentage>
                        </ProgressWrapper>
                        <AuthorWrapper>
                            <AuthorImage/>
                            <AuthorName>
                                An elephant in the sunset
                            </AuthorName>
                        </AuthorWrapper>
                    </Card>
                    <Card>
                        <SubjectTitle>
                            Curso Hacker 2000
                        </SubjectTitle>
                        <LabelWrapper>
                            <Label>
                                Aulas:
                            </Label>
                            <BoldLabel>
                                Quartas-Feiras
                            </BoldLabel>
                        </LabelWrapper>
                        <LabelWrapper>
                            <Label>
                                Último Exercício:
                            </Label>
                            <BoldLabel>
                                06/06/2006
                            </BoldLabel>
                        </LabelWrapper>
                        <LabelWrapper>
                            <Label>
                                Próxima Prova:
                            </Label>
                            <BoldLabel>
                                06/06/2006
                            </BoldLabel>
                        </LabelWrapper>
                        <LabelWrapper>
                            <Label>
                                Progresso de Atividades:
                            </Label>
                        </LabelWrapper>
                        <ProgressWrapper>
                            <ProgressBar  max="100" value="70">
                                69%
                            </ProgressBar>
                            <ProgressPercentage>
                                69%
                            </ProgressPercentage>
                        </ProgressWrapper>
                        <AuthorWrapper>
                            <AuthorImage/>
                            <AuthorName>
                                An elephant in the sunset
                            </AuthorName>
                        </AuthorWrapper>
                    </Card>
                    <Card>
                        <SubjectTitle>
                            Curso Hacker 2000
                        </SubjectTitle>
                        <Label>
                            Virus:
                        </Label>
                        <BoldLabel>
                            Baidu anti Java
                        </BoldLabel>
                        <ProgressWrapper>
                            <ProgressBar  max="100" value="70">
                                69%
                            </ProgressBar>
                            <ProgressPercentage>
                                69%
                            </ProgressPercentage>
                        </ProgressWrapper>
                        <AuthorWrapper>
                            <AuthorImage/>
                            <AuthorName>
                                An elephant in the sunset
                            </AuthorName>
                        </AuthorWrapper>
                    </Card>
                </CardWrapper>
            </Container>
        </Page>
    )
}

export default Subject