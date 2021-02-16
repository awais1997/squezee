import template from '@babel/template'

import { uniq } from '../util'

// TODO: Make this configurable for other "blocks packs"
const BLOCKS_IMPORT_SOURCE = '@blocks/react'

const isBlocksImport = (node: any) => node.source && node.source.extra.rawValue === BLOCKS_IMPORT_SOURCE

export default (_api: any, { blocks = [] }) => {
  return {
    visitor: {
      ImportDeclaration(path: any) {
        if (!isBlocksImport(path.node)) {
          return
        }

        // @ts-expect-error ts-migrate(2339) FIXME: Property 'name' does not exist on type 'never'.
        const importNames = blocks.map(block => block.name)
        const allImports = uniq(['Blocks', ...importNames])

        if (blocks.length) {
          const imports = uniq(allImports).join(', ')
          const importAst = template.ast(
            `import {${imports}} from "${BLOCKS_IMPORT_SOURCE}"`
          )

          path.replaceWith(importAst)
          path.skip()
        } else {
          path.remove()
        }
      }
    }
  };
}
