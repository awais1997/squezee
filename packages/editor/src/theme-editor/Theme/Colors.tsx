/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { ColorPalette } from '@theme-ui/style-guide'

import { ColorPicker } from '../ColorPicker'

export default (props: any) => {
  const context = useThemeUI()
  const mode = context.colorMode
  const { colors = {} } = context.theme

  const onChange = (key: any) => (val: any) => {
    let next = {}
    if (
      mode &&
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'modes' does not exist on type '{}'.
      colors.modes &&
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'modes' does not exist on type '{}'.
      colors.modes[mode] &&
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'initialColorMode' does not exist on type... Remove this comment to see the full error message
      mode !== context.theme.initialColorMode
    ) {
      next = {
        colors: {
          modes: {
            [mode]: {
              [key]: val.hex
            }
          }
        }
      }
    } else {
      next = {
        colors: {
          [key]: val.hex
        }
      }
    }
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'setTheme' does not exist on type 'ThemeU... Remove this comment to see the full error message
    context.setTheme(next)
  }

  return (
    <ColorPalette
      {...props}
      mode={mode}
      render={({ swatch, color, key, ...rest }) => (
        <ColorPicker key={key} color={color} onChange={onChange(key)}>
          {swatch}
        </ColorPicker>
      )}
    />
  );
};
