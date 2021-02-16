import template from '@babel/template'

import { uuidName } from '../constants'

export default (_: any, {
  elementId
}: any = {}) => {
  const ast = template.ast(`<h1>hello!</h1>`, {
    plugins: ['jsx']
  })

  return {
    visitor: {
      JSXOpeningElement(path: any) {
        const id = path.node.attributes.find(
          (node: any) => node && node.name && node.name.name === uuidName
        )

        if (!id || id.value.value !== elementId) {
          return
        }

        // @ts-expect-error ts-migrate(2339) FIXME: Property 'expression' does not exist on type 'Bloc... Remove this comment to see the full error message
        path.parentPath.insertAfter(ast.expression)
      }
    }
  };
}
