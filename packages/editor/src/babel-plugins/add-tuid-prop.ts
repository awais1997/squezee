import { uuid, isBlocksRootElement, addUuidAttr, getUuidAttr } from '../util'

export default (api: any, options = {}) => {
  const { types: t } = api
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'forceUuid' does not exist on type '{}'.
  const { forceUuid } = options

  return {
    visitor: {
      JSXOpeningElement(path: any) {
        // Don't add UUIDs to internal blocks elements. For now we'll
        // prefix them with BLOCKS_
        const name = path.node.name && path.node.name.name
        if (name && name.startsWith('BLOCKS_')) {
          return
        }

        if (isBlocksRootElement(path.node)) {
          return
        }

        const tuid = getUuidAttr(path.node)

        if (tuid && !forceUuid) {
          return
        }

        if (tuid) {
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
          tuid.value = t.stringLiteral(uuid())
        } else {
          addUuidAttr(path.node)
        }
      }
    }
  };
}
