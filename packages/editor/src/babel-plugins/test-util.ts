// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/babel__standalone` if it e... Remove this comment to see the full error message
import { transform } from '@babel/standalone'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/babel__plugin-syntax-jsx` ... Remove this comment to see the full error message
import babelPluginSyntaxJsx from '@babel/plugin-syntax-jsx'

export const testPlugin = (plugin: any, src: any, opts = {}) => {
  return transform(src, {
    plugins: [babelPluginSyntaxJsx, [plugin, opts]]
  }).code.replace(/;$/, '');
}
