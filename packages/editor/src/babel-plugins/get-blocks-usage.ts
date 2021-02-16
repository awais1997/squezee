// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/babel__helper-plugin-utils... Remove this comment to see the full error message
import { declare } from '@babel/helper-plugin-utils'

class BabelPluginGetBlocksUsage {
  plugin: any;
  state: any;
  constructor() {
    this.state = { usage: null }

    this.plugin = declare((api: any) => {
      api.assertVersion(7)
      const { types: t } = api

      return {
        visitor: {
          ExportDefaultDeclaration: (path: any, {
            file
          }: any) => {
            const { body } = file.ast.program

            const name = path.node.declaration.name
            const usage = body.find((node: any) => {
              if (!node.expression || !node.expression.left) {
                return false
              }

              return (
                t.isExpressionStatement(node) &&
                node.expression.left.object.name === name &&
                node.expression.left.property.name === 'usage'
              )
            })

            if (usage) {
              this.state.usage = usage.expression.right.quasis[0].value.raw
            }
          }
        }
      };
    })
  }
}

export default BabelPluginGetBlocksUsage
