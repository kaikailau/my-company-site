"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const products = [
  {
    id: "equipment-a",
    name: "A系列设备",
    description: "A系列设备采用先进的自动化技术，具有高效率、高精度的特点，适用于各种复杂工况。",
    features: ["自动化程度高", "操作简便", "维护成本低", "生产效率提升30%"],
  },
  {
    id: "equipment-b",
    name: "B系列设备",
    description: "B系列设备专为大规模生产设计，具有稳定性强、产能大的特点，是工业生产的理想选择。",
    features: ["大规模生产", "稳定性强", "能耗低", "智能监控系统"],
  },
  {
    id: "equipment-c",
    name: "C系列设备",
    description: "C系列设备采用模块化设计，可根据客户需求进行定制，灵活性强，适应性广。",
    features: ["模块化设计", "定制化服务", "升级便捷", "兼容性强"],
  },
  {
    id: "equipment-d",
    name: "D系列设备",
    description: "D系列设备是我们的高端产品线，采用最新技术，为客户提供卓越的性能和可靠性。",
    features: ["高端配置", "精密控制", "远程监控", "数据分析功能"],
  },
]

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("equipment-a")

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            先进设备<span className="text-amber-500">展示</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            我们拥有多系列先进设备，满足不同行业和规模的生产需求，为客户提供最优质的解决方案
          </p>
        </div>

        <Tabs defaultValue="equipment-a" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-gray-900/50 p-1 mb-8">
            {products.map((product) => (
              <TabsTrigger
                key={product.id}
                value={product.id}
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
              >
                {product.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {products.map((product) => (
            <TabsContent key={product.id} value={product.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">{product.name}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-500">主要特点</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <span className="mr-2 text-amber-500">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                    了解详情 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <div className="w-full h-[300px] bg-gray-800 rounded-lg flex items-center justify-center">
                      <div className="text-gray-400">{product.name} 图片</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
