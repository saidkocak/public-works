'use client'

import { useEffect, useRef } from 'react'
import p5 from 'p5'

export default function CalmCreature() {
  const sketchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sketchRef.current) return

    const sketch = (p: p5) => {
      let t = 0

      const mag = (x: number, y: number) => p.sqrt(x * x + y * y)

      const a = (x: number, y: number) => {
        const k = x / 10 - 20
        const e = y / 10 - 20
        const d = mag(k, e) ** 2 / 120
        const q = x / 4 + (k * 0.3) / p.cos(y * 2) * p.sin(d * d - t)
        const c = d / 3 - t / 15
        return [
          q * p.sin(c) + e * p.sin(d + k - t) + 200,
          (q + y / 10 + d * 3) * p.cos(c) + 200
        ]
      }

      p.setup = () => {
        p.createCanvas(400, 400)
        p.background(255)
      }

      p.draw = () => {
        p.background(0) // More transparent background for a subtle trail
        p.stroke(200, 220, 255, 30) // More transparent stroke for a softer look
        p.strokeWeight(1)

        for (let y = 50; y < 350; y += 4) {
          for (let x = 50; x < 950; x += 3) {
            const [px, py] = a(x, y)
            p.point(px, py)
          }
        }

        t += p.PI / 200 // Slower animation
      }
    }

    const p5Instance = new p5(sketch, sketchRef.current)

    return () => {
      p5Instance.remove()
    }
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div
        ref={sketchRef}
        className="border border-gray-700 rounded-lg shadow-lg"
      />
    </div>
  )
}