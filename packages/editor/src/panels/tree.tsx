/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'

// @ts-expect-error ts-migrate(6142) FIXME: Module '../providers/code' was resolved to '/Users... Remove this comment to see the full error message
import { useCode } from '../providers/code'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../providers/editor' was resolved to '/Use... Remove this comment to see the full error message
import { useEditor } from '../providers/editor'

const Tree = ({
  tree,
  depth,
  selectedId,
  hoveredId,
  onSelect,
  onMouseEnter,
  onMouseLeave
}: any) => {
  return (
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        backgroundColor: tree.id === selectedId ? 'highlight' : 'transparent'
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'button'.
      <button
        // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'onMouseEnter'. Did you mean 'onm... Remove this comment to see the full error message
        onMouseEnter={() => onMouseEnter(tree.id)}
        // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'onMouseLeave'. Did you mean 'onm... Remove this comment to see the full error message
        onMouseLeave={() => onMouseLeave(tree.id)}
        // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'onClick'. Did you mean 'onclick'... Remove this comment to see the full error message
        onClick={() => onSelect(tree.id)}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          appearance: 'none',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
          width: '100%',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 0,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'pl'.
          pl: depth * 16, // Indent based on depth
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textAlign'.
          textAlign: 'left',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'color'.
          color: tree.id === selectedId ? 'background' : 'text',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'backgroundColor'.
          backgroundColor:
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tree'.
            tree.id === selectedId
              ? 'primary'
              : // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tree'.
                tree.id === hoveredId
              ? 'border'
              : 'transparent',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'border'.
          border: 0,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'cursor'.
          cursor: 'pointer',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'outline'.
          outline: 0,
          '&:hover': {
            // Don't apply hover effect to selected item
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tree'.
            backgroundColor: tree.id === selectedId ? null : 'border'
          },
          '&:focus': {
            boxShadow: (theme: any) => `inset 0 0 0 2px ${theme.colors.primary}`
          }
        }}
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
        <div
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            px: 3,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
            py: 2,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
            fontSize: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'whiteSpace'.
            whiteSpace: 'nowrap',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'overflow'.
            overflow: 'hidden',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textOverflow'.
            textOverflow: 'ellipsis'
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error ts-migrate(18004) FIXME: No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {tree.name}
        </div>
      </button>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tree'.
      {tree.children.map((child: any) => <Tree
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'key'.
        key={child.id}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tree'.
        tree={child}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'depth'.
        depth={depth + 1}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'selectedId'.
        selectedId={selectedId}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'hoveredId'.
        hoveredId={hoveredId}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'onSelect'.
        onSelect={onSelect}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'onMouseEnter'.
        onMouseEnter={onMouseEnter}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'onMouseLeave'.
        onMouseLeave={onMouseLeave}
      />)}
    </div>
  );
}

const TreePanel = () => {
  const {
    tree,
    currentElementId,
    currentHoveredElementId,
    setCurrentElementId,
    hoverElementId,
    removeHoveredElementId
  } = useCode()
  const { updateActiveTabByName } = useEditor()

  return (
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: 2,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'overflow'.
        overflow: 'auto',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderRight'.
        borderRight: '1px solid',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderColor'.
        borderColor: 'border'
      }}
    >
      // @ts-expect-error ts-migrate(18004) FIXME: No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {tree.children.map((child: any) => <Tree
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'key'.
        key={child.id}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'tree'.
        tree={child}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'depth'.
        depth={0}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'selectedId'.
        selectedId={currentElementId}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'hoveredId'.
        hoveredId={currentHoveredElementId}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'onSelect'.
        onSelect={elementId => {
          setCurrentElementId(elementId)
          // @ts-expect-error ts-migrate(7006) FIXME: Parameter '(Missing)' implicitly has an 'any' type... Remove this comment to see the full error message
          updateActiveTabByName('editor')
        }}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'onMouseEnter'.
        onMouseEnter={elementId => hoverElementId(elementId)}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'onMouseLeave'.
        onMouseLeave={elementId => removeHoveredElementId(elementId)}
      />)}
    </div>
  );
}

export default TreePanel
