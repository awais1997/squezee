/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx, useThemeUI } from 'theme-ui'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react` if it exists or add... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/tinycolor2` if it exists o... Remove this comment to see the full error message
import tinycolor from 'tinycolor2'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-color` if it exists ... Remove this comment to see the full error message
import { GithubPicker } from 'react-color'
import { usePopoverState, Popover, PopoverDisclosure } from 'reakit/Popover'

export const ThemeColorPicker = ({
  children,
  theme,
  label,
  ...props
}: any) => {
  const popover = usePopoverState()
  const context = useThemeUI()
  // todo: look into supporting v0.2 functionality
  // const { colors } = theme || context.theme || {}
  const _theme = theme || context.theme || {}
  const colors = _theme.rawColors || _theme.colors || {}
  const value = colors[props.value] || props.value
  const options = [
    'transparent',
    ...Object.keys(colors)
      .map(key => colors[key])
      .filter(color => typeof color === 'string')
      .filter(color => /^#/.test(color))
  ]
  const onChange = (color: any) => {
    const [key] =
      Object.entries(colors).find(
        ([k, v]) => tinycolor(v).toHexString() === color.hex
      ) || []

    props.onChange(key || color.hex || color)
  }
  const onChangeComplete = () => {
    popover.hide()
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <React.Fragment>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <PopoverDisclosure
        {...popover}
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        children={(disclosure: any) => <div
          {...disclosure}
          style={{
            backgroundColor: value
          }}
          sx={{
            width: 32,
            height: 32,
            border: '1px solid',
            borderColor: 'lightgray'
          }}
          aria-label={label}
        >
          {children}
        {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
        {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
        {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Popover
        {...popover}
        aria-label="Choose Color"
        style={{
          zIndex: popover.visible ? 1 : null
        }}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <GithubPicker
          colors={options}
          triangle="hide"
          {...props}
          color={value}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
        />
      </Popover>
    </React.Fragment>
  );
}

export default ThemeColorPicker
