// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/babel__helper-plugin-utils... Remove this comment to see the full error message
import { declare } from '@babel/helper-plugin-utils'

class BabelPluginGetExportedElements {
  plugin: any;
  state: any;
  constructor() {
    this.state = { elements: {} }

    this.plugin = declare((api: any) => {
      api.assertVersion(7)
      const { types: t } = api

      return {
        visitor: {
          ExportNamedDeclaration: (path: any) => {
            const {
              declaration: {
                declarations: [declaration]
              }
            } = path.node
            const el = declaration.init.body

            if (t.isJSXElement(el)) {
              const name = declaration.id.name
              this.state.elements[name] = el
            }
          }
        }
      };
    })
  }
}

export default BabelPluginGetExportedElements
