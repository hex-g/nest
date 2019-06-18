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
import {
  saveEditorText,
  getUserNote,
  getDirectories,
} from './EditorPage.service'
import {
  Page,
  Files,
  Directories,
  Folder,
  FolderName,
  File,
  FileName,
  Wrapper,
  Title,
  Editor,
  SendButton,
  NewFile,
} from './EditorPage.style'
import directoryTreeMapping from '../../utils/DirectoryTreeMapping'

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
  const [directories, setDirectories] = useState([])
  const [selectedFile, setSelectedFile] = useState('Select a File..')
  const [loading, setLoading] = useState(false)

  const handleDirectoriesMapping = async () => {
    const response = await getDirectories()
    const directoryTree =
      response && response.data && directoryTreeMapping(response.data)
    setDirectories(directoryTree)
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
          tools: {
            paragraph: {
              class: Paragraph,
              placeholder: '.',
            },
            header: {
              class: Header,
              shortcut: 'CMD+SHIFT+H',
            },
            list: {
              class: List,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+L',
            },
            checklist: {
              class: Checklist,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+K',
            },
            embed: {
              class: Embed,
              config: {
                services: {
                  youtube: true,
                  imgur: true,
                  codepen: true,
                  'twitch-video': true,
                },
              },
            },
            image: SimpleImage,
            quote: {
              class: Quote,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+O',
              config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: "Quote's author",
              },
            },
            inlineCode: {
              class: InlineCode,
            },
            code: Code,
            table: {
              class: Table,
              inlineToolbar: true,
            },
            delimiter: Delimiter,
            marker: {
              class: Marker,
              shortcut: 'CMD+SHIFT+M',
            },
            warning: {
              class: Warning,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+W',
              config: {
                titlePlaceholder: 'Title',
                messagePlaceholder: 'Message',
              },
            },
          },
          data: JSON.parse(localStorage.getItem('user-note')),
          onReady: () => {
            reStyleCodexRedactor()
            setTimeout(() => setLoading(false), 500)
          },
        }),
      )
    } else {
      setEditorConfig(
        new EditorJs({
          holder: 'editorjs',
          tools: {
            paragraph: {
              class: Paragraph,
              placeholder: '.',
            },
            header: {
              class: Header,
              shortcut: 'CMD+SHIFT+H',
            },
            list: {
              class: List,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+L',
            },
            checklist: {
              class: Checklist,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+K',
            },
            embed: {
              class: Embed,
              config: {
                services: {
                  youtube: true,
                  imgur: true,
                  codepen: true,
                  'twitch-video': true,
                },
              },
            },
            image: SimpleImage,
            quote: {
              class: Quote,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+O',
              config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: "Quote's author",
              },
            },
            inlineCode: {
              class: InlineCode,
            },
            code: Code,
            table: {
              class: Table,
              inlineToolbar: true,
            },
            delimiter: Delimiter,
            marker: {
              class: Marker,
              shortcut: 'CMD+SHIFT+M',
            },
            warning: {
              class: Warning,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+W',
              config: {
                titlePlaceholder: 'Title',
                messagePlaceholder: 'Message',
              },
            },
          },
          onReady: () => {
            reStyleCodexRedactor()
            setTimeout(() => setLoading(false), 500)
          },
        }),
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
    } catch (error) {}
  }

  return (
    <Page>
      <Directories>
        <Files>
          {directories &&
            directories.map((directory, index) => {
              switch (directory.type) {
                case 0:
                  return (
                    <Folder key={index} level={directory.level}>
                      <FolderIcon style={{ marginRight: 20 }} />
                      <FolderName>{directory.name}</FolderName>
                    </Folder>
                  )
                case 1:
                  return (
                    <File
                      key={index}
                      level={directory.level}
                      onClick={() => handleClickFile(directory.path)}
                      disabled={loading}
                    >
                      <FileIcon style={{ marginRight: 20 }} />
                      <FileName>{directory.name}</FileName>
                    </File>
                  )
                default:
                  return <></>
              }
            })}
        </Files>
        <NewFile
          onClick={() => {
            const newFile = window.prompt('Digite o nome do Arquivo:')
            setDirectories([
              ...directories,
              { name: newFile, level: 0, type: 1, path: `/${newFile}` },
            ])
            saveEditorText('', `/${newFile}`)
          }}
        >
          Nova Anotação
        </NewFile>
      </Directories>
      <Wrapper>
        <Title>
          {selectedFile.replace(/^[/]/gim, '').replace(/[/]/gim, ' - ')}
        </Title>
        <SendButton onClick={handleSendNotes}>SAVE</SendButton>
        <Editor id="editorjs" />
      </Wrapper>
    </Page>
  )
}

export default EditorPage
