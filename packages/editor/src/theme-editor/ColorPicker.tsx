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
import React from 'react'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-color` if it exists ... Remove this comment to see the full error message
import { CustomPicker } from 'react-color'
import {
  Hue,
  Saturation,
  EditableInput,
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-color` if it exists ... Remove this comment to see the full error message
} from 'react-color/lib/components/common'
import { usePopoverState, Popover, PopoverDisclosure } from 'reakit/Popover'

const round = (n: any, x = 0) => Math.floor(n * Math.pow(10, x)) / Math.pow(10, x)

// @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
const Lens = (props: any) => <div
  sx={{
    width: 16,
    height: 16,
    borderRadius: 9999,
    border: '1px solid white',
    transform: 'translate(-8px, -8px)',
  }}
/>

// @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
const Handle = (props: any) => <div
  sx={{
    width: 12,
    height: 12,
    borderRadius: 9999,
    backgroundColor: 'white',
    boxShadow: '0 0 2px rgba(0,0,0,.25)',
    transform: 'translate(-6px, -2px)',
  }}
/>

/** placeholder is used because react-color does not pass
 * HTML attributes to the element
 */
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const Input = (props: any) => <EditableInput
  {...props}
  placeholder={props.name}
  style={{
    input: {
      width: '100%',
      fontSize: 12,
      fontFamily: 'Menlo, monospace',
      margin: 0,
      padding: 0,
      border: 0,
      outline: 'none',
    },
    label: {
      display: 'none',
    },
  }}
/>

const Label = ({ width = '100%', flex = 1, ...props }) => (
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  <label
    {...props}
    sx={{
      display: 'block',
      width,
      fontSize: 10,
      input: {
        ':focus': {
          color: 'primary',
          bg: 'highlight',
        },
      },
    }}
  />
)

export const Picker = CustomPicker(({ size = 256, ...props }) => {
  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div
      sx={{
        // @ts-expect-error ts-migrate(2322) FIXME: Type '"grid"' is not assignable to type 'SystemSty... Remove this comment to see the full error message
        display: 'grid',
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'SystemSty... Remove this comment to see the full error message
        p: 2,
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'SystemSty... Remove this comment to see the full error message
        gridGap: 2,
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'SystemSty... Remove this comment to see the full error message
        width: size,
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'SystemSty... Remove this comment to see the full error message
        borderRadius: 4,
        // @ts-expect-error ts-migrate(2322) FIXME: Type '"white"' is not assignable to type 'SystemSt... Remove this comment to see the full error message
        bg: 'white',
        // @ts-expect-error ts-migrate(2322) FIXME: Type '"0 2px 8px 1px rgba(0,0,0,.125)"' is not ass... Remove this comment to see the full error message
        boxShadow: '0 2px 8px 1px rgba(0,0,0,.125)',
      }}>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div
        sx={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingBottom: '75%',
        }}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Saturation {...props} pointer={Lens} />
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div
        sx={{
          position: 'relative',
          width: '100%',
          height: 8,
        }}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Hue {...props} pointer={Handle} />
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div
        sx={{
          display: 'flex',
        }}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Label>
          Hex
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Input
            {...props}
            value={props.hex}
            name="hex"
            label="hex"
            onChange={(val: any) => {
              props.onChange(val)
            }}
          />
        </Label>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Label>
          Hue
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Input
            {...props}
            value={round(props.hsl.h)}
            name="hue"
            label="h"
            onChange={(val: any) => {
              props.onChange({ ...props.hsl, ...val })
            }}
          />
        </Label>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Label>
          Saturation
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Input
            {...props}
            value={round(props.hsl.s * 100)}
            name="saturation"
            label="s"
            onChange={({
              s
            }: any) => {
              props.onChange({ ...props.hsl, s: s / 100 })
            }}
          />
        </Label>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Label>
          Lightness
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Input
            {...props}
            value={round(props.hsl.l * 100)}
            name="lightness"
            label="l"
            onChange={({
              l
            }: any) => {
              props.onChange({ ...props.hsl, l: l / 100 })
            }}
          />
        </Label>
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
})

export const ColorPicker = ({
  children,
  ...props
}: any) => {
  const popover = usePopoverState()
  const hasChildren = !!children

  if (!hasChildren) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Picker {...props} />
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <React.Fragment>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <PopoverDisclosure
        {...popover}
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        children={(disclosure: any) => <div {...disclosure}>{children}</div>}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Popover
        {...popover}
        aria-label="Edit color"
        sx={{
          outline: 'none',
        }}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Picker {...props} />
      </Popover>
    </React.Fragment>
  );
}

export default ColorPicker
