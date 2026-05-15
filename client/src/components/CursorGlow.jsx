import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(100,255,218,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
      }}
    />
  )
}
