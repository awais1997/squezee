import { testPlugin } from './test-util'
import plugin from './remove-sx-prop'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should remove sx property', () => {
  const result = testPlugin(
    plugin,
    `<div ___uuid="abc" sx={{ pt: 4, mb: 5 }}>Hello, world!</div>`,
    {
      elementId: 'abc',
      key: 'pt'
    }
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe(`<div ___uuid="abc" sx={{
  mb: 5
}}>Hello, world!</div>`)
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not remove sx property when elementId does not match', () => {
  const result = testPlugin(
    plugin,
    `<div ___uuid="abc" sx={{ pt: 4, mb: 5 }}>Hello, world!</div>`,
    {
      elementId: 'efg',
      key: 'pt'
    }
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe(`<div ___uuid="abc" sx={{
  pt: 4,
  mb: 5
}}>Hello, world!</div>`)
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not remove sx property sx property does not exist', () => {
  const result = testPlugin(
    plugin,
    `<div ___uuid="abc" sx={{ pt: 4, mb: 5 }}>Hello, world!</div>`,
    {
      elementId: 'abc',
      key: 'mt'
    }
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe(`<div ___uuid="abc" sx={{
  pt: 4,
  mb: 5
}}>Hello, world!</div>`)
})
