"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "先进制造技术",
    subtitle: "引领行业创新",
    description: "采用全球领先的制造工艺，打造高品质产品",
  },
  {
    id: 2,
    title: "智能化生产线",
    subtitle: "效率与精准并重",
    description: "自动化生产流程，确保产品质量的一致性",
  },
  {
    id: 3,
    title: "严格质量管控",
    subtitle: "品质铸就信誉",
    description: "全流程质量监控，为客户提供可靠保障",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 轮播图片 */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="text-gray-600 text-xl">轮播图片 {index + 1}</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
      ))}

      {/* 轮播内容 */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h3
              className={`text-amber-500 text-xl md:text-2xl font-medium mb-2 transition-all duration-700 ${
                currentSlide === 0 ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              {slides[currentSlide].subtitle}
            </h3>
            <h1
              className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
                currentSlide === 0 ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              {slides[currentSlide].title}
            </h1>
            <p
              className={`text-gray-200 text-lg md:text-xl mb-8 transition-all duration-700 delay-200 ${
                currentSlide === 0 ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              {slides[currentSlide].description}
            </p>
            <div
              className={`flex space-x-4 transition-all duration-700 delay-300 ${
                currentSlide === 0 ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-6">
                了解我们的设备
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-6 py-6">
                联系我们
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 轮播控制 */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-amber-500 w-10" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 左右箭头 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
