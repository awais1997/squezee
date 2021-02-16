/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'

// @ts-expect-error ts-migrate(6142) FIXME: Module './providers/code' was resolved to '/Users/... Remove this comment to see the full error message
import { useCode } from './providers/code'
// @ts-expect-error ts-migrate(6142) FIXME: Module './providers/editor' was resolved to '/User... Remove this comment to see the full error message
import { useEditor } from './providers/editor'
import { uuidName } from './constants'

const IGNORED_TYPES = ['path']

// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'children' implicitly has an 'any[]... Remove this comment to see the full error message
export default (type: any, props: any, ...children) => {
  const {
    currentElementId,
    setCurrentElementId,
    currentHoveredElementId,
    hoverElementId,
    removeHoveredElementId
  } = useCode()
  const { updateActiveTabByName } = useEditor()

  props = props || {}
  const { [uuidName]: id, sx = {} } = props
  delete props[uuidName]

  const isCurrentElement = id && id === currentElementId
  const isHoveredElement = id && id === currentHoveredElementId

  if (IGNORED_TYPES.includes(type)) {
    return jsx(type, props, ...children)
  }

  return jsx(
    type,
    {
      ...props,
      sx: {
        ...sx,
        boxShadow: isCurrentElement
          ? (theme: any) => `inset 0px 0px 0px 2px ${theme.colors.primary}`
          : isHoveredElement
          ? 'inset 0px 0px 0px 2px #bbbbbb'
          : sx.boxShadow
      },
      onClick: (e: any) => {
        e.stopPropagation()
        if (id) {
          setCurrentElementId(id)
          updateActiveTabByName('editor')
        }
      },
      onMouseEnter: () => hoverElementId(id),
      onMouseLeave: () => removeHoveredElementId(id)
    },
    ...children
  );
}
