import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function Counter({ target, suffix = '', duration = 1.5 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = parseInt(target)
    const step = Math.ceil(end / (duration * 60))
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}
