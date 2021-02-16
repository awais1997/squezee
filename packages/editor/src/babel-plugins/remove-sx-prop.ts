import { uuidName } from '../constants'

export default (api: any, {
  elementId,
  key
}: any) => {
  return {
    visitor: {
      JSXOpeningElement(path: any) {
        const id = path.node.attributes.find(
          (node: any) => node && node.name && node.name.name === uuidName
        )

        if (!id || id.value.value !== elementId) {
          return
        }

        const sxProp = path.node.attributes.find(
          (node: any) => node && node.name && node.name.name === 'sx'
        )

        if (!sxProp) {
          return
        }

        sxProp.value.expression.properties = sxProp.value.expression.properties.filter(
          (n: any) => n.key.name !== key
        )
      }
    }
  };
}
