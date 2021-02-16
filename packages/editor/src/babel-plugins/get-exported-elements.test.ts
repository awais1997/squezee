import { testPlugin } from './test-util'
import Plugin from './get-exported-elements'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should update internal Plugin state with ExportNamedDeclaration definitions', () => {
  const plugin = new Plugin()
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(plugin.state).toEqual({ elements: {} })

  testPlugin(plugin.plugin, `export const HeaderBasic = () => <div></div>`)

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(plugin.state.elements).toMatchSnapshot()
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not updated internal Plugin state when no named exports in tree', () => {
  const plugin = new Plugin()
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(plugin.state).toEqual({ elements: {} })

  testPlugin(
    plugin.plugin,
    `const HeaderBasic = () => <div></div>
export default HeaderBasic
    `
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(plugin.state).toEqual({ elements: {} })
})
