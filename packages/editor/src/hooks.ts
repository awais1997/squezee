// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react` if it exists or add... Remove this comment to see the full error message
import { useLayoutEffect, useRef } from 'react'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/interpolate-range` if it e... Remove this comment to see the full error message
import interpolate from 'interpolate-range'

export function useScrollSync(refs: any) {
  const timeoutId = useRef()
  const handleScroll = (event: any) => {
    const targetRef = refs.current.filter(
      (ref: any) => ref.contentDocument === event.target
    )[0]
    const syncedRefs = refs.current.filter(
      (ref: any) => ref.contentDocument !== event.target
    )
    const targetScrollTop = targetRef.contentWindow.pageYOffset
    const targetMaxHeight =
      targetRef.contentDocument.documentElement.scrollHeight -
      targetRef.contentWindow.innerHeight
    syncedRefs.forEach((ref: any) => {
      const { documentElement } = ref.contentDocument
      removeEvent(ref.contentDocument)
      documentElement.style.willChange = 'scroll-position'
      const scrollY = interpolate({
        inputRange: [0, targetMaxHeight],
        outputRange: [
          0,
          documentElement.scrollHeight - ref.contentWindow.innerHeight
        ]
      })(targetScrollTop)
      ref.contentWindow.scrollTo(0, scrollY)
    })
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'Timeout' is not assignable to type 'undefine... Remove this comment to see the full error message
    timeoutId.current = setTimeout(() => {
      syncedRefs.forEach((ref: any) => {
        addEvent(ref.contentDocument)
        ref.contentDocument.documentElement.style.willChange = ''
      })
    }, 120)
  }
  const addEvent = (document: any) => {
    document.addEventListener('scroll', handleScroll, {
      passive: true
    })
  }
  const removeEvent = (document: any) => {
    document.removeEventListener('scroll', handleScroll, {
      passive: true
    })
  }
  useLayoutEffect(() => {
    const documents = refs.current
      .map((ref: any) => ref ? ref.contentDocument : null)
      .filter(Boolean)
    if (documents.length === 0) {
      return
    }
    documents.forEach(addEvent)
    return () => {
      documents.forEach(removeEvent)
    }
  })
}
