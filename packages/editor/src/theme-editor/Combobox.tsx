/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react` if it exists or add... Remove this comment to see the full error message
import { useState, useRef, useEffect } from 'react'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui__components` if i... Remove this comment to see the full error message
import { Label, Input } from '@theme-ui/components'

const Chevron = () => (
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  <svg
    viewBox="0 0 16 16"
    width="12"
    height="12"
    sx={{
      pointerEvents: 'none'
    }}
  >
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    <path
      stroke="currentcolor"
      strokeWidth="2"
      fill="none"
      d="M14 6 L8 12 L2 6"
    />
  {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
  {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
  {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
  {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
  </svg>
)

const keys = {
  38: 'up',
  40: 'down',
  27: 'escape',
  13: 'return'
}

export default ({
  type = 'text',
  name,
  label,
  value,
  onChange,
  options = [],
  ...props
}: any) => {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const root = useRef(null)
  const input = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      if (root.current && root.current.contains(e.target)) return
      setOpen(false)
    }
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [root.current])

  useEffect(() => {
    resetIndex()
  }, [value])

  const popup = name + '-popup'

  const resetIndex = () => {
    const i = options.indexOf(value)
    setIndex(i)
  }

  const handleKeyDown = (e: any) => {
    if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey) return
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    switch (keys[e.keyCode]) {
      case 'up':
        if (!open) setOpen(true)
        if (index < 1) setIndex(options.length - 1)
        else setIndex(index - 1)
        break
      case 'down':
        if (!open) setOpen(true)
        setIndex((index + 1) % options.length)
        break
      case 'return':
        if (!open) return
        const val = options[index]
        if (val) onChange(val)
        setOpen(false)
        break
      case 'escape':
        setOpen(false)
        resetIndex()
        break
      default:
        break
    }
  }

  const handleChange = (e: any) => {
    onChange(e.target.value)
  }

  const handleBlur = (e: any) => {
    requestAnimationFrame(() => {
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      if (root.current && root.current.contains(document.activeElement)) return
      setOpen(false)
    })
  }

  const toggleOpen = (e: any) => {
    setOpen(!open)
    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
    if (input.current) input.current.focus()
  }

  const handleItemClick = (i: any) => (e: any) => {
    const val = options[i]
    if (val) onChange(val)
    setOpen(false)
    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
    input.current.select()
  }

  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div
      ref={root}
      style={{
        position: open ? 'relative' : 'static'
      }}
      sx={{
        color: 'black'
      }}
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Label htmlFor={name}>{label || name}</Label>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Input
          {...props}
          ref={input}
          role="combobox"
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          aria-autocomplete="none"
          aria-haspopup="true"
          aria-owns={popup}
          aria-expanded={open}
          aria-activedescendant={name + index}
        />
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <button
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'number | ... Remove this comment to see the full error message
          tabIndex="-1"
          aria-label={open ? 'Close' : 'Open'}
          onClick={toggleOpen}
          sx={{
            appearance: 'none',
            width: 32,
            height: 32,
            color: 'inherit',
            bg: 'transparent',
            border: 0,
            ml: -32
          }}
        >
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Chevron />
        {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
        {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
        {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </button>
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <ul
        id={popup}
        role="listbox"
        aria-label={name}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'number | ... Remove this comment to see the full error message
        tabIndex="-1"
        style={{
          visibility: open ? 'visible' : 'hidden',
          position: open ? 'absolute' : 'static'
        }}
        sx={{
          left: 0,
          right: 0,
          top: '100%',
          listStyle: 'none',
          p: 0,
          m: 0,
          maxHeight: 512,
          overflowY: 'auto',
          bg: 'white',
          border: '1px solid',
          borderTop: 0,
          borderColor: 'lightgray'
        }}
      >
        {open &&
          // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'option' implicitly has an 'any' type.
          options.map((option, i) => (
            // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <li
              key={option}
              role="option"
              aria-selected={i === index}
              onClick={handleItemClick(i)}
              sx={{
                p: 1,
                userSelect: 'none',
                '&[aria-selected=true],:hover': {
                  bg: 'highlight'
                }
              }}
            >
              {option}
            {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
            {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
            {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </li>
          ))}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </ul>
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive. */}
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  )
}
