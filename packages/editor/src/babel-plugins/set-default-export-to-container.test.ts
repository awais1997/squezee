import { testPlugin } from './test-util'
import plugin from './set-default-export-to-container'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should convert default export declaration to BLOCKS_Container', () => {
  const result = testPlugin(
    plugin,
    `export default () => <div>Hello, world!</div>`
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe('const BLOCKS_Container = () => <div>Hello, world!</div>')
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should ignore non default export declarations', () => {
  const result = testPlugin(
    plugin,
    `export const Test = () => <div>Hello, world!</div>`
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe('export const Test = () => <div>Hello, world!</div>')
})
