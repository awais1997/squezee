import { testPlugin } from './test-util'
import Plugin from './get-current-element'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should update internal Plugin state with current selected element', () => {
  const plugin = new Plugin()
  const expected = {
    id: 'abc',
    parentId: undefined,
    children: [
      {
        id: 'def',
        name: 'HeaderBasic.Nav'
      }
    ],
    name: 'HeaderBasic',
    props: {
      ___uuid: 'abc',
      sx: {}
    }
  }
  // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
  expect(plugin.state).toEqual({ element: null })

  testPlugin(
    plugin.plugin,
    `<Blocks.Root>
      <HeaderBasic ___uuid="abc">
        <HeaderBasic.Nav ___uuid="def">
          <HeaderBasic.Logo to="/" ___uuid="ghi">Hello</HeaderBasic.Logo>
        </HeaderBasic.Nav>
      </HeaderBasic>
    </Blocks.Root>`,
    { elementId: 'abc' }
  )

  // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
  expect(plugin.state).toEqual({ element: expected })
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should update Plugin state with current element and track parent id', () => {
  const plugin = new Plugin()
  const expected = {
    id: 'ghi',
    name: 'HeaderBasic.Logo',
    parentId: 'def',
    props: {
      ___uuid: 'ghi',
      sx: {},
      to: '/'
    },
    text: 'Hello'
  }
  // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
  expect(plugin.state).toEqual({ element: null })

  testPlugin(
    plugin.plugin,
    `<Blocks.Root>
      <HeaderBasic ___uuid="abc">
        <HeaderBasic.Nav ___uuid="def">
          <HeaderBasic.Logo to="/" ___uuid="ghi">Hello</HeaderBasic.Logo>
        </HeaderBasic.Nav>
      </HeaderBasic>
    </Blocks.Root>`,
    { elementId: 'ghi' }
  )

  // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
  expect(plugin.state).toEqual({ element: expected })
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not update Plugin state with current element when id does not match any id', () => {
  const plugin = new Plugin()
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(plugin.state).toEqual({ element: null })

  testPlugin(
    plugin.plugin,
    `<Blocks.Root>
      <HeaderBasic ___uuid="abc">
        <HeaderBasic.Nav ___uuid="def">
          <HeaderBasic.Logo to="/" ___uuid="ghi">Hello</HeaderBasic.Logo>
        </HeaderBasic.Nav>
      </HeaderBasic>
    </Blocks.Root>`,
    { elementId: 'jkl' }
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(plugin.state).toEqual({ element: null })
})
