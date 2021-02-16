import { testPlugin } from './test-util'
import plugin from './inject-blocks-root'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should inject root block element', () => {
  const result = testPlugin(plugin, `<div ___uuid="abc">Hello, world!</div>`)

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(`<div ___uuid="abc">Hello, world!</div>;

const BLOCKS_Root = ({
  children
}) => {
  return <BLOCKS_Layout>
        <BLOCKS_Droppable droppableId="root">
          {(provided, snapshot) => {
        const allProps = Object.assign(provided.droppableProps, {
          ref: provided.innerRef,
          style: {
            minHeight: '100%'
          }
        });
        return React.createElement('div', allProps, children, provided.placeholder);
      }}
        </BLOCKS_Droppable>
      </BLOCKS_Layout>;
}`)
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not inject root block element when program empty', () => {
  const result = testPlugin(plugin, ``)

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toBe('')
})
