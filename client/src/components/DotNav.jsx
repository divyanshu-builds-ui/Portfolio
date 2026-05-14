import { useEffect, useState } from 'react'

export default function DotNav({ sections }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3
      sections.forEach((id, i) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) setActive(i)
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {sections.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          className={`block rounded-full transition-all duration-500 ${
            active === i
              ? 'w-2.5 h-2.5 bg-primary shadow-[0_0_10px_rgba(100,255,218,0.6)]'
              : 'w-1.5 h-1.5 bg-white/10 hover:bg-white/30'
          }`}
        />
      ))}
    </div>
  )
}
