import { uuidName } from '../constants'

export default (api: any, {
  elementId
}: any = {}) => {
  return {
    visitor: {
      JSXOpeningElement(path: any) {
        const id = path.node.attributes.find(
          (node: any) => node && node.name && node.name.name === uuidName
        )

        if (!id || id.value.value !== elementId) {
          return
        }

        path.parentPath.remove()
      }
    }
  };
}
