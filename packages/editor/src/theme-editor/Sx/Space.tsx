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
import { Fragment, useState, useEffect } from 'react'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui__components` if i... Remove this comment to see the full error message
import { Label, Slider, Grid } from '@theme-ui/components'

import { SegmentedControl } from '../../segmented-control'
import { buttonIconSize } from '../../ui'

// Fallback space options if no space is present in theme
// TODO This should come from theme-ui eventually
const DEFAULT_SPACE = [0, 4, 8, 16, 32, 64]

// Custom Icons used in the segmented control

// @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
const CustomIconSvg = (props: any) => <svg
  style={{ width: buttonIconSize, height: buttonIconSize }}
  viewBox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  strokeWidth={2}
  strokeLinecap="round"
  strokeLinejoin="round"
  {...props}
/>

const SingleIcon = () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <CustomIconSvg>
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    <path d="M1.5 14V2C1.5 1.72386 1.72386 1.5 2 1.5H14C14.2761 1.5 14.5 1.72386 14.5 2V14C14.5 14.2761 14.2761 14.5 14 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14Z" />
  </CustomIconSvg>
)

const AxisIcon = () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <CustomIconSvg>
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    <path d="M1.5 4.5V8M1.5 11.5V8M4.5 1.5H8M11.5 1.5H8M14.5 4.5V8M14.5 11.5V8M11.5 14.5H8M4.5 14.5H8M8 1.5V14.5M1.5 8H14.5" />
  </CustomIconSvg>
)

const AllIcon = () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <CustomIconSvg>
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    <path d="M1.5 4.5V11.5M4.5 1.5H11.5M14.5 4.5V11.5M11.5 14.5H4.5" />
  </CustomIconSvg>
)

// The different modes spacing can be edited with
// Icon is the SVG used in segmented control
// keys are an Array of Strings which will get effected when using the slider
// i.e. ['l', 'r'] will effect `pl` and `pr` or `ml` and `mr`
// It's important to use all 4 sides (`t`/`r`/`b`/`l`) and not just `p`, `px` or `py` etc so that previous values don't conflict

const MODES = [
  {
    label: 'Single',
    icon: SingleIcon,
    keys: [{ label: 'All', keys: ['t', 'b', 'r', 'l'] }]
  },
  {
    label: 'Axis',
    icon: AxisIcon,
    keys: [
      { label: 'Horizontal', keys: ['l', 'r'] },
      { label: 'Vertical', keys: ['t', 'b'] }
    ]
  },
  {
    label: 'All',
    icon: AllIcon,
    keys: [
      { label: 'Top', keys: ['t'] },
      { label: 'Right', keys: ['r'] },
      { label: 'Bottom', keys: ['b'] },
      { label: 'Left', keys: ['l'] }
    ]
  }
]

const Mode = ({
  propertyKey,
  keys,
  theme: { space = DEFAULT_SPACE },
  value,
  onChange
}: any) => {
  const onSliderChange = (e: any, keys: any) => {
    // Take all of the keys for this slider (i.e. `l` and `r`) and set the correct value
    // i.e. { pl: 3, pr: 3 }
    const nextValue = keys.reduce((accum: any, key: any) => {
      accum[propertyKey + key] = parseInt(e.target.value)
      return accum
    }, {})

    // Make sure to spread the current value so we don't delete other slider values
    onChange((currentValue: any) => ({
      ...currentValue,
      ...nextValue
    }))
  }

  // Always set the min and max to the slider length so we get nice even steps
  const min = 0
  const max = space.length - 1
  const step = 1

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Grid>
      {keys.map(({
        keys,
        label
      }: any, index: any) => {
        // Since sliders can have multiple keys, just grab the first one
        const sliderValue = value[propertyKey + keys[0]] || 0
        return (
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <div key={index}>
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <div sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Label css={{ width: 'auto' }}>{label}</Label>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Label as="span" sx={{ width: 'auto' }}>
                {space[sliderValue]}
              </Label>
            {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
            {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
            {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Slider
              value={sliderValue}
              onChange={(e: any) => onSliderChange(e, keys)}
              min={min}
              max={max}
              step={step}
            />
          {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
          {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
          {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          </div>
        );
      })}
    </Grid>
  );
}

export const Space = ({
  property,
  theme,
  onChange,
  value: valueProp
}: any) => {
  const propertyKey = property === 'margin' ? 'm' : 'p'
  const [activeModeIndex, setActiveModeIndex] = useState(0)
  const [value, setValue] = useState({ [propertyKey]: valueProp[propertyKey] })

  useEffect(() => {
    onChange(value)
  }, [propertyKey, value])

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Fragment>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <SegmentedControl
        options={MODES}
        activeIndex={activeModeIndex}
        onChange={(option: any, index: any) => setActiveModeIndex(index)}
        sx={{
          marginRight: 'auto'
        }}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Mode
        propertyKey={propertyKey}
        value={value}
        onChange={setValue}
        theme={theme}
        keys={MODES[activeModeIndex].keys}
      />
    </Fragment>
  );
}

export default Space
