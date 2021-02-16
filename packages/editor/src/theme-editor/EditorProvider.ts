// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react` if it exists or add... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx, Context, useThemeUI, merge } from 'theme-ui'
import { ThemeContext as Emotion } from '@emotion/core'

const reducer = (state: any, next: any) => merge(state, next)

export const EditorProvider = ({
  children,
  theme: propsTheme,
  onChange
}: any) => {
  const outer = useThemeUI()
  const [theme, setTheme] = React.useReducer(reducer, propsTheme)
  const context = {
    ...outer,
    theme: propsTheme,
    setTheme
  }

  React.useEffect(() => {
    onChange(theme)
  }, [theme])

  return jsx(
    Context.Provider,
    {
      value: context
    },
    jsx(Emotion.Provider, {
      value: propsTheme,
      children
    })
  )
}
