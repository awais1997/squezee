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
import { Fragment, useState } from 'react'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui__presets` if it e... Remove this comment to see the full error message
import * as presets from '@theme-ui/presets'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui__components` if i... Remove this comment to see the full error message
import { Label, Select, Button } from '@theme-ui/components'

import { Theme as BlocksThemeEditor, EditorProvider } from '../theme-editor'
import useCopyToClipboard from '../use-copy-to-clipboard'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../providers/theme-editor' was resolved to... Remove this comment to see the full error message
import { useThemeEditor } from '../providers/theme-editor'
import { FieldGroup } from '../field-group'

const themes = Object.keys(presets)
// @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
const options = themes.map(name => <option key={name} children={name} />)

export default () => {
  const { update, ...theme } = useThemeEditor()
  const { hasCopied, copyToClipboard } = useCopyToClipboard()

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Fragment>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ThemePresetForm theme={theme} setTheme={update} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ThemeEditor theme={theme} setTheme={update} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldGroup>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button
          variant="secondary"
          onClick={() => copyToClipboard(JSON.stringify(theme))}
        >
          {hasCopied ? 'Copied' : 'Copy'} Theme
        </Button>
      </FieldGroup>
    </Fragment>
  )
}

const ThemePresetForm = ({
  setTheme
}: any) => {
  const [themeName, setThemeName] = useState('system')

  const onPresetChange = (e: any) => {
    const presetKey = e.target.value
    setTheme((currentTheme: any) => {
      return {
        ...presets[presetKey],
        breakpoints: currentTheme.breakpoints,
        forms: currentTheme.forms
      }
    })

    setThemeName(presetKey)
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FieldGroup title="Preset">
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Label htmlFor="preset">Theme UI Preset</Label>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Select
          id="preset"
          name="preset"
          value={themeName}
          onChange={onPresetChange}
          children={options}
        />
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    </FieldGroup>
  )
}

const ThemeEditor = ({
  theme,
  setTheme
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Fragment>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <EditorProvider theme={theme} onChange={setTheme}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldGroup title="Fonts">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <BlocksThemeEditor.Fonts />
        </FieldGroup>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldGroup title="Font Sizes">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <BlocksThemeEditor.FontSizes />
        </FieldGroup>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldGroup title="Font Weights">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <BlocksThemeEditor.FontWeights />
        </FieldGroup>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldGroup title="Line Heights">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <BlocksThemeEditor.LineHeights />
        </FieldGroup>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldGroup title="Colors">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <BlocksThemeEditor.Colors />
        </FieldGroup>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FieldGroup title="Space">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <BlocksThemeEditor.Space />
        </FieldGroup>
      </EditorProvider>
    </Fragment>
  )
}
