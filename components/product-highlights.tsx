import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProductHighlights() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            产品<span className="text-amber-400">展示</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            我们提供多种类型的高品质建筑玻璃产品，满足不同建筑项目的需求
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-900/50 rounded-lg overflow-hidden group">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=500&width=400&query=insulating+glass+window"
                alt="中空玻璃"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-bold">中空玻璃</h3>
                  <p className="text-gray-300 text-sm">优异的隔热隔音性能</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <Link href="/products">
                <Button variant="link" className="text-amber-400 p-0 h-auto font-medium">
                  了解更多 <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg overflow-hidden group">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=500&width=400&query=laminated+safety+glass"
                alt="夹层玻璃"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-bold">夹层玻璃</h3>
                  <p className="text-gray-300 text-sm">优异的安全防护性能</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <Link href="/products">
                <Button variant="link" className="text-amber-400 p-0 h-auto font-medium">
                  了解更多 <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg overflow-hidden group">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=500&width=400&query=tempered+glass+panel"
                alt="钢化玻璃"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-bold">钢化玻璃</h3>
                  <p className="text-gray-300 text-sm">高强度安全玻璃</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <Link href="/products">
                <Button variant="link" className="text-amber-400 p-0 h-auto font-medium">
                  了解更多 <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg overflow-hidden group">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=500&width=400&query=special+decorative+glass"
                alt="特种玻璃"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-bold">特种玻璃</h3>
                  <p className="text-gray-300 text-sm">满足特殊需求的玻璃产品</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <Link href="/products">
                <Button variant="link" className="text-amber-400 p-0 h-auto font-medium">
                  了解更多 <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/products">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              查看全部产品 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
