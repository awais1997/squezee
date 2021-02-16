import { testPlugin } from './test-util'
import plugin from './remove'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should remove node when id matches', () => {
  const result = testPlugin(
    plugin,
    `<h1 ___uuid="abc" sx={{ pt: 1, pb: 2 }}>Hello, world!</h1>`,
    {
      elementId: 'abc'
    }
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe('')
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not remove node when id does not match', () => {
  const result = testPlugin(plugin, `<h1 ___uuid="abc">Hello, world!</h1>`, {
    elementId: 'def'
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe('<h1 ___uuid="abc">Hello, world!</h1>')
})
