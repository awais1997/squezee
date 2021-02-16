/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'

import { IconButton } from './ui'

export const SegmentedControl = ({
  options,
  activeIndex,
  onChange,
  ...rest
}: any) => {
  return (
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'grid',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridAutoFlow'.
        gridAutoFlow: 'column',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridGap'.
        gridGap: '1px',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'bg'.
        bg: 'border',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'border'.
        border: '1px solid',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderColor'.
        borderColor: 'border',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderRadius'.
        borderRadius: 4,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'overflow'.
        overflow: 'hidden'
      }}
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'rest'.
      {...rest}
    >
      // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'options'. Did you mean 'Option'?
      {options.map((option: any, index: any) => (
        // @ts-expect-error ts-migrate(2749) FIXME: 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
        <IconButton
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'key'.
          key={index}
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'isActive'.
          isActive={activeIndex === index}
          // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'label'. Did you mean 'babel'?
          label={option.label}
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'icon'.
          icon={option.icon}
          // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'onClick'. Did you mean 'onclick'... Remove this comment to see the full error message
          onClick={() => onChange(option, index)}
        />
      ))}
    </div>
  );
}
