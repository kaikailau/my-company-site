import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function WorkshopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <PageHeader
        title="车间与设备"
        description="探索我们现代化的生产车间和先进设备"
        image="/glassblowing-studio.png"
      />

      {/* 车间概览 */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                现代化<span className="text-amber-400">生产车间</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                我们的生产车间占地面积超过10000平方米，配备了全套现代化玻璃深加工设备，包括自动切割机、磨边线、钢化炉、PVB夹层线、中空合片线等。
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                车间布局科学合理，生产流程高度自动化，确保产品的精度和质量。我们严格执行5S管理，保持车间整洁有序，为员工创造安全、舒适的工作环境。
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                我们的生产线采用先进的自动化控制系统，实现了生产过程的数字化管理，大大提高了生产效率和产品一致性。
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-amber-400 text-2xl font-bold mb-1">10000+</div>
                  <div className="text-gray-400">车间面积(平方米)</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-amber-400 text-2xl font-bold mb-1">5+</div>
                  <div className="text-gray-400">生产线</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-amber-400 text-2xl font-bold mb-1">20+</div>
                  <div className="text-gray-400">主要设备</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-amber-400 text-2xl font-bold mb-1">50+</div>
                  <div className="text-gray-400">生产人员</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/glass-workshop-panorama.png"
                  alt="车间全景"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要设备 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              主要<span className="text-amber-400">设备</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              我们引进国内外先进设备，打造现代化生产线，确保产品质量和生产效率
            </p>
          </div>

          <Tabs defaultValue="cutting" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-gray-900/50 p-1 mb-8">
              <TabsTrigger value="cutting" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                切割设备
              </TabsTrigger>
              <TabsTrigger value="grinding" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                磨边设备
              </TabsTrigger>
              <TabsTrigger
                value="tempering"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
              >
                钢化设备
              </TabsTrigger>
              <TabsTrigger
                value="laminating"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
              >
                夹层设备
              </TabsTrigger>
              <TabsTrigger
                value="insulating"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
              >
                中空设备
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cutting" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">全自动CNC玻璃切割机</h3>
                  <p className="text-gray-300 mb-6">
                    我们的切割设备采用全自动CNC控制系统，能够实现高精度、高效率的玻璃切割。设备配备了自动优化排版功能，大大提高了玻璃的利用率，减少了材料浪费。
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">设备特点</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        高精度切割，误差控制在±0.1mm以内
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        自动优化排版，提高玻璃利用率
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        全自动控制系统，操作简便
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        高效率生产，日切割能力达3000平方米
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/automated-glass-cutting.png"
                      alt="玻璃切割设备"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="grinding" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">直线磨边机生产线</h3>
                  <p className="text-gray-300 mb-6">
                    我们的磨边设备采用先进的直线磨边机生产线，能够实现玻璃边部的精细加工，确保玻璃边缘光滑平整，无毛刺，提高玻璃的安全性和美观度。
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">设备特点</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        多磨头设计，一次完成粗磨、精磨和抛光
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        自动调节磨轮压力，适应不同厚度玻璃
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        水循环冷却系统，延长磨轮寿命
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        高效率生产，日加工能力达2000平方米
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/automated-glass-grinding.png"
                      alt="玻璃磨边设备"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tempering" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">大型钢化炉</h3>
                  <p className="text-gray-300 mb-6">
                    我们的钢化设备采用先进的平板钢化炉，能够生产高质量的钢化玻璃。设备配备了精确的温控系统和均匀的冷却系统，确保玻璃钢化质量稳定，强度高，安全性好。
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">设备特点</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        精确的温控系统，温度误差控制在±1℃以内
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        均匀的冷却系统，确保玻璃平整度
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        自动化控制系统，操作简便
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        高效率生产，日钢化能力达2500平方米
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800&query=glass+tempering+furnace+industrial"
                      alt="钢化炉"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="laminating" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">PVB夹层玻璃生产线</h3>
                  <p className="text-gray-300 mb-6">
                    我们的夹层设备采用先进的PVB夹层玻璃生产线，能够生产高质量的夹层玻璃。设备配备了自动上片系统、清洗系统、PVB裁切系统、预压系统和高压釜系统，实现了夹层玻璃生产的全自动化。
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">设备特点</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        全自动生产线，减少人工操作
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        高精度清洗系统，确保玻璃表面洁净
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        精确的温度和压力控制，确保夹层质量
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        高效率生产，日加工能力达1500平方米
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800&query=laminated+glass+production+line+PVB"
                      alt="夹层玻璃生产线"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="insulating" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">全自动中空玻璃合片线</h3>
                  <p className="text-gray-300 mb-6">
                    我们的中空设备采用先进的全自动中空玻璃合片线，能够生产高质量的中空玻璃。设备配备了自动上片系统、清洗系统、涂布系统、合片系统和充气系统，实现了中空玻璃生产的全自动化。
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">设备特点</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        全自动生产线，减少人工操作
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        高精度清洗系统，确保玻璃表面洁净
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        精确的涂布系统，确保密封性能
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        高效率生产，日加工能力达2000平方米
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800&query=insulating+glass+production+line+automated"
                      alt="中空玻璃生产线"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 生产流程 */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              生产<span className="text-amber-400">流程</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">我们的生产流程科学合理，确保产品质量和生产效率</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="text-amber-400 text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-3 text-white">原料准备</h3>
              <p className="text-gray-400">根据订单要求，准备原片玻璃和辅助材料，进行质量检查和分类。</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="text-amber-400 text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-3 text-white">切割加工</h3>
              <p className="text-gray-400">使用全自动CNC切割机，根据图纸要求进行精确切割，并进行边部处理。</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="text-amber-400 text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-3 text-white">深加工处理</h3>
              <p className="text-gray-400">根据产品类型，进行钢化、夹层或中空等深加工处理，确保产品性能。</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="text-amber-400 text-4xl font-bold mb-4">04</div>
              <h3 className="text-xl font-bold mb-3 text-white">质量检验</h3>
              <p className="text-gray-400">对加工完成的产品进行全面质量检验，确保符合国家标准和客户要求。</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="text-amber-400 text-4xl font-bold mb-4">05</div>
              <h3 className="text-xl font-bold mb-3 text-white">包装入库</h3>
              <p className="text-gray-400">对合格产品进行专业包装，确保运输安全，并进行入库管理。</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="text-amber-400 text-4xl font-bold mb-4">06</div>
              <h3 className="text-xl font-bold mb-3 text-white">物流配送</h3>
              <p className="text-gray-400">根据客户要求，安排专业物流配送，确保产品安全、及时送达。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 质量控制 */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=glass+quality+control+inspection"
                  alt="质量控制"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                严格的<span className="text-amber-400">质量控制</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                我们建立了完善的质量管理体系，从原材料采购到成品出厂的每个环节都进行严格控制，确保产品质量稳定可靠。
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                我们的质检团队配备了先进的检测设备，包括应力仪、厚度仪、平整度仪等，能够对产品的各项指标进行精确测量和分析，确保产品符合国家标准和客户要求。
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3 text-amber-400">质量控制措施</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <span className="mr-2 text-amber-400">✓</span>
                    原材料进厂检验，确保原材料质量
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="mr-2 text-amber-400">✓</span>
                    生产过程控制，确保加工质量
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="mr-2 text-amber-400">✓</span>
                    成品出厂检验，确保产品符合标准
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="mr-2 text-amber-400">✓</span>
                    客户反馈跟踪，持续改进产品质量
                  </li>
                </ul>
              </div>

              <Link href="/products">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                  查看我们的产品 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
