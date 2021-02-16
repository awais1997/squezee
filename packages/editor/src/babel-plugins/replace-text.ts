import { uuidName } from '../constants'

export default (api: any, {
  elementId,
  text
}: any = {}) => {
  const { types: t } = api

  return {
    visitor: {
      JSXOpeningElement(path: any) {
        const id = path.node.attributes.find(
          (node: any) => node && node.name && node.name.name === uuidName
        )

        if (!id || id.value.value !== elementId) {
          return
        }

        path.container.children = [t.JSXText(text)]
      }
    }
  };
}
