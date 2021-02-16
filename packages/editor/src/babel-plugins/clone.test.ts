import { testPlugin } from './test-util'
import plugin from './clone'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('clones the element', () => {
  const result = testPlugin(
    plugin,
    `
      <div>
        <h1 ___uuid="abc">Hello, world!</h1>
      </div>
    `,
    {
      elementId: 'abc'
    }
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toContain('<h1 ___uuid="abc">Hello, world!</h1><h1 ___uuid')
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).not.toContain(
    '<h1 ___uuid="abc">Hello, world!</h1><h1 ___uuid="abc"'
  )
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('updates child element uuids', () => {
  const result = testPlugin(
    plugin,
    `
      <div>
        <h1 ___uuid="abc">
          Hello, <em ___uuid="123">world!</em>
        </h1>
      </div>
    `,
    {
      elementId: 'abc'
    }
  )

  // Only match one child element
  const substrs = result.split('<em ___uuid="123">world!</em>')
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(substrs.length).toEqual(2)
})
