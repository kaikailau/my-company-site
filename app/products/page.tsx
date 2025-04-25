import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <PageHeader
        title="产品展示"
        description="探索我们的高品质建筑玻璃产品系列"
        image="/modern-glass-curtain-wall.png"
      />

      {/* 产品概览 */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              我们的<span className="text-amber-400">产品</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              我们提供多种类型的高品质建筑玻璃产品，满足不同建筑项目的需求
            </p>
          </div>

          <Tabs defaultValue="insulating" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-gray-900/50 p-1 mb-8">
              <TabsTrigger
                value="insulating"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
              >
                中空玻璃
              </TabsTrigger>
              <TabsTrigger
                value="laminated"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
              >
                夹层玻璃
              </TabsTrigger>
              <TabsTrigger value="tempered" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                钢化玻璃
              </TabsTrigger>
              <TabsTrigger value="digital" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                数码打印玻璃
              </TabsTrigger>
            </TabsList>

            <TabsContent value="insulating" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">中空玻璃</h3>
                  <p className="text-gray-300 mb-6">
                    中空玻璃是由两片或多片玻璃，使用高强度高气密性复合粘结剂，将玻璃片与内含干燥剂的铝合金框架粘结，制成的具有良好隔热、隔音、防露等特性的玻璃制品。我们的中空Low-E玻璃广泛应用于建筑幕墙和高端门窗系统。
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">产品特点</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        优异的隔热性能，节能环保
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        良好的隔音效果，提高居住舒适度
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        防结露性能好，保持室内干燥
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        可与Low-E玻璃、夹层玻璃等组合，提升性能
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">应用领域</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        高端建筑幕墙系统
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        节能门窗
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        商业建筑外立面
                      </li>
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                      咨询产品详情 <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/low-e-insulating-glass-curtain-wall.png"
                      alt="中空Low-E玻璃幕墙"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="laminated" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">夹层玻璃</h3>
                  <p className="text-gray-300 mb-6">
                    夹层玻璃是由两片或多片玻璃，中间夹有PVB(聚乙烯醇缩丁醛)胶片，经过特殊工艺处理制成的安全玻璃。当玻璃受到外力破坏时，碎片会粘在PVB胶片上，不会飞溅伤人。广泛应用于商场栏杆、玻璃顶棚等需要高安全性的场所。
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">产品特点</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        优异的安全性能，防止碎片伤人
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        良好的隔音效果，提高居住舒适度
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        优异的防盗性能，提高安全等级
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        可过滤紫外线，保护室内物品不褪色
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">应用领域</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        商场玻璃栏杆
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        玻璃顶棚、采光顶
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        高层建筑幕墙
                      </li>
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                      咨询产品详情 <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/glass-railing-mall.png"
                      alt="商场玻璃栏杆"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tempered" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">钢化玻璃</h3>
                  <p className="text-gray-300 mb-6">
                    钢化玻璃是将普通玻璃加热到接近软化点温度，然后迅速均匀冷却，使玻璃表面形成压应力，内部形成拉应力，从而提高玻璃的强度和安全性的一种安全玻璃。钢化玻璃破碎后呈小颗粒状，大大降低了对人体的伤害风险。
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">产品特点</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        强度高，是普通玻璃的3-5倍
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        安全性好，破碎后呈小颗粒状，不易伤人
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        耐热性好，可承受较大温差
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        可加工成各种形状，适应不同需求
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">应用领域</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        建筑门窗、幕墙
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        室内隔断、淋浴房
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        家具玻璃、电器玻璃
                      </li>
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                      咨询产品详情 <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/tempered-glass-curtain-wall.png"
                      alt="建筑幕墙钢化玻璃"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="digital" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">数码打印玻璃</h3>
                  <p className="text-gray-300 mb-6">
                    数码打印玻璃是采用先进的数码打印技术，将图案、照片或几何图形直接打印在玻璃表面，经过特殊工艺处理后形成的一种装饰性玻璃产品。具有图案精美、色彩丰富、耐久性好等特点，可满足各种个性化装饰需求。
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">产品特点</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        图案精美，色彩丰富
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        个性化定制，满足不同设计需求
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        耐久性好，不易褪色
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        可与其他玻璃产品组合，提升性能
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3 text-amber-400">应用领域</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        室内装饰隔断
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        建筑外立面装饰
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="mr-2 text-amber-400">✓</span>
                        艺术玻璃、展示柜
                      </li>
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                      咨询产品详情 <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/digital-printed-colored-glass.png"
                      alt="彩色数码打印玻璃"
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

      {/* 产品案例 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              产品<span className="text-amber-400">案例</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">我们的产品广泛应用于各类建筑项目，以下是部分案例展示</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/commercial-building-facade.png"
                  alt="商业建筑幕墙"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-bold">重庆某商业中心</h3>
                    <p className="text-gray-300 text-sm">中空Low-E玻璃幕墙</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/luxury-residential-windows.png"
                  alt="高端住宅门窗"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-bold">成都某高端住宅</h3>
                    <p className="text-gray-300 text-sm">夹层中空玻璃门窗</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/office-building-colored-facade.png"
                  alt="办公楼彩色幕墙"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-bold">贵阳某办公楼</h3>
                    <p className="text-gray-300 text-sm">数码打印玻璃幕墙</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/hotel-glass-partition.png"
                  alt="酒店玻璃隔断"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-bold">重庆某酒店</h3>
                    <p className="text-gray-300 text-sm">钢化玻璃隔断</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/shopping-mall-skylight.png"
                  alt="商场采光顶"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-bold">昆明某商场</h3>
                    <p className="text-gray-300 text-sm">夹层玻璃采光顶</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/museum-printed-glass-wall.png"
                  alt="博物馆艺术玻璃墙"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-bold">西安某博物馆</h3>
                    <p className="text-gray-300 text-sm">数码打印艺术玻璃</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                咨询更多案例 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 产品优势 */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              产品<span className="text-amber-400">优势</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">我们的产品具有多方面的优势，为客户创造更大的价值</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="text-amber-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">品质保障</h3>
              <p className="text-gray-400">
                严格的质量管控体系，确保每一件产品都符合国家标准和客户要求，品质稳定可靠。
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="text-amber-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">价格优势</h3>
              <p className="text-gray-400">直接生产厂家，减少中间环节，为客户提供更具竞争力的价格，性价比高。</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="text-amber-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">交期保障</h3>
              <p className="text-gray-400">先进的生产设备和科学的生产管理，确保按时交付，满足客户工期要求。</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="text-amber-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">服务保障</h3>
              <p className="text-gray-400">专业的技术团队，提供从产品选型到安装使用的全程技术支持和服务。</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="text-amber-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">定制能力</h3>
              <p className="text-gray-400">根据客户需求提供个性化定制服务，满足不同项目的特殊要求。</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
