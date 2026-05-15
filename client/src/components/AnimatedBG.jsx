import { useEffect, useRef } from 'react'

export default function AnimatedBG() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let stars = []
    let shootingStars = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create stars
    const starCount = window.innerWidth < 768 ? 150 : 300
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.3,
        opacity: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    // Shooting star spawner
    const spawnShootingStar = () => {
      if (shootingStars.length < 2 && Math.random() < 0.008) {
        shootingStars.push({
          x: Math.random() * canvas.width * 0.7,
          y: Math.random() * canvas.height * 0.4,
          len: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          opacity: 1,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars with twinkling
      stars.forEach(s => {
        s.opacity += s.twinkleSpeed
        if (s.opacity >= 1 || s.opacity <= 0.1) s.twinkleSpeed *= -1
        s.opacity = Math.max(0.1, Math.min(1, s.opacity))

        // Slow drift
        s.y += s.speed
        if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width }

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 230, 255, ${s.opacity * 0.7})`
        ctx.fill()

        // Glow for bigger stars
        if (s.size > 1) {
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.size * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(100, 255, 218, ${s.opacity * 0.08})`
          ctx.fill()
        }
      })

      // Shooting stars
      spawnShootingStar()
      shootingStars = shootingStars.filter(ss => {
        ss.x += ss.speed
        ss.y += ss.speed * 0.6
        ss.opacity -= 0.015

        if (ss.opacity <= 0) return false

        const gradient = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.len, ss.y - ss.len * 0.6)
        gradient.addColorStop(0, `rgba(100, 255, 218, ${ss.opacity})`)
        gradient.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.moveTo(ss.x, ss.y)
        ctx.lineTo(ss.x - ss.len, ss.y - ss.len * 0.6)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Head glow
        ctx.beginPath()
        ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 255, 218, ${ss.opacity})`
        ctx.fill()

        return true
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      {/* Star canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      {/* Nebula clouds - slow moving colored blurs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/[0.025] blur-[180px] animate-orb-1" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/[0.02] blur-[160px] animate-orb-2" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/[0.02] blur-[140px] animate-orb-3" />
      </div>
    </>
  )
}
