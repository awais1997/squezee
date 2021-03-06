export default (api: any) => {
  const { types: t } = api

  return {
    visitor: {
      ExportDefaultDeclaration: (path: any) => {
        const declaration = path.node.declaration

        const newVariable = t.variableDeclaration('const', [
          t.variableDeclarator(t.identifier('BLOCKS_Container'), declaration)
        ])

        path.replaceWith(newVariable)
      }
    }
  };
};
