// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/babel__helper-plugin-utils... Remove this comment to see the full error message
import { declare } from '@babel/helper-plugin-utils'
import * as t from '@babel/types'

import { textTrim, getElementName, getUuid } from '../util'
import { uuidName } from '../constants'

const getElementProps = (attributes = {}) => {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'reduce' does not exist on type '{}'.
  const props = attributes.reduce((acc: any, curr: any) => {
    let value = null

    if (curr.value.value) {
      value = curr.value.value
    } else if (t.isJSXExpressionContainer(curr.value)) {
      value = curr.value.expression.properties.reduce((acc: any, curr: any) => {
        acc[curr.key.name] = curr.value.value
        return acc
      }, {})
    } else {
      //debugger
    }

    acc[curr.name.name] = value
    return acc
  }, {})

  props.sx = props.sx || {}
  return props
}

const getParentId = (node: any) => {
  const parent = node.parentPath.parentPath.node
  const openingElement = parent && parent.openingElement

  if (!openingElement) {
    return null
  }

  const id = openingElement.attributes.find(
    (node: any) => node && node.name && node.name.name === uuidName
  )

  return id && id.value && id.value.value
}

class BabelPluginGetCurrentElement {
  plugin: any;
  state: any;
  constructor() {
    this.state = { element: null }

    this.plugin = declare((api: any, {
      elementId
    }: any) => {
      api.assertVersion(7)
      const { types: t } = api

      return {
        visitor: {
          JSXOpeningElement: (path: any) => {
            const id = path.node.attributes.find(
              (node: any) => node && node.name && node.name.name === uuidName
            )

            if (!id || id.value.value !== elementId) {
              return
            }

            const children = path.container.children || []
            const hasElements = children.some((n: any) => !t.isJSXText(n))

            const element = {
              id: elementId,
              name: getElementName(path.node),
              props: getElementProps(path.node.attributes),
              parentId: getParentId(path)
            }

            if (hasElements) {
              // @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type '{ id: ... Remove this comment to see the full error message
              element.children = children
                .map((c: any) => {
                  if (t.isJSXText(c)) {
                    return false
                  }
                  return {
                    id: getUuid(c.openingElement),
                    name: getElementName(c.openingElement)
                  }
                })
                .filter(Boolean)
            } else if (children.length) {
              // @ts-expect-error ts-migrate(2339) FIXME: Property 'text' does not exist on type '{ id: any;... Remove this comment to see the full error message
              element.text = children.map((n: any) => textTrim(n.value)).join(' ')
            }

            this.state.element = element
          }
        }
      };
    })
  }
}

export default BabelPluginGetCurrentElement
