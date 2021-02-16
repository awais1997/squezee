export default () => {
  return {
    visitor: {
      ImportDeclaration(path: any) {
        path.remove()
      }
    }
  };
}
