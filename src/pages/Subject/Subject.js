import React, { Fragment } from 'react'
import SubjectCard from '../../components/SubjectCard'
import { SearchWrapper, SubjectName } from './Subject.style'
import SearchBox from '../../components/SearchBox'

const classes = {
  "academicContext": [
    {
      "id": "0",
      "cherryId": "0",
      "className": "Estrutura de Dados",
      "pedagogueName": ["Célia Taniwaki"],
      "academicTermId": "2019",
      "classRoomRestrict": ["A", "B"],
      "daysOfWeek": [4],
      "tasks": [
        {
          "id": "1",
          "name": "Lista Estática - Exemplo C#",
          "description": "Projeto Java da Lista Estática - feito em aula",
          "experienceValue": 2,
          "postDate": "2019-06-19",
          "type": "download",
          "fileName": "ListaEstaticaAluno.zip",
          "check": true
        },
        {
          "id": "2",
          "name": "Exercício de Pilha",
          "description": "Enviar até essa semana",
          "experienceValue": 5,
          "postDate": "2019-05-11",
          "type": "upload",
          "fileName": null,
          "check": false
        },
        {
          "id": "3",
          "name": "Exemplo Fila",
          "description": "Material de apoio aos estudos para a prova de Fila",
          "experienceValue": 0,
          "postDate": "2019-05-18",
          "type": "file",
          "fileName": "Fila.pdf",
          "check": false
        }
      ],
      "completedPercentage": "0",
      "nextExamDate": "2019-06-26",
      "lastExercise": "Lista Estática"
    },
    {
      "id": "0",
      "cherryId": "0",
      "className": "Engenharia de Software",
      "pedagogueName": ["Gerson Santos"],
      "academicTermId": "2019",
      "classRoomRestrict": ["A", "B"],
      "daysOfWeek": [3],
      "tasks": [
        {
          "id": "1",
          "name": "Formulário UX",
          "description": "Entregar ainda essa semana!!!",
          "experienceValue": 5,
          "postDate": "2019-06-19",
          "type": "upload",
          "fileName": null,
          "check": false
        }
      ],
      "completedPercentage": "10",
      "nextExamDate": "2019-06-26",
      "lastExercise": "Formulário UX"
    },
  ]
}

export const Subject = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const subject = urlParams.get('subject')
  const classContext = Object.assign({}, ...classes.academicContext.filter(item => item.className === subject))
  const tasks = classContext.tasks

  return (
    <Fragment>
      <SearchWrapper>
        <SearchBox />
      </SearchWrapper>
      <SubjectName>{subject}</SubjectName>
      {tasks.map(task => 
        <SubjectCard
          key={task.id}
          type={task.type}
          taskName={task.name}
          description={task.description}
          fileName={task.fileName}
          postDate={task.postDate}
        />
      )}
    </Fragment>
  )
}

export default Subject