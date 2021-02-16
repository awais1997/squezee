/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx, useThemeUI } from 'theme-ui'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react` if it exists or add... Remove this comment to see the full error message
import { Fragment } from 'react'

import Sx from './Sx'

export default ({ tag = 'root' }) => {
  const context = useThemeUI()
  const { styles = {} } = context.theme

  // @ts-expect-error ts-migrate(7053) FIXME: No index signature with a parameter of type 'strin... Remove this comment to see the full error message
  const style = styles[tag] || {}

  const setStyle = (next: any) => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'setTheme' does not exist on type 'ThemeU... Remove this comment to see the full error message
    context.setTheme({
      styles: {
        [tag]: {
          ...style,
          ...next
        }
      }
    })
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Fragment>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <b>theme.styles.{tag}</b>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Sx.Typography value={style} onChange={setStyle} theme={context.theme} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Sx.Margin value={style} onChange={setStyle} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Sx.Colors value={style} onChange={setStyle} />
    </Fragment>
  )
}
