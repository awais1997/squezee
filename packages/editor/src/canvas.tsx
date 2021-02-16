/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react` if it exists or add... Remove this comment to see the full error message
import { useRef, useEffect } from 'react'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-loadable` if it exis... Remove this comment to see the full error message
import Loadable from 'react-loadable'

import { Loader } from './loader'

// @ts-expect-error ts-migrate(6142) FIXME: Module './providers/editor' was resolved to '/User... Remove this comment to see the full error message
import { useEditor } from './providers/editor'
// @ts-expect-error ts-migrate(6142) FIXME: Module './providers/canvas' was resolved to '/User... Remove this comment to see the full error message
import { useCanvas } from './providers/canvas'
import { useElementSize } from './use-element-size'

const CodeMode = Loadable({
  // @ts-expect-error ts-migrate(6142) FIXME: Module './modes/code' was resolved to '/Users/matt... Remove this comment to see the full error message
  loader: () => import('./modes/code'),
  loading: Loader
})

const ViewportsMode = Loadable({
  loader: () => import('./modes/viewports'),
  loading: Loader
})

const CanvasMode = Loadable({
  loader: () => import('./modes/canvas'),
  loading: Loader
})

export const CanvasWrap = (props: any) => {
  const canvasRef = useRef()
  const elementSize = useElementSize(canvasRef)
  const { setCanvasSize } = useCanvas()

  useEffect(() => {
    setCanvasSize(elementSize)
  }, [elementSize])

  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div
      ref={canvasRef}
      sx={{
        position: 'relative',
        backgroundColor: 'white',
        overflow: 'auto'
      }}
      {...props}
    />
  )
}

export const Canvas = () => {
  const { mode } = useEditor()
  switch (mode) {
    case 'code':
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <CodeMode />
    case 'viewports':
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <ViewportsMode />
    case 'canvas':
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <CanvasMode />
    default:
      return null
  }
}
