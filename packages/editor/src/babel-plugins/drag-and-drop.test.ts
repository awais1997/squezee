import { testPlugin } from './test-util'
import plugin from './drag-and-drop'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('add drag and drop wrapper to blocks root component', () => {
  const result = testPlugin(
    plugin,
    `<Blocks.Root><h1 ___uuid="abc">Hello, world!</h1></Blocks.Root>`
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(
    `<BLOCKS_Root><BLOCKS_Draggable key='abc' draggableId='abc' index={0}>
    {(provided, snapshot) => <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}><h1 ___uuid="abc">Hello, world!</h1></div>}
  </BLOCKS_Draggable></BLOCKS_Root>`
  )
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not add drag and drop wrapper to non blocks root component', () => {
  const result = testPlugin(plugin, `<h1 ___uuid="abc">Hello, world!</h1>`)

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(`<h1 ___uuid="abc">Hello, world!</h1>`)
})
