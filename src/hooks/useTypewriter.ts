import { useEffect, useRef, useState } from 'react'

/**
 * Reveals `wordCount` items one at a time. `msPerWord` is the delay before
 * revealing the *next* item after the one at a given index; pass a function
 * to vary the delay per index (e.g. to pause after certain characters).
 * Starts only once `active` is true, waiting `startDelayMs` before the
 * first word appears. Returns how many words are currently visible and
 * whether the reveal has finished.
 */
function useTypewriter(
  wordCount: number,
  msPerWord: number | ((revealedIndex: number) => number),
  active: boolean,
  startDelayMs = typeof msPerWord === 'number' ? msPerWord : msPerWord(-1),
) {
  const [visibleCount, setVisibleCount] = useState(() => (prefersReducedMotion() ? wordCount : 0))
  const timeoutRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!active || wordCount === 0 || prefersReducedMotion()) return

    const delayAfter = (index: number) => (typeof msPerWord === 'number' ? msPerWord : msPerWord(index))

    let count = 0
    const tick = () => {
      const revealedIndex = count
      count += 1
      setVisibleCount(count)
      if (count < wordCount) {
        timeoutRef.current = window.setTimeout(tick, delayAfter(revealedIndex))
      }
    }
    timeoutRef.current = window.setTimeout(tick, startDelayMs)

    return () => window.clearTimeout(timeoutRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, wordCount, startDelayMs])

  return { visibleCount, isDone: visibleCount >= wordCount }
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default useTypewriter
