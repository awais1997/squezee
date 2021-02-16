// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/babel__helper-plugin-utils... Remove this comment to see the full error message
import { declare } from '@babel/helper-plugin-utils'

import { getElementName, getUuid } from '../util'

class BabelPluginGetBlocks {
  plugin: any;
  state: any;
  constructor() {
    this.state = { blocks: [] }

    this.plugin = declare((api: any) => {
      api.assertVersion(7)
      const { types: t } = api

      return {
        visitor: {
          JSXElement: (path: any) => {
            const openingElement = path.node.openingElement

            if (t.isJSXMemberExpression(openingElement.name)) {
              const objectName =
                openingElement.name.object && openingElement.name.object.name
              const propertyName =
                openingElement.name.property &&
                openingElement.name.property.name

              if (objectName !== 'Blocks' && propertyName !== 'Root') {
                return
              }

              const children = path.node.children.filter((c: any) => !t.isJSXText(c))

              children.forEach((child: any) => {
                const id = getUuid(child.openingElement)
                const name = getElementName(child.openingElement)
                this.state.blocks.push({ id, name })
              })
            }
          }
        }
      };
    })
  }
}

export default BabelPluginGetBlocks
