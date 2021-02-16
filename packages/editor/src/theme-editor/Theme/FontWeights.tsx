/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

import Combobox from '../Combobox'

const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900]

export default (props: any) => {
  const context = useThemeUI()
  const { fontWeights = {} } = context.theme

  const onChange = (key: any) => (val: any) => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'type'.
    context.setTheme({
      fontWeights: {
        [key]: val
      }
    })
  }

  return Object.keys(fontWeights).map(key => (
    <div key={key}>
      <Combobox
        label={key}
        name={'fontWeights.' + key}
        value={fontWeights[key]}
        onChange={onChange(key)}
        options={weights}
      />
    </div>
  ));
};