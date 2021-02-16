import { testPlugin } from './test-util'
import plugin from './add-block-imports'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('add additional blocks named imports', () => {
  const result = testPlugin(
    plugin,
    'import React from "react"\nimport { Blocks } from "@blocks/react"',
    {
      blocks: [{ name: 'HeaderBasic' }]
    }
  )

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(
    `import React from "react";\nimport { Blocks, HeaderBasic } from "@blocks/react"`
  )
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('should not update non block ImportDeclaration', () => {
  const result = testPlugin(plugin, 'import React from "react"')

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(result).toEqual(`import React from "react"`)
})
