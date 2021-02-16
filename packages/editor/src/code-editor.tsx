/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react` if it exists or add... Remove this comment to see the full error message
import { useRef } from 'react'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'
import Monaco from '@monaco-editor/react'
import { Clipboard, Check } from 'react-feather'

import useCopyToClipboard from './use-copy-to-clipboard'
import { Loader } from './loader'
import { IconButton } from './ui'

const Copy = ({
  toCopy
}: any) => {
  const { hasCopied, copyToClipboard } = useCopyToClipboard()

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <IconButton
      label={hasCopied ? 'Copied' : 'Copy'}
      onClick={() => copyToClipboard(toCopy)}
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
        svg: {
          fill: hasCopied ? 'green' : null
        }
      }}
      icon={hasCopied ? Check : Clipboard}
    />
  )
}

export const CodeEditor = ({
  code,
  onChange
}: any) => {
  const editorRef = useRef(null)

  const handleEditorDidMount = (_: any, editor: any) => {
    editorRef.current = editor

    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
    editorRef.current.onDidChangeModelContent((ev: any) => {
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      onChange(editorRef.current.getValue())
    })
  }

  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div sx={{ height: '100%' }}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Copy toCopy={code} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Monaco
        height="100%"
        value={code}
        language="javascript"
        editorDidMount={handleEditorDidMount}
        theme="light"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        loading={<Loader />}
        options={{
          minimap: {
            enabled: false
          },
          scrollbar: {
            vertical: 'hidden'
          }
        }}
      />
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  )
}
