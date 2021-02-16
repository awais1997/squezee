import { testPlugin } from './test-util'
import plugin from './insert-after'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should insert template ast after node', () => {
  const result = testPlugin(plugin, `<div ___uuid="abc">Hello, world!</div>`, {
    elementId: 'abc'
  })
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toContain(
    '<div ___uuid="abc">Hello, world!</div>;\n<h1>hello!</h1>'
  )
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not insert template ast after node when id does not exist', () => {
  const result = testPlugin(plugin, `<div ___uuid="abc">Hello, world!</div>`, {
    elementId: 'efg'
  })
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toContain('<div ___uuid="abc">Hello, world!</div>')
})
