import { testPlugin } from './test-util'
import plugin from './remove-tuid'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('removes uuid for div', () => {
  const result = testPlugin(plugin, `<div ___uuid="abc">Hello, world!</div>`)
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toContain('<div>Hello, world!</div>')
})
