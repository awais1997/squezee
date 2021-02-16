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
import { Fragment } from 'react'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui__components` if i... Remove this comment to see the full error message
import { Label, Slider } from '@theme-ui/components'

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Combobox' was resolved to '/Users/matth... Remove this comment to see the full error message
import Combobox from '../Combobox'

// Fallback font size options if no fontSizes are present in theme
// TODO This should come from theme-ui eventually
const DEFAULT_FONT_SIZES = [12, 14, 16, 20, 24, 32, 48, 64, 72]

export const SxTypography = ({
  tag,
  // @ts-expect-error ts-migrate(2525) FIXME: Initializer provides no value for this binding ele... Remove this comment to see the full error message
  value: { fontFamily, fontSize, fontWeight, lineHeight } = {},

  theme: {
    fonts = {},
    fontSizes = DEFAULT_FONT_SIZES,
    fontWeights = {},
    lineHeights = {}
  } = {},

  onChange
}: any) => {
  const prefixName = (name: any) => tag ? `styles.${tag}.${name}` : name

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Fragment>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Combobox
        name={prefixName('fontFamily')}
        label="Font Family"
        value={fontFamily || ''}
        onChange={(fontFamily: any) => {
          onChange({ fontFamily })
        }}
        options={['inherit', ...Object.keys(fonts)]}
      />
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div
        sx={{
          // @ts-expect-error ts-migrate(2322) FIXME: Type '"grid"' is not assignable to type 'SystemSty... Remove this comment to see the full error message
          display: 'grid',
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'SystemSty... Remove this comment to see the full error message
          gridGap: 2,
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'SystemSty... Remove this comment to see the full error message
          gridTemplateColumns: 'repeat(2, 1fr)'
        }}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Combobox
          name={prefixName('fontWeight')}
          label="Font Weight"
          value={fontWeight || ''}
          onChange={(fontWeight: any) => {
            onChange({ fontWeight })
          }}
          options={['inherit', ...Object.keys(fontWeights)]}
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Combobox
          name={prefixName('lineHeight')}
          label="Line Height"
          value={lineHeight || ''}
          onChange={(lineHeight: any) => {
            onChange({ lineHeight })
          }}
          options={['inherit', ...Object.keys(lineHeights)]}
        />
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FontSizeEditor
        fontSizes={fontSizes}
        value={fontSize || ''}
        onChange={(e: any) => onChange({ fontSize: parseInt(e.target.value) })}
      />
    </Fragment>
  );
}

export default SxTypography

const FontSizeEditor = ({
  fontSizes,
  value,
  onChange
}: any) => {
  const min = 0
  const max = fontSizes.length - 1
  const step = 1
  const sliderValue = value !== '' ? value : 0

  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Label css={{ width: 'auto' }}>Font Size</Label>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Label as="span" sx={{ width: 'auto' }}>
          {value !== '' ? fontSizes[value] : 'Auto'}
        </Label>
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Slider
        value={sliderValue}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  )
}
