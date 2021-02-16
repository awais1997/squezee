/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui__components` if i... Remove this comment to see the full error message
import { Label, Checkbox, Slider } from '@theme-ui/components'
import {
  Children,
  cloneElement,
  useLayoutEffect,
  useRef,
  useState,
  useMemo
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react` if it exists or add... Remove this comment to see the full error message
} from 'react'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-dom` if it exists or... Remove this comment to see the full error message
import { createPortal } from 'react-dom'
import { ZoomIn, ZoomOut } from 'react-feather'
import { CacheProvider, Global } from '@emotion/core'
import createCache from '@emotion/cache'

import { IconButton } from './ui'
import { useScrollSync } from './hooks'

const MIN_ZOOM_LEVEL = 25

const Frame = ({
  children,
  setFrame,
  ...restProps
}: any) => {
  const frameRef = useRef()
  const [{ head, body }, setNodes] = useState({ head: null, body: null })

  useLayoutEffect(() => {
    const {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'contentDocument' does not exist on type ... Remove this comment to see the full error message
      contentDocument: { head, body }
    } = frameRef.current
    setFrame(frameRef.current)
    setNodes({ head, body })
  }, [])

  const emotionCache = useMemo(() => {
    if (!head || !body) return null
    return createCache({
      key: 'device-container',
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'HTMLElement... Remove this comment to see the full error message
      container: head
    })
  }, [head])

  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <iframe ref={frameRef} title="Device Preview" {...restProps}>
      {emotionCache &&
        createPortal(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CacheProvider value={emotionCache}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Global styles={{ body: { margin: 0 } }} />
            {children}
          </CacheProvider>,
          body
        )}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </iframe>
  )
}

export const Device = ({
  children,
  width,
  height,
  setFrame,
  zoomLevel
}: any) => {
  width = parseFloat(width)
  height = parseFloat(height)
  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div
      css={{
        flex: '0 0 auto',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: 16
      }}
    >
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div
        css={{
          fontSize: 14,
          textAlign: 'left',
          marginBottom: 8,
          color: '#444'
        }}
      >
        {width}px
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div
        style={{
          flex: 1,
          width: width * zoomLevel,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Frame
          setFrame={setFrame}
          css={{
            margin: 0,
            border: 0,
            transformOrigin: `top left`
          }}
          style={{
            width: width,
            height: `${(1 / zoomLevel) * 100}%`,
            transform: `scale(${zoomLevel})`
          }}
        >
          {children}
        </Frame>
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  )
}

export const PreviewArea = ({
  children
}: any) => {
  const [wrap, setWrap] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const shiftKeyDown = useRef()
  const frames = useRef([])
  // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
  const setFrame = (index: any) => (ref: any) => frames.current[index] = ref

  useScrollSync(frames)

  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        width: '100%',
        overflow: 'auto'
      }}
    >
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div
        sx={{
          // @ts-expect-error ts-migrate(2322) FIXME: Type '"grid"' is not assignable to type 'SystemSty... Remove this comment to see the full error message
          display: 'grid',
          // @ts-expect-error ts-migrate(2322) FIXME: Type '"column"' is not assignable to type 'SystemS... Remove this comment to see the full error message
          gridAutoFlow: 'column',
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'SystemSty... Remove this comment to see the full error message
          gridAutoColumns: 'minmax(min-content, max-content)',
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'SystemSty... Remove this comment to see the full error message
          gridGap: 2,
          // @ts-expect-error ts-migrate(2322) FIXME: Type '"center"' is not assignable to type 'SystemS... Remove this comment to see the full error message
          alignItems: 'center',
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'SystemSty... Remove this comment to see the full error message
          padding: 2
        }}
      >
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <input
          type="number"
          min={MIN_ZOOM_LEVEL}
          value={(zoomLevel * 100).toFixed(0)}
          onKeyDown={(event: any) => shiftKeyDown.current = event.shiftKey}
          onChange={(event: any) => {
            const nextZoomLevel = parseFloat(event.target.value) / 100
            const shiftAmount = nextZoomLevel < zoomLevel ? -0.1 : 0.1
            setZoomLevel(
              nextZoomLevel + (shiftKeyDown.current ? shiftAmount : 0)
            )
          }}
          css={{
            appearance: 'none',
            WebkitAppearance: 'none',
            width: 30,
            fontSize: 16,
            border: 'none',
            backgroundColor: 'transparent',
            '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
              WebkitAppearance: 'none',
              margin: 0
            }
          }}
        />
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <span>%</span>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <IconButton
          label="Zoom viewport out"
          icon={ZoomOut}
          onClick={() => {
            const nextZoomLevel = zoomLevel - 0.1
            if (nextZoomLevel > 0.25) {
              setZoomLevel(nextZoomLevel)
            }
          }}
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Slider
          min={MIN_ZOOM_LEVEL}
          max={200}
          value={(zoomLevel * 100).toFixed(0)}
          onChange={(event: any) => setZoomLevel(parseFloat(event.target.value) / 100)}
          style={{ width: 80 }}
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <IconButton
          label="Zoom viewport in"
          onClick={() => setZoomLevel(zoomLevel + 0.1)}
          icon={ZoomIn}
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Label m={0}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Checkbox
            checked={wrap}
            onChange={(event: any) => setWrap(event.target.checked)}
          />
          Wrap
        </Label>
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div
        css={{ display: 'flex', overflow: 'auto', backgroundColor: '#f0f0f0' }}
      >
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div
          css={{
            display: 'flex',
            flexWrap: wrap ? 'wrap' : undefined,
            alignItems: 'start',
            alignContent: 'start',
            height: '100%',
            padding: 16
          }}
        >
          {Children.map(children, (child: any, index: any) =>
            cloneElement(child, {
              setFrame: setFrame(index),
              zoomLevel
            })
          )}
        {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
        {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
        {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  );
}
