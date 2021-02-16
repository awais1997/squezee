import { testPlugin } from './test-util'
import Plugin from './get-blocks-usage'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should update internal Plugin state with JSX usage', () => {
  const plugin = new Plugin()
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(plugin.state).toEqual({ usage: null })

  testPlugin(
    plugin.plugin,
    `HeaderLogo.usage = \`<HeaderLogo></HeaderLogo>\`
export default HeaderLogo`
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(plugin.state).toEqual({ usage: '<HeaderLogo></HeaderLogo>' })
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not update internal Plugin state when no Blocks with usage', () => {
  const plugin = new Plugin()
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(plugin.state).toEqual({ usage: null })

  testPlugin(plugin.plugin, `export default HeaderLogo`)

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(plugin.state).toEqual({ usage: null })
})
