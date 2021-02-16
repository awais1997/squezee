/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { Styled, jsx } from 'theme-ui'
import { Global } from '@emotion/core'

// @ts-expect-error ts-migrate(6142) FIXME: Module './header' was resolved to '/Users/matthewc... Remove this comment to see the full error message
import Header, { headerHeight } from './header'

export default ({
  children
}: any) => {
  return (
    // @ts-expect-error ts-migrate(2503) FIXME: Cannot find namespace 'Styled'.
    <Styled.root>
      // @ts-expect-error ts-migrate(2749) FIXME: 'Global' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Global
        // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'styles'. Did you mean 'Styled'?
        styles={{
          '*': {
            boxSizing: 'border-box'
          },
          'html, body': {
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            margin: 0,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'padding'.
            padding: 0
          }
        }}
      />
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div
        // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'css'. Did you mean 'CSS'?
        css={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          display: 'grid',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridTemplateRows'.
          gridTemplateRows: `${headerHeight}px 1fr`,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'minHeight'.
          minHeight: '100vh'
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '>' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        <Header />
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'main'.
        <main>{children}</main>
      </div>
    </Styled.root>
  )
}
