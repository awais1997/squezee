// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/babel__standalone` if it e... Remove this comment to see the full error message
import { transform } from '@babel/standalone'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/babel__plugin-syntax-jsx` ... Remove this comment to see the full error message
import babelPluginSyntaxJsx from '@babel/plugin-syntax-jsx'

import BabelPluginGetBlocks from './babel-plugins/get-blocks'
import BabelPluginGetBlocksUsage from './babel-plugins/get-blocks-usage'
import BabelPluginGetCurrentElement from './babel-plugins/get-current-element'
import BabelPluginGetExportedElements from './babel-plugins/get-exported-elements'
import BabelPluginGetElementTree from './babel-plugins/get-element-tree'

export const getExportedElements = (code: any) => {
  const plugin = new BabelPluginGetExportedElements()

  transform(code, {
    plugins: [babelPluginSyntaxJsx, plugin.plugin]
  })

  return plugin.state.elements
}

export const getBlocks = (code: any) => {
  const plugin = new BabelPluginGetBlocks()

  transform(code, {
    plugins: [babelPluginSyntaxJsx, plugin.plugin]
  })

  return plugin.state.blocks
}

export const getBlocksUsage = (code: any) => {
  try {
    const plugin = new BabelPluginGetBlocksUsage()

    transform(code, {
      plugins: [babelPluginSyntaxJsx, plugin.plugin]
    })

    return plugin.state.usage
  } catch (e) {
    console.log(e)
  }
}

export const getCurrentElement = (code: any, elementId: any) => {
  const plugin = new BabelPluginGetCurrentElement()

  transform(code, {
    plugins: [babelPluginSyntaxJsx, [plugin.plugin, { elementId }]]
  })

  return plugin.state.element
}

export const getElementTree = (code: any) => {
  const plugin = new BabelPluginGetElementTree()

  transform(code, {
    plugins: [babelPluginSyntaxJsx, plugin.plugin]
  })

  return plugin.state.tree
}
