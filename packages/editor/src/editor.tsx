/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/blocks__react-beautiful-dn... Remove this comment to see the full error message
import { DragDropContext } from '@blocks/react-beautiful-dnd'

import appTheme from './theme'
// @ts-expect-error ts-migrate(6142) FIXME: Module './canvas' was resolved to '/Users/matthewc... Remove this comment to see the full error message
import { Canvas } from './canvas'
import Layout from './layout'
// @ts-expect-error ts-migrate(6142) FIXME: Module './header' was resolved to '/Users/matthewc... Remove this comment to see the full error message
import { headerHeight } from './header'
import SidePanel from './panels/side'
import TreePanel from './panels/tree'
// @ts-expect-error ts-migrate(6142) FIXME: Module './providers' was resolved to '/Users/matth... Remove this comment to see the full error message
import Providers from './providers'
// @ts-expect-error ts-migrate(6142) FIXME: Module './providers/code' was resolved to '/Users/... Remove this comment to see the full error message
import { useCode } from './providers/code'

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
const EditorGrid = (props: any) => <div
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
  sx={{
    // @ts-expect-error ts-migrate(7031) FIXME: Binding element '(Missing)' implicitly has an 'any... Remove this comment to see the full error message
    height: `calc(100vh - ${headerHeight}px)`,
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
    width: '100%',
    // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'display'. Did you mean 'VRDispla... Remove this comment to see the full error message
    display: 'grid',
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridTemplateColumns'.
    gridTemplateColumns: '260px 1fr 400px'
  }}
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'props'.
  {...props}
/>

const Editor = () => {
  const { onDragEnd, onBeforeDragStart } = useCode()

  return (
    // @ts-expect-error ts-migrate(2749) FIXME: 'Layout' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Layout>
      <DragDropContext
        onDragEnd={onDragEnd}
        // @ts-expect-error ts-migrate(2588) FIXME: Cannot assign to 'onBeforeDragStart' because it is... Remove this comment to see the full error message
        onBeforeDragStart={onBeforeDragStart}
      >
        // @ts-expect-error ts-migrate(2749) FIXME: 'EditorGrid' refers to a value, but is being used ... Remove this comment to see the full error message
        <EditorGrid>
          // @ts-expect-error ts-migrate(2749) FIXME: 'TreePanel' refers to a value, but is being used a... Remove this comment to see the full error message
          <TreePanel />
          <Canvas />
          // @ts-expect-error ts-migrate(2749) FIXME: 'SidePanel' refers to a value, but is being used a... Remove this comment to see the full error message
          <SidePanel />
        </EditorGrid>
      </DragDropContext>
    </Layout>
  )
}

const EditorWithProviders = ({
  src,
  blocks,
  theme,
  props = {},
  scope = {},
  layout = 'div',
  onChange = () => {}
}: any) => (
  <Providers
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'initialCode'.
    initialCode={src}
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'blocks'.
    blocks={blocks}
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'theme'.
    theme={theme}
    // @ts-expect-error ts-migrate(2539) FIXME: Cannot assign to 'appTheme' because it is not a va... Remove this comment to see the full error message
    appTheme={appTheme}
    // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
    onChange={onChange}
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'scope'.
    scope={{
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'scope'.
      ...scope,
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'props'.
      props,
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'layout'.
      layout
    }}
  // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Editor' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Editor />
  </Providers>
)

export default EditorWithProviders
