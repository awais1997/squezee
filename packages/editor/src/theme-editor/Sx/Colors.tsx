/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'

// @ts-expect-error ts-migrate(6142) FIXME: Module './ThemeColorPicker' was resolved to '/User... Remove this comment to see the full error message
import { ThemeColorPicker } from './ThemeColorPicker'

const Colors = ({
  // @ts-expect-error ts-migrate(2525) FIXME: Initializer provides no value for this binding ele... Remove this comment to see the full error message
  value: { color, bg } = {},
  theme,
  onChange
}: any) => {
  return (
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'grid',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridGap'.
        gridGap: 2,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridTemplateColumns'.
        gridTemplateColumns: 'repeat(2, 1fr)',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'my'.
        my: 3
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          display: 'flex',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
          alignItems: 'center'
        }}
      >
        <ThemeColorPicker
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'theme'.
          theme={theme}
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'value'.
          value={color || ''}
          // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
          onChange={color => {
            // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
            onChange({ color })
          }}
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'label'.
          label="Color"
        />
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
        <div sx={{ fontSize: 0, ml: 2 }}>Color</div>
      </div>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          display: 'flex',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
          alignItems: 'center'
        }}
      >
        <ThemeColorPicker
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'theme'.
          theme={theme}
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'value'.
          value={bg || ''}
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'onChange'.
          onChange={bg => {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'onChange'.
            onChange({ bg })
          }}
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'label'.
          label="Background Color"
        />
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
        <div sx={{ fontSize: 0, ml: 2 }}>Background Color</div>
      </div>
    </div>
  )
}

export default Colors
