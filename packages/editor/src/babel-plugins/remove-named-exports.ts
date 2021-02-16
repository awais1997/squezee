export default () => {
  return {
    visitor: {
      ExportNamedDeclaration(path: any) {
        const declaration = path.node.declaration

        // Ignore "export { Foo as default }" syntax for now
        if (declaration) {
          path.replaceWith(declaration)
        }
      }
    }
  };
}
