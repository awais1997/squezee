import { testPlugin } from './test-util'
import plugin from './add-tuid-prop'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('adds uuid to JSX elements', () => {
  const result = testPlugin(plugin, '<h1>Hello, world!</h1>')

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toMatch(/___uuid/)
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('ignores uuid if it already exists', () => {
  const result = testPlugin(plugin, '<h1 ___uuid="abc">Hello, world!</h1>')

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual('<h1 ___uuid="abc">Hello, world!</h1>')
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('changes uuid when forceUuid is set when it already exists', () => {
  const result = testPlugin(plugin, '<h1 ___uuid="abc">Hello, world!</h1>', {
    forceUuid: true
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).not.toEqual('<h1 ___uuid="abc">Hello, world!</h1>')
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toMatch(/___uuid/)
})
