// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react` if it exists or add... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'

import BlockError from './block-error'

import { toTransformedBlockJSX } from './transforms'

export default ({
  code,
  scope: providedScope,
  name,
  ...props
}: any) => {
  try {
    const transformed = toTransformedBlockJSX(code)
    const scope = { jsx, ...providedScope }

    /* eslint-disable */
    const fn = new Function(
      'React',
      ...Object.keys(scope),
      `${transformed};
    return React.createElement(BLOCKS_Container)`
    )
    /* eslint-enable */

    const element = fn(React, ...Object.values(scope))

    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div {...props}>{element}</div>
  } catch (e) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <BlockError name={name} message={e.message} />
  }
}
