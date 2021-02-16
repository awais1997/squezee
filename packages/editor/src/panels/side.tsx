/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'

// @ts-expect-error ts-migrate(6142) FIXME: Module '../providers/code' was resolved to '/Users... Remove this comment to see the full error message
import { useCode } from '../providers/code'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../providers/editor' was resolved to '/Use... Remove this comment to see the full error message
import { useEditor } from '../providers/editor'

import EditorPanel from './editor'
// @ts-expect-error ts-migrate(6142) FIXME: Module './theme' was resolved to '/Users/matthewcu... Remove this comment to see the full error message
import ThemePanel from './theme'
// @ts-expect-error ts-migrate(6142) FIXME: Module './blocks-listing' was resolved to '/Users/... Remove this comment to see the full error message
import BlocksListing from './blocks-listing'

export default () => {
  const { activeTab, activeTabIndex, updateActiveTab } = useEditor()
  const { currentElementData: elementData } = useCode()

  return (
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'section'.
    <section
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'id'.
      id="side-panel"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        borderLeft: '1px solid',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderColor'.
        borderColor: 'border',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'overflow'.
        overflow: 'auto',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'pb'.
        pb: 3
      }}
    >
      <Tabs index={activeTabIndex} onChange={index => updateActiveTab(index)}>
        <TabList
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            display: 'flex',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
            width: '100%',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'position'.
            position: 'sticky',
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            top: 0,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'zIndex'.
            zIndex: 2
          }}
        >
          <Tab sx={getTabStyles({ isActive: activeTab === 'editor' })}>
            Editor
          </Tab>
          <Tab sx={getTabStyles({ isActive: activeTab === 'components' })}>
            Components
          </Tab>
          <Tab sx={getTabStyles({ isActive: activeTab === 'theme' })}>
            Theme
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {elementData ? (
              <EditorPanel />
            ) : (
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
              <div>
                <h3
                  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
                  sx={{
                    // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                    fontSize: 1,
                    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontWeight'.
                    fontWeight: 500,
                    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'm'.
                    m: 0,
                    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'lineHeight'.
                    lineHeight: 1,
                    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
                    px: 3,
                    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
                    py: 2,
                    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderBottom'.
                    borderBottom: '1px solid',
                    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderColor'.
                    borderColor: 'border'
                  }}
                // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
                >
                  Canvas
                </h3>
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {activeTab === 'components' ? <BlocksListing /> : null}
          </TabPanel>
          <TabPanel>
            <ThemePanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
}

const baseTabStyles = {
  flex: 1,
  appearance: 'none',
  margin: 0,
  py: 2,
  fontSize: 0,
  fontWeight: 500,
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: '1px solid',
  borderBottom: '1px solid',
  borderColor: 'border',

  '&:last-of-type': {
    borderRight: 'none'
  },

  '&:focus': {
    zIndex: 99,
    outline: 'none',
    fontWeight: 500,
    textDecoration: 'underline'
  }
}

const activeTabStyles = {
  borderBottomColor: 'white',
  bg: 'white'
}

const inactiveTabStyles = {
  bg: '#fafafa'
}

const getTabStyles = ({
  isActive
}: any) => ({
  ...baseTabStyles,
  ...(isActive ? activeTabStyles : inactiveTabStyles)
})
