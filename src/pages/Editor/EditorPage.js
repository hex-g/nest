import React, { useEffect, useState } from 'react'
import EditorJs from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Checklist from '@editorjs/checklist'
import Embed from '@editorjs/embed'
import SimpleImage from '@editorjs/simple-image'
import Quote from '@editorjs/quote'
import Code from '@editorjs/code'
import InlineCode from '@editorjs/inline-code'
import Table from '@editorjs/table'
import Delimiter from '@editorjs/delimiter'
import Marker from '@editorjs/marker'
import Warning from '@editorjs/warning'
import Paragraph from '@editorjs/paragraph'
import { ReactComponent as FileIcon } from '../../assets/file.svg'
import { ReactComponent as FolderIcon } from '../../assets/folder.svg'
import { ReactComponent as Share } from '../../assets/share.svg'
import { ReactComponent as Save } from '../../assets/save.svg'
import { ReactComponent as Garbage } from '../../assets/garbage.svg'
import {
  saveEditorText,
  getUserNote,
  deleteUserNote,
  getDirectories,
} from './EditorPage.service'
import {
  Page,
  Files,
  Directories,
  Folder,
  FolderName,
  File,
  FileButton,
  FileName,
  Wrapper,
  Breadcrumb,
  EditorMenu,
  Title,
  Editor,
  WaitComponent,
  SendButton,
  NewFile,
  DeleteButton
} from './EditorPage.style'

const alphabeticalOrder = (a, b) => {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

const compareNodes = (a, b) => {
  if (a.children === null && b.children === null) {
    return alphabeticalOrder(a.name, b.name)
  }
  if (b.children === null) {
    return -1
  }
  if (a.children === null) {
    return 1
  }
  return alphabeticalOrder(a.name, b.name)
}

const findOrCreateDir = (parent, name) => {
  for (let e of parent.children) {
    if (e.name === name) {
      return e
    }
  }
  const node = {
    name: name,
    children: [],
  }
  parent.children.push(node)
  parent.children.sort(compareNodes)
  return node
}

const createFile = (parent, name) => {
  if (parent.children.find(e => e.name === name)) {
    return false
  }
  parent.children.push({
    name: name,
    children: null,
  })
  parent.children.sort(compareNodes)
  return true
}

const sortTree = root => {
  if (root.children === null) {
    return root
  }
  root.children.sort(compareNodes)
  root.children.forEach(sortTree)
  return root
}

const reStyleCodexRedactor = () => {
  let countError = 0
  const codexget = setInterval(() => {
    try {
      let codex_redactor = document.querySelector('.codex-editor__redactor')
      codex_redactor.style.paddingBottom = '0px'
      clearInterval(codexget)
    } catch (error) {
      console.error('Failed to get Codex-redactor, retrying...')
      countError++
    } finally {
      if (countError === 5) {
        clearInterval(codexget)
      }
    }
  }, 1000)
}

const EditorPage = () => {
  const [editorConfig, setEditorConfig] = useState()
  const [selectedFile, setSelectedFile] = useState('')
  const [isEmpty, setIsEmpty] = useState(true)
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)

  const [root, setRoot] = useState({ children: [] })

  const handleDirectoriesMapping = async () => {
    const response = await getDirectories()
    response && response.data && setRoot(sortTree(response.data))
  }

  const handleSendNotes = () => {
    editorConfig
      .save()
      .then(outputData => {
        localStorage.setItem('user-note', JSON.stringify(outputData))
        saveEditorText(JSON.stringify(outputData), selectedFile)
      })
      .catch(error => {
        alert('Saving failed: ', error)
      })
  }

  const handleGetUserNotes = async path => {
    setLoading(true)
    const response = await getUserNote(path)
    const content = response && response.data && response.data.content
    localStorage.setItem('user-note', content)
    if (editorConfig) {
      editorConfig && editorConfig.destroy()
      setEditorConfig(null)
    }
    if (content) {
      setEditorConfig(
        new EditorJs({
          holder: 'editorjs',
          placeholder: 'Comece a digitar suas anotações =D!',
          tools: {
            paragraph: {
              class: Paragraph,
              placeholder: '.'
            },
            header: {
              class: Header,
              shortcut: 'CMD+SHIFT+H'
            },
            list: {
              class: List,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+L'
            },
            checklist: {
              class: Checklist,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+K'
            },
            embed: {
              class: Embed,
              config: {
                services: {
                  youtube: true,
                  imgur: true,
                  codepen: true,
                  'twitch-video': true
                }
              }
            },
            image: SimpleImage,
            quote: {
              class: Quote,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+O',
              config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: "Quote's author"
              }
            },
            inlineCode: {
              class: InlineCode
            },
            code: Code,
            table: {
              class: Table,
              inlineToolbar: true
            },
            delimiter: Delimiter,
            marker: {
              class: Marker,
              shortcut: 'CMD+SHIFT+M'
            },
            warning: {
              class: Warning,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+W',
              config: {
                titlePlaceholder: 'Title',
                messagePlaceholder: 'Message'
              }
            }
          },
          data: JSON.parse(localStorage.getItem('user-note')),
          onReady: () => {
            reStyleCodexRedactor()
            setTimeout(() => setLoading(false), 500)
          }
        })
      )
    } else {
      setEditorConfig(
        new EditorJs({
          holder: 'editorjs',
          placeholder: 'Comece a digitar suas anotações',
          tools: {
            paragraph: {
              class: Paragraph,
              placeholder: '.'
            },
            header: {
              class: Header,
              shortcut: 'CMD+SHIFT+H'
            },
            list: {
              class: List,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+L'
            },
            checklist: {
              class: Checklist,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+K'
            },
            embed: {
              class: Embed,
              config: {
                services: {
                  youtube: true,
                  imgur: true,
                  codepen: true,
                  'twitch-video': true
                }
              }
            },
            image: SimpleImage,
            quote: {
              class: Quote,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+O',
              config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: "Quote's author"
              }
            },
            inlineCode: {
              class: InlineCode
            },
            code: Code,
            table: {
              class: Table,
              inlineToolbar: true
            },
            delimiter: Delimiter,
            marker: {
              class: Marker,
              shortcut: 'CMD+SHIFT+M'
            },
            warning: {
              class: Warning,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+W',
              config: {
                titlePlaceholder: 'Title',
                messagePlaceholder: 'Message'
              }
            }
          },
          onReady: () => {
            reStyleCodexRedactor()
            setTimeout(() => setLoading(false), 500)
          }
        })
      )
    }
  }

  useEffect(() => {
    handleDirectoriesMapping()
  }, [])

  const handleClickFile = async path => {
    try {
      await handleGetUserNotes(path)
      setSelectedFile(path)
      setTitle(path)
      setIsEmpty(false)
    } catch (error) { }
  }

  const walkTree = (index, e, path = '', level = 0) => {
    if (e.children !== null) {
      return (
        <div key={path+index}>
          <Folder key={index} level={level}>
            <FolderIcon style={{ marginRight: 20 }} />
            <FolderName>{e.name}</FolderName>
          </Folder>
          <div>
            {e.children.map((i, index) =>
              walkTree(index, i, path + e.name + '/', level + 1)
            )}
          </div>
        </div>
      )
    }

    return (
      <File key={index} level={level}>
        <FileButton
          onClick={() => handleClickFile(path + e.name)}
          disabled={loading}
        >
          <FileIcon style={{ marginRight: 20 }} />
          <FileName>{e.name}</FileName>
        </FileButton>
        <DeleteButton
          onClick={async () => {
            await deleteUserNote(path + e.name)
            handleDirectoriesMapping()
          }}
        >
          &times;
        </DeleteButton>
      </File>
    )
  }

  return (
    <Page>
      <Directories>
        <Files>
          {root.children.map((i, index) => i && walkTree(index, i))}
        </Files>
        <NewFile
          onClick={() => {
            try {
              const path = window.prompt('Digite o nome do Arquivo:')

              const nodes = path.split('/')
              const file = nodes.pop()
              let currentNode = root
              nodes.forEach(
                name => (currentNode = findOrCreateDir(currentNode, name))
              )
              createFile(currentNode, file)

              const newRoot = {
                children: root.children
              }

              setRoot(newRoot)

              saveEditorText('', `/${path}`)
            } catch (error) { }
          }}
        >
          Nova Anotação
        </NewFile>
      </Directories>
      <Wrapper>
        <Breadcrumb>{selectedFile.replace(/\//gim, ' > ')}</Breadcrumb>
        <EditorMenu empty={isEmpty}>
          <Title>{title.replace(/.+?\//, '')}</Title>
          <div>
            <SendButton empty={isEmpty} onClick={handleSendNotes}><Save /></SendButton>
            <SendButton empty={isEmpty} onClick={handleSendNotes}><Share /></SendButton>
            <SendButton empty={isEmpty} onClick={handleSendNotes}><Garbage /></SendButton>
          </div>
        </EditorMenu>
        {isEmpty ?
          <WaitComponent id='editorjs'>Crie uma nova anotação ou selecione uma já existente para começar a editar <span role='img' aria-label='sunglass emoji'>😉</span></ WaitComponent>
          :
          <Editor id='editorjs' />}
      </Wrapper>
    </Page>
  )
}

export default EditorPage
