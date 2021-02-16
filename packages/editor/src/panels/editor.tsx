/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'
import { Trash, CornerRightUp, Copy, List } from 'react-feather'

import { useCode } from '../providers/code'
import { useBlocks } from '../providers/blocks'
import { IconButton } from '../ui'

import PropertyControlsPanel from './property-controls'

export default () => {
  const blocks = useBlocks()
  const {
    removeCurrentElement,
    cloneCurrentElement,
    updateProp,
    updateSxProp,
    insertText,
    selectParentOfCurrentElement,
    currentElementData: elementData
  } = useCode()

  const keys = elementData.name.split('.')

  let block = blocks
  keys.forEach((key: any) => {
    if (!block) {
      return {}
    }

    block = block[key]
  })

  const { propertyControls = {} } = block || {}

  return (
    <div
      sx={{
        height: '100vh',
        overflow: 'auto'
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid',
          borderColor: 'border',
          px: 3,
          py: 1
        }}
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'h3'.
        <h3
          sx={{
            fontSize: 1,
            fontWeight: 500,
            m: 0,
            lineHeight: 1
          }}
        >
          // @ts-expect-error ts-migrate(18004) FIXME: No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {elementData.name}
        </h3>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'nav'.
        <nav
          sx={{
            lineHeight: 1,
            display: 'flex',
            aignItems: 'center'
          }}
        >
          // @ts-expect-error ts-migrate(2749) FIXME: 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
          <IconButton
            label="Copy element"
            onClick={cloneCurrentElement}
            icon={Copy}
          />
          // @ts-expect-error ts-migrate(2749) FIXME: 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
          <IconButton
            label="Remove element"
            onClick={removeCurrentElement}
            icon={Trash}
          />
          // @ts-expect-error ts-migrate(2749) FIXME: 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
          <IconButton
            label="Go to parent"
            onClick={selectParentOfCurrentElement}
            icon={elementData.parentId ? CornerRightUp : List}
          />
        </nav>
      </Flex>
      <PropertyControlsPanel
        elementData={elementData}
        propertyControls={propertyControls}
        onPropChange={updateProp}
        onStyleChange={updateSxProp}
        onTextChange={insertText}
      />
    </div>
  )
}
