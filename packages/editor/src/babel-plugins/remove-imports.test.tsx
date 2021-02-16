import { testPlugin } from './test-util'
import plugin from './remove-imports'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should remove import decelerations', () => {
  const result = testPlugin(
    plugin,
    `import React from 'react'
export default () => (<Block.Root></Block.Root>)`
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe('export default (() => <Block.Root></Block.Root>)')
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not update source when no import declaration', () => {
  const result = testPlugin(
    plugin,
    `export default () => (<Block.Root></Block.Root>)`
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe('export default (() => <Block.Root></Block.Root>)')
})
