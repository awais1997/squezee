import { testPlugin } from './test-util'
import plugin from './apply-sx-prop'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('applies prop to the sx object', () => {
  const result = testPlugin(plugin, '<h1 ___uuid="abc">Hello, world!</h1>', {
    elementId: 'abc',
    sx: {
      backgroundColor: 'tomato'
    }
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(
    `<h1 ___uuid="abc" sx={{
  backgroundColor: "tomato"
}}>Hello, world!</h1>`
  )
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('applies a falsey prop to the sx object', () => {
  const result = testPlugin(plugin, '<h1 ___uuid="abc">Hello, world!</h1>', {
    elementId: 'abc',
    sx: {
      fontSize: 0
    }
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(
    `<h1 ___uuid="abc" sx={{
  fontSize: 0
}}>Hello, world!</h1>`
  )
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should remove sx value when undefined', () => {
  const result = testPlugin(plugin, '<h1 ___uuid="abc">Hello, world!</h1>', {
    elementId: 'abc',
    sx: {
      pt: 3,
      pr: undefined,
      fontSize: 0
    }
  })

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(
    `<h1 ___uuid="abc" sx={{
  pt: 3,
  fontSize: 0
}}>Hello, world!</h1>`
  )
})
