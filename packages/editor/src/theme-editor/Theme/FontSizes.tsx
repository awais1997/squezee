/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { Field } from '@theme-ui/components'

export default (props: any) => {
  const context = useThemeUI()
  const { fontSizes = [] } = context.theme

  const onChange = (key: any) => (e: any) => {
    const n = parseFloat(e.target.value)
    if (Array.isArray(fontSizes)) {
      const i = parseInt(key)
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'setTheme' does not exist on type 'ThemeU... Remove this comment to see the full error message
      context.setTheme({
        fontSizes: [...fontSizes.slice(0, i), n, ...fontSizes.slice(i + 1)],
      })
    } else {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'setTheme' does not exist on type 'ThemeU... Remove this comment to see the full error message
      context.setTheme({
        fontSizes: {
          [key]: n,
        },
      })
    }
  }

  return Object.keys(fontSizes).map(key => (
    <div key={key}>
      // @ts-expect-error ts-migrate(2749) FIXME: 'Field' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Field
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'type'.
        type="number"
        label={key}
        name={'fontSizes.' + key}
        value={fontSizes[key]}
        onChange={onChange(key)}
      />
    </div>
  ));
};
