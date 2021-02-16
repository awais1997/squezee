/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx, Styled } from 'theme-ui'

export default ({
  name,
  message
}: any) => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
  <div
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      p: 2
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
    <span
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        fontSize: 2
      }}
    >
      // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'Failed'. Did you mean 'File'?
      Failed to compile {name}
    </span>

    <Styled.pre
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        mb: 0,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'backgroundColor'.
        backgroundColor: 'rgba(206, 17, 38, 0.05)',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
        fontSize: '8pt'
      }}
    // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'message'. Did you mean 'onmessag... Remove this comment to see the full error message
      {message}
    </Styled.pre>
  </div>
)
