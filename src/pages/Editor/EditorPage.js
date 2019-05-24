import React, { useEffect } from 'react'
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
  Wrapper,
  Editor,
  SendButton,
} from './EditorPage.style'

const EDITOR_CONFIG = {
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

let editor

const handleSendNotes = () => {
  editor.save().then((outputData) => {
    saveEditorTest(JSON.stringify(outputData))
  }).catch((error) => {
    console.log('Saving failed: ', error)
  });

}

const EditorPage = () => {

  const [note, setNote] = React.useState(null)

  const getNotes = async () => {
    const response = await getUserNotes()
    response && response.data.content && localStorage.setItem('user-note', response.data.content)
  }

  getNotes()

  useEffect(() => {

    let note = JSON.parse(localStorage.getItem('user-note'))
    editor = new EditorJs({
      autofocus: true,
      tools: EDITOR_CONFIG,
      data: note,
    })

    setTimeout(() => {
      let codex_redactor = document.querySelector('.codex-editor__redactor')
      codex_redactor.style.paddingBottom = '0px';;

    }, 100)

    /*setInterval(() => {
      editor.save().then((outputData) => {
        localStorage.setItem('user-note', JSON.stringify(outputData))
      }).catch((error) => {
        console.log('Saving failed: ', error)
      });
    }, 15000)*/

  }, [])

  return (
    <Wrapper>
      <SendButton onClick={handleSendNotes}>
        Send Button
      </SendButton>
      <Editor
        id="editorjs" />
    </Wrapper>
  )
}

export default EditorPage