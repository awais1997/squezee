import { useState, useLayoutEffect, useCallback } from 'react'

const getSize = (el: any) => {
  if (!el) {
    return {
      width: 0,
      height: 0
    }
  }
  return {
    width: el.offsetWidth,
    height: el.offsetHeight
  }
}

export const useElementSize = (ref: any) => {
  const [elementSize, setElementSize] = useState(
    getSize(ref ? ref.current : {})
  )

  const handleResize = useCallback(() => {
    if (ref.current) {
      setElementSize(getSize(ref.current))
    }
  }, [ref])

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    handleResize()
// @ts-expect-error 
    if (typeof ResizeObserver === 'function') {
      // @ts-expect-error 
      let resizeObserver = new ResizeObserver(function() {
        handleResize()
      })
      resizeObserver.observe(ref.current)
      return function() {
        resizeObserver.disconnect(ref.current)
        resizeObserver = null
      }
    } else {
      window.addEventListener('resize', handleResize)
      return function() {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [ref.current])

  return elementSize
}
