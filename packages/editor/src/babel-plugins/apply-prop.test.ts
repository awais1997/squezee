import { testPlugin } from './test-util'
import plugin from './apply-prop'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('applies a string prop to the element', () => {
  const result = testPlugin(plugin, '<h1 ___uuid="abc">Hello, world!</h1>', {
    elementId: 'abc',
    key: 'foo',
    value: 'bar'
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(`<h1 ___uuid="abc" foo="bar">Hello, world!</h1>`)
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('applies a number prop to the element', () => {
  const result = testPlugin(plugin, '<h1 ___uuid="abc">Hello, world!</h1>', {
    elementId: 'abc',
    key: 'foo',
    value: 123
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(`<h1 ___uuid="abc" foo={123}>Hello, world!</h1>`)
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('applies a boolean prop to the element', () => {
  const result = testPlugin(plugin, '<h1 ___uuid="abc">Hello, world!</h1>', {
    elementId: 'abc',
    key: 'foo',
    value: true
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(`<h1 ___uuid="abc" foo={true}>Hello, world!</h1>`)
})
