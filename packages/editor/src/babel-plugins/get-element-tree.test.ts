import { testPlugin } from './test-util'
import Plugin from './get-element-tree'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should generate a tree of JSX elements from an AST', () => {
  const plugin = new Plugin()
  // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
  expect(plugin.state).toEqual({ tree: null })

  const expected = {
    id: 'root',
    name: 'root',
    children: [
      {
        id: 'abc',
        name: 'HeaderBasic',
        children: [
          {
            id: 'def',
            name: 'HeaderBasic.Nav',
            children: [
              {
                id: 'ghi',
                name: 'HeaderBasic.Logo',
                children: []
              }
            ]
          }
        ]
      }
    ]
  }

  testPlugin(
    plugin.plugin,
    `<Blocks.Root>
      <HeaderBasic ___uuid="abc">
        <HeaderBasic.Nav ___uuid="def">
          <HeaderBasic.Logo to="/" ___uuid="ghi">Hello</HeaderBasic.Logo>
        </HeaderBasic.Nav>
      </HeaderBasic>
    </Blocks.Root>`
  )

  // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
  expect(plugin.state).toEqual({ tree: expected })
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not generate a tree of JSX elements from an AST without ___uuid props', () => {
  const plugin = new Plugin()
  // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
  expect(plugin.state).toEqual({ tree: null })

  const expected = {
    id: 'root',
    name: 'root',
    children: []
  }

  testPlugin(
    plugin.plugin,
    `<Blocks.Root>
      <div>
        <div>
          <a>Hello</a>
        </div>
      </div>
    </Blocks.Root>`
  )

  // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
  expect(plugin.state).toEqual({ tree: expected })
})
