/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { Field } from '@theme-ui/components'

export default (props: any) => {
  const context = useThemeUI()
  const { lineHeights = {} } = context.theme

  const onChange = (key: any) => (e: any) => {
    const n = parseFloat(e.target.value)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'type'.
    context.setTheme({
      lineHeights: {
        [key]: n,
      },
    })
  }

  return Object.keys(lineHeights).map(key => (
    <div key={key}>
      <Field
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'type'.
        type="number"
        label={key}
        name={'lineHeights.' + key}
        value={lineHeights[key]}
        onChange={onChange(key)}
        min={1}
        max={3}
        step={1 / 64}
      />
    </div>
  ));
};
