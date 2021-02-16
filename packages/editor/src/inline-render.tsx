/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react` if it exists or add... Remove this comment to see the full error message
import React, { useMemo } from 'react'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx, ThemeProvider, Styled } from 'theme-ui'

import styles from './use-canvas-styles'

export default ({
  fullHeight,
  code,
  scope,
  theme,
  ...props
}: any) => {
  const element = useMemo(() => {
    if (!code) {
      return null
    }

    /* eslint-disable */
    const fn = new Function(
      'React',
      ...Object.keys(scope),
      `${code};
      return React.createElement(BLOCKS_Container)`
    )
    /* eslint-enable */

    return fn(React, ...Object.values(scope))
  }, [code])
  // TODO: Figure out why adding scope here breaks.
  //       I think it has to do with the inline render
  //       definition of scope.

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ThemeProvider theme={theme}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Styled.root
        {...props}
        sx={{
          height: fullHeight ? '100%' : undefined,
          color: 'text',
          bg: 'background',
          ...styles(),
          '& > div': {
            height: '100%'
          }
        }}
      >
        {element}
      </Styled.root>
    </ThemeProvider>
  )
}
