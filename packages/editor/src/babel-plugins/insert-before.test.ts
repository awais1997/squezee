import { testPlugin } from './test-util'
import plugin from './insert-before'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should insert template ast before node', () => {
  const result = testPlugin(plugin, `<div ___uuid="abc">Hello, world!</div>`, {
    elementId: 'abc'
  })
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toContain(
    '<h1>hello!</h1>\n<div ___uuid="abc">Hello, world!</div>'
  )
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not insert template ast before node when id is not in scope', () => {
  const result = testPlugin(plugin, `<div ___uuid="abc">Hello, world!</div>`, {
    elementId: 'efg'
  })
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toContain('<div ___uuid="abc">Hello, world!</div>')
})
