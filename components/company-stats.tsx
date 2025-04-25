"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

const stats = [
  { value: 10, label: "年行业经验", suffix: "+" },
  { value: 28, label: "工厂占地(亩)", suffix: "" },
  { value: 10000, label: "车间面积(㎡)", suffix: "+" },
  { value: 60, label: "专业员工", suffix: "+" },
]

export default function CompanyStats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-16 bg-amber-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatCounter key={index} value={stat.value} label={stat.label} suffix={stat.suffix} isVisible={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCounter({ value, label, suffix = "", isVisible }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const startTime = Date.now()
      const endValue = value

      const timer = setInterval(() => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)
        const currentValue = Math.floor(progress * endValue)

        setCount(currentValue)

        if (progress === 1) {
          clearInterval(timer)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
        <span ref={countRef}>{count}</span>
        <span>{suffix}</span>
      </div>
      <p className="text-white/80 font-medium">{label}</p>
    </div>
  )
}
