import React from 'react'
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
import Personality from 'codex.editor.personality'
import {
  Wrapper,
} from './EditorPage.style'

const editor = new EditorJs({
  holderId: 'editorjs',
  tools: {
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
  },
})

const style = {
  border: '1px solid red',
  height: 'calc(100vh - 50px)',
  overflowY: 'auto',
  width: '680px',
}

const EditorPage = () => {
  return (
    <Wrapper>
      <div
        style={style}
        id="editorjs" />
    </Wrapper>
  )
}

export default EditorPage