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
import { Grid } from '@theme-ui/components'

// @ts-expect-error ts-migrate(2395) FIXME: Individual declarations in merged declaration 'app... Remove this comment to see the full error message
import appTheme from './theme'

export const FieldGroup = ({
  title,
  children,
  ...props
}: any) => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
  <div
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      p: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      pb: 4,
      '&:not(:last-child)': {
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        borderBottom: '1px solid',
        // @ts-expect-error ts-migrate(2395) FIXME: Individual declarations in merged declaration 'app... Remove this comment to see the full error message
        borderColor: appTheme.colors.border
      }
    }}
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'props'.
    {...props}
  >
    {title && (
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'h3'.
      <h3
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          fontSize: 0,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontWeight'.
          fontWeight: 500,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'letterSpacing'.
          letterSpacing: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mt'.
          mt: 0,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mb'.
          mb: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textTransform'.
          textTransform: 'uppercase'
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        {title}
      </h3>
    )}
    <Grid>{children}</Grid>
  </div>
)
