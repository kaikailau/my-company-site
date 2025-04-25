"use client"

import { useState, useRef, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Building,
  Factory,
  ClipboardCheck,
  Award,
  CheckCircle,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const timelineData = [
  {
    year: "2001",
    title: "公司创立",
    description:
      "重庆时代安全玻璃公司成立，最初设厂于南坪弹子石重麻厂内，是重庆地区首家开展钢化玻璃深加工业务的企业，开启本地玻璃深加工新纪元。",
    icon: <Building className="h-5 w-5 text-amber-500" />,
  },
  {
    year: "2007–2009",
    title: "自建厂房 · 入驻工业园",
    description:
      "2007年公司在江津区珞璜工业园购地，2009年正式迁入全新厂区，成为行业内首家购地建厂的深加工玻璃企业，开启规模化生产新阶段。",
    icon: <Factory className="h-5 w-5 text-amber-500" />,
  },
  {
    year: "2020",
    title: "三体系认证通过",
    description:
      "公司顺利通过《质量管理体系》《职业健康管理体系》《环境管理体系》三大体系认证，标志着在管理规范化、环保安全、职业健康方面迈出坚实一步。",
    icon: <ClipboardCheck className="h-5 w-5 text-amber-500" />,
  },
  {
    year: "2021",
    title: "荣获国家高新技术企业",
    description: "成功入选国家高新技术企业行列，技术创新能力和研发实力获得权威认可，持续为行业技术进步贡献力量。",
    icon: <Award className="h-5 w-5 text-amber-500" />,
  },
  {
    year: "2022",
    title: "绿色产品认证 · CTC",
    description:
      "获得由国家颁发的《中国绿色产品认证证书》（CTC认证），为绿色建材市场拓展奠定坚实基础，践行企业环保发展理念。",
    icon: <CheckCircle className="h-5 w-5 text-amber-500" />,
  },
]

export default function CompanyTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState(5)

  // Determine how many cards to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1)
      } else if (window.innerWidth < 768) {
        setVisibleCards(2)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(3)
      } else if (window.innerWidth < 1280) {
        setVisibleCards(4)
      } else {
        setVisibleCards(5)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" })
      setTimeout(checkScrollButtons, 400)
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
      setTimeout(checkScrollButtons, 400)
    }
  }

  const toggleCardExpansion = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  // Calculate card width based on visible cards
  const cardWidth = `calc((100% / ${visibleCards}) - ${(visibleCards - 1) * 0.5}rem)`

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            企业发展<span className="text-amber-400">历程</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">CHRONOLOGY</p>
        </div>

        <div className="relative">
          {/* 滚动按钮 - 左 */}
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 border-gray-700 text-white hover:bg-black/90 hover:text-amber-400 -ml-4 hidden md:flex"
              onClick={scrollLeft}
              aria-label="向左滚动"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}

          {/* 时间轴容器 */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 gap-2 hide-scrollbar"
            onScroll={checkScrollButtons}
          >
            {timelineData.map((item, index) => (
              <div
                key={index}
                style={{ width: cardWidth }}
                className={cn(
                  "bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300 flex-shrink-0 cursor-pointer",
                  expandedCard === index && "border-amber-500",
                )}
                onClick={() => toggleCardExpansion(index)}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="mr-2">{item.icon}</div>
                      <div className="text-amber-400 text-lg font-bold">{item.year}</div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-gray-400 transition-transform",
                        expandedCard === index && "transform rotate-180",
                      )}
                    />
                  </div>
                  <h3 className="text-base font-bold mb-1.5 text-white leading-tight">{item.title}</h3>
                  <p className={cn("text-gray-400 text-sm", expandedCard === index ? "" : "line-clamp-3")}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 滚动按钮 - 右 */}
          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 border-gray-700 text-white hover:bg-black/90 hover:text-amber-400 -mr-4 hidden md:flex"
              onClick={scrollRight}
              aria-label="向右滚动"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* 移动端指示器 */}
        <div className="flex justify-center mt-4 gap-2 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-black/70 border-gray-700 text-white hover:bg-black/90 hover:text-amber-400"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="向左滚动"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-black/70 border-gray-700 text-white hover:bg-black/90 hover:text-amber-400"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="向右滚动"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* 时间线底部 */}
        <div className="hidden md:flex justify-between mt-4 px-6 relative">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-amber-500/30 -translate-y-1/2"></div>

          {timelineData.map((item, index) => (
            <div
              key={`dot-${index}`}
              className={cn(
                "w-3 h-3 rounded-full z-10 relative transition-all duration-300",
                expandedCard === index ? "bg-amber-500 scale-125" : "bg-amber-500/70",
              )}
              onClick={() => toggleCardExpansion(index)}
            >
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-amber-400 font-medium whitespace-nowrap">
                {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
