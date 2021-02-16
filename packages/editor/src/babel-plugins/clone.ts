import traverse from '@babel/traverse'

import { uuid, getUuid, getUuidAttr, addUuidAttr } from '../util'

export default (api: any, {
  elementId
}: any = {}) => {
  const { types: t } = api

  return {
    visitor: {
      JSXOpeningElement(path: any) {
        const id = getUuid(path.node)

        if (!id || id !== elementId) {
          return
        }

        try {
          const element = path.parentPath
          const newElement = t.cloneDeep(element.node)

          // We've found our element and will be cloning, so we can stop all new traversing.
          element.stop()

          // Manually run uuid prop adding to the newly created element to ensure that existing
          // uuids from cloned children are updated.
          traverse(
            newElement,
            {
              JSXOpeningElement(path) {
                const id = getUuidAttr(path.node)

                if (id) {
                  // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
                  id.value = t.stringLiteral(uuid())
                } else {
                  addUuidAttr(path.node)
                }
              }
            },
            path.scope,
            path.state,
            path
          )

          element.insertAfter(newElement)
        } catch (e) {
          console.log(e)
        }
      }
    }
  };
}
