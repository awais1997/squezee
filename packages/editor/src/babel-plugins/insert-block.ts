import template from '@babel/template'

const blockError = (name: any, message: any) =>
  `
  <div
    sx={{
      p: 2
    }}
  >
    <span
      sx={{
        fontSize: 2
      }}
    >
      Failed to compile ${name}
    </span>

    <pre
      sx={{
        mb: 0,
        backgroundColor: 'rgba(206, 17, 38, 0.05)',
        fontSize: '8pt'
      }}
    >
      {'${JSON.stringify(message)}'}
    </pre>
  </div>
`

export default (api: any, {
  destination,
  block
}: any) => {
  const { types: t } = api

  if (!destination) {
    return {}
  }

  return {
    visitor: {
      JSXElement(path: any) {
        const openingElement = path.node.openingElement

        if (t.isJSXMemberExpression(openingElement.name)) {
          const objectName =
            openingElement.name.object && openingElement.name.object.name
          const propertyName =
            openingElement.name.property && openingElement.name.property.name

          if (objectName !== 'Blocks' && propertyName !== 'Root') {
            return
          }
        } else {
          return
        }

        // TODO: Make this a util
        let blockAST
        try {
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'expression' does not exist on type 'Bloc... Remove this comment to see the full error message
          blockAST = template.ast(block.usage, { plugins: ['jsx'] }).expression
        } catch (e) {
          blockAST = template.ast(blockError(block.name, e.message), {
            plugins: ['jsx']
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'expression' does not exist on type 'Bloc... Remove this comment to see the full error message
          }).expression
        }

        const children = path.node.children.filter((node: any) => t.isJSXElement(node))
        children.splice(destination.index, 0, blockAST)
        path.node.children = children
      }
    }
  };
}
