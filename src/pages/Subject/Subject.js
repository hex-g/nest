import React from 'react'
import SubjectCard from '../../components/SubjectCard'
import { Page, SearchWrapper, SubjectName } from './Subject.style'
import SearchBox from '../../components/SearchBox'

const classes = {
  academicContext: [
    {
      id: '0',
      cherryId: '0',
      className: 'Estrutura de Dados',
      pedagogueName: ['Célia Taniwaki'],
      academicTermId: '2019',
      classRoomRestrict: ['A', 'B'],
      daysOfWeek: [4],
      tasks: [
        {
          id: '1',
          name: 'ED - Exercício Vetor',
          description: 'Exercício sobre uso de vetor para praticar',
          experienceValue: 7,
          postDate: '2019-02-13',
          type: 'file',
          fileName: 'ED-Exercicio.pdf',
          check: true
        },
        {
          id: '2',
          name: 'Exercício sobre Matriz - Java',
          description: 'Projto Java feito em aula com exemplo de uso de matriz',
          experienceValue: 0,
          postDate: '2019-02-20',
          type: 'download',
          fileName: 'ExemploMatriz.zip',
          check: true
        },
        {
          id: '3',
          name: 'Exercício sobre Matriz - C#',
          description: 'Projto em C# feito em aula com exemplo de uso de matriz (equivalente ao exemplo feito em Java)',
          experienceValue: 0,
          postDate: '2019-02-20',
          type: 'download',
          fileName: 'ExemploMatriz-C#.zip',
          check: true
        },
        {
          id: '4',
          name: 'Lista Estática - Exemplo C#',
          description: 'Projeto Java da Lista Estática - feito em aula',
          experienceValue: 2,
          postDate: '2019-06-19',
          type: 'download',
          fileName: 'ListaEstaticaAluno.zip',
          check: true
        },
        {
          id: '5',
          name: 'Exercício de Pilha',
          description: 'Enviar até essa semana',
          experienceValue: 5,
          postDate: '2019-05-11',
          type: 'upload',
          fileName: null,
          check: false
        },
        {
          id: '6',
          name: 'Exemplo Fila',
          description: 'Material de apoio aos estudos para a prova de Fila',
          experienceValue: 0,
          postDate: '2019-05-18',
          type: 'file',
          fileName: 'Fila.pdf',
          check: false
        }
      ],
      completedPercentage: '0',
      nextExamDate: '2019-06-26',
      lastExercise: 'Lista Estática'
    },
    {
      id: '1',
      cherryId: '1',
      className: 'Engenharia de Software',
      pedagogueName: ['Gerson Santos'],
      academicTermId: '2019',
      classRoomRestrict: ['A', 'B'],
      daysOfWeek: [3],
      tasks: [
        {
          id: '1',
          name: 'Processo de Software + Ferramenta CASE',
          description: 'Cases - Processos e Ferramentas CASE',
          experienceValue: 5,
          postDate: '2019-02-26',
          type: 'file',
          fileName: 'Aula 2 - Conteúdo.pdf',
          check: true
        },
        {
          id: '2',
          name: 'Fatores Humanos',
          description: 'Atividade - Metas de Interface',
          experienceValue: 5,
          postDate: '2019-02-27',
          type: 'upload',
          fileName: null,
          check: true
        },
        {
          id: '3',
          name: 'Arquitetura',
          description: 'Material de apoio para Arquitetura vista em aula',
          experienceValue: 5,
          postDate: '2019-03-05',
          type: 'download',
          fileName: null,
          check: true
        },
        {
          id: '4',
          name: 'Formulário UX',
          description: 'Entregar até às 23:59 da próxima quarta-feira depois do dia desta publicação!',
          experienceValue: 5,
          postDate: '2019-06-19',
          type: 'upload',
          fileName: null,
          check: true
        }
      ],
      completedPercentage: '10',
      nextExamDate: '2019-06-26',
      lastExercise: 'Formulário UX'
    },
    {
      id: '2',
      cherryId: '2',
      className: 'Técnicas de Programação Web',
      pedagogueName: ['Rodrigo Pinto'],
      academicTermId: '2019',
      classRoomRestrict: ['A', 'B'],
      daysOfWeek: [2, 3],
      tasks: [
        {
          id: '1',
          name: 'Semana 1 - Introdução ao Desenvolvimento Web',
          description: 'Vamos ler o texto acima a partir do subtitulo O Fenômeno Javascript. Em seguida, responder as perguntas desse questionário.',
          experienceValue: 5,
          postDate: '2019-02-19',
          type: 'file',
          fileName: 'Apresentação.pdf',
          check: true
        },
        {
          id: '1',
          name: 'Semana 2 - Primeira Interface Web',
          description: '',
          experienceValue: 5,
          postDate: '2019-02-21',
          type: 'download',
          fileName: 'Projeto.zip',
          check: true
        },
        {
          id: '1',
          name: 'Testes unitários',
          description: 'Vamos aprender como realizar TDD em nossa aplicação Java',
          experienceValue: 5,
          postDate: '2019-06-19',
          type: 'file',
          fileName: 'TDD com Java.pdf',
          check: false
        }
      ],
      completedPercentage: '10',
      nextExamDate: '2019-06-26',
      lastExercise: 'Testes unitários'
    },
    {
      id: '3',
      cherryId: '3',
      className: 'Pesquisa e Inovação',
      pedagogueName: ['Fernando Brandão'],
      academicTermId: '2019',
      classRoomRestrict: ['A', 'B'],
      daysOfWeek: [5],
      tasks: [
        {
          id: '1',
          name: 'Última sprint',
          description: 'Revisão de entrega',
          experienceValue: 5,
          postDate: '2019-06-19',
          type: 'file',
          fileName: 'Sprint.doc',
          check: false
        }
      ],
      completedPercentage: '10',
      nextExamDate: '2019-06-26',
      lastExercise: 'Última sprint'
    },
    {
      id: '4',
      cherryId: '4',
      className: 'Socioemocional',
      pedagogueName: ['Vera Goulart'],
      academicTermId: '2019',
      classRoomRestrict: ['A', 'B'],
      daysOfWeek: [1, 3, 4],
      tasks: [
        {
          id: '1',
          name: 'Apresentação',
          description: 'Apresentação de evolução pessoal ao longo dos últimos 6 meses',
          experienceValue: 5,
          postDate: '2019-06-19',
          type: 'upload',
          fileName: 'upload',
          check: true
        }
      ],
      completedPercentage: '10',
      nextExamDate: '2019-06-26',
      lastExercise: 'Apresentação'
    }
  ]
}

export const Subject = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const subject = urlParams.get('subject')
  const classContext = Object.assign({}, ...classes.academicContext.filter(item => (
    item.className === subject
  )))
  const { tasks } = classContext

  return (
    <Page>
      <SearchWrapper>
        <SearchBox />
      </SearchWrapper>
      <SubjectName>{subject}</SubjectName>
      {tasks.map(task => (
        <SubjectCard
          key={task.id}
          type={task.type}
          taskName={task.name}
          description={task.description}
          fileName={task.fileName}
          postDate={task.postDate}
          checked={task.check}
        />
      ))}
    </Page>
  )
}

export default Subject
