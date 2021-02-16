import { testPlugin } from './test-util'
import plugin from './remove-named-exports'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should remove named export decelerations', () => {
  const result = testPlugin(plugin, `export const Block = 'abc'`)

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe(`const Block = 'abc'`)
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should export as default', () => {
  const result = testPlugin(plugin, `export { Block as default } from '.'`)

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe("export { Block as default } from '.'")
})
