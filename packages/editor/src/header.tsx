/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react` if it exists or add... Remove this comment to see the full error message
import { useState } from 'react'
import { Code, Layers, Monitor, Grid } from 'react-feather'

// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module '../package.json'. Consider usi... Remove this comment to see the full error message
import pkg from '../package.json'

// @ts-expect-error ts-migrate(6142) FIXME: Module './providers/editor' was resolved to '/User... Remove this comment to see the full error message
import { useEditor } from './providers/editor'
import { SegmentedControl } from './segmented-control'
import { IconButton } from './ui'

const { version } = pkg

export const headerHeight = 60

const MODES = [
  {
    key: 'canvas',
    label: 'Canvas Mode',
    icon: Layers
  },
  {
    key: 'viewports',
    label: 'Viewports Mode',
    icon: Monitor
  },
  {
    key: 'code',
    label: 'Code Mode',
    icon: Code
  }
]

const ToggleXRay = () => {
  const editorState = useEditor()
  const isActive = Boolean(editorState.xray)
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <IconButton
      label="XRay mode"
      icon={Grid}
      isActive={isActive}
      onClick={() => editorState.update({ ...editorState, xray: !isActive })}
      disabled={editorState.mode === MODES[2].key}
    />
  )
}

const Modes = () => {
  const editorState = useEditor()
  const [activeModeIndex, setActiveModeIndex] = useState(0)

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SegmentedControl
      options={MODES}
      activeIndex={activeModeIndex}
      onChange={(option: any, index: any) => {
        editorState.update({ ...editorState, mode: option.key })
        setActiveModeIndex(index)
      }}
    />
  );
}

const Header = () => (
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  <header
    sx={{
      height: headerHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: 3,
      borderBottom: '1px solid',
      borderColor: 'border'
    }}
  >
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Logo />
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    <div
      sx={{
        // @ts-expect-error ts-migrate(2322) FIXME: Type '"grid"' is not assignable to type 'SystemSty... Remove this comment to see the full error message
        display: 'grid',
        // @ts-expect-error ts-migrate(2322) FIXME: Type '"column"' is not assignable to type 'SystemS... Remove this comment to see the full error message
        gridAutoFlow: 'column',
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'SystemSty... Remove this comment to see the full error message
        gridGap: 3
      }}
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ToggleXRay />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Modes />
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
  {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
  {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
  {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
  </header>
)

export default Header

const Logo = () => (
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  <a
    href="/"
    sx={{
      // @ts-expect-error ts-migrate(2322) FIXME: Type '"grid"' is not assignable to type 'SystemSty... Remove this comment to see the full error message
      display: 'grid',
      // @ts-expect-error ts-migrate(2322) FIXME: Type '"column"' is not assignable to type 'SystemS... Remove this comment to see the full error message
      gridAutoFlow: 'column',
      // @ts-expect-error ts-migrate(2322) FIXME: Type '"center"' is not assignable to type 'SystemS... Remove this comment to see the full error message
      alignItems: 'center',
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'SystemSty... Remove this comment to see the full error message
      gridGap: 2,
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'SystemSty... Remove this comment to see the full error message
      textDecoration: 'none',
      // @ts-expect-error ts-migrate(2322) FIXME: Type '"inherit"' is not assignable to type 'System... Remove this comment to see the full error message
      color: 'inherit',
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'SystemSty... Remove this comment to see the full error message
      ml: '-4px'
    }}
  >
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    <img
      src="https://user-images.githubusercontent.com/1424573/61592179-e0fda080-ab8c-11e9-9109-166cc7c86b43.png"
      alt="blocks logo"
      width="38"
    />
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    <div
      sx={{
        // @ts-expect-error ts-migrate(2322) FIXME: Type '"grid"' is not assignable to type 'SystemSty... Remove this comment to see the full error message
        display: 'grid',
        // @ts-expect-error ts-migrate(2322) FIXME: Type '"column"' is not assignable to type 'SystemS... Remove this comment to see the full error message
        gridAutoFlow: 'column',
        // @ts-expect-error ts-migrate(2322) FIXME: Type '"baseline"' is not assignable to type 'Syste... Remove this comment to see the full error message
        alignItems: 'baseline',
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'SystemSty... Remove this comment to see the full error message
        gridGap: 2
      }}
    >
      Blocks
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <span
        sx={{
          fontSize: 0,
          mt: '2px',
          ml: 2
        }}
      >
        v{version}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </span>
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
  {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
  {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
  {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
  </a>
)
