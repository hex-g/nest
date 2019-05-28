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
import Link from '@editorjs/link'
import { saveEditorTest, getUserNotes } from './EditorPage.service'
import {
  Page,
  Directories,
  Wrapper,
  Editor,
  SendButton,
} from './EditorPage.style'

const EDITOR_TOOLS = {
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
      captionPlaceholder: 'Quote\'s author',
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
  }
}

const reStyleCodexRedactor = () => {
  const codexget = setInterval(() => {
    try {
      let codex_redactor = document.querySelector('.codex-editor__redactor')
      codex_redactor.style.paddingBottom = '0px'
      clearInterval(codexget)
    }
    catch (error) {
      console.error('Failed to get Codex-redactor, retrying...')
    }

  }, 1000)
}

const EditorPage = () => {

  const [editorConfig, setEditorConfig] = useState()

  const handleSendNotes = () => {
    editorConfig.save().then((outputData) => {
      localStorage.setItem('user-note', JSON.stringify(outputData))
      saveEditorTest(JSON.stringify(outputData))
    }).catch((error) => {
      alert('Saving failed: ', error)
    });
  }

  const handleGetUserNotes = response => {

    if (!response || !response.data) return

    localStorage.setItem('user-note', response.data.content)
    setEditorConfig(new EditorJs({
      holder: 'editorjs',
      tools: EDITOR_TOOLS,
      data: JSON.parse(localStorage.getItem('user-note')),
    }))
  }

  useEffect(() => {
    getUserNotes().then(response => handleGetUserNotes(response),
      () => setEditorConfig(new EditorJs({ tools: EDITOR_TOOLS }))
    )

    reStyleCodexRedactor()

  }, [])

  return (
    <Page>
      <Directories>
        <ul>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
        </ul>
      </Directories>
      <Wrapper>
        <SendButton onClick={handleSendNotes}>
          Send Button
      </SendButton>
        <Editor
          id="editorjs" />
      </Wrapper>
    </Page>
  )
}

export default EditorPage