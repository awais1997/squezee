import { testPlugin } from './test-util'
import plugin from './reorder-blocks'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should reorder blocks when source and destination index', () => {
  const result = testPlugin(
    plugin,
    `<Blocks.Root>
  <div ___uuid="abc">Hello, world!</div>
  <div ___uuid="efg">Hello, world!</div>
</Blocks.Root>`,
    {
      destination: { index: 1 },
      source: { index: 0 }
    }
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe(
    '<Blocks.Root><div ___uuid="efg">Hello, world!</div><div ___uuid="abc">Hello, world!</div></Blocks.Root>'
  )
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not reorder blocks when no source or destination index', () => {
  const result = testPlugin(
    plugin,
    `<Blocks.Root>
  <div ___uuid="abc">Hello, world!</div>
  <div ___uuid="efg">Hello, world!</div>
</Blocks.Root>`,
    {
      destination: null,
      source: null
    }
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(`<Blocks.Root>
  <div ___uuid="abc">Hello, world!</div>
  <div ___uuid="efg">Hello, world!</div>
</Blocks.Root>`)
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not reorder blocks when no root Block', () => {
  const result = testPlugin(
    plugin,
    `<>
  <div ___uuid="abc">Hello, world!</div>
  <div ___uuid="efg">Hello, world!</div>
</>`,
    {
      destination: { index: 1 },
      source: { index: 0 }
    }
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(`<>
  <div ___uuid="abc">Hello, world!</div>
  <div ___uuid="efg">Hello, world!</div>
</>`)
})
