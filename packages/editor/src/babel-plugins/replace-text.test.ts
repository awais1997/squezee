import { testPlugin } from './test-util'
import plugin from './replace-text'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should replace text on node', () => {
  const result = testPlugin(plugin, `<div ___uuid="abc">hello world</div>`, {
    elementId: 'abc',
    text: 'Hello, world!'
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe('<div ___uuid="abc">Hello, world!</div>')
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not replace text when id does not match nodes id', () => {
  const result = testPlugin(plugin, `<div ___uuid="abc">hello world</div>`, {
    elementId: 'efg',
    text: 'Hello, world!'
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe('<div ___uuid="abc">hello world</div>')
})
