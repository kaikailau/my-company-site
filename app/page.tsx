import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Phone, Smartphone, Mail, MapPin, Award, Flag } from "lucide-react"

import { Button } from "@/components/ui/button"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import ProductHighlights from "@/components/product-highlights"
import CompanyStats from "@/components/company-stats"
import ClientLogos from "@/components/client-logos"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      {/* 英雄区域 */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/sleek-glass-tower.png" alt="现代建筑玻璃幕墙" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                专注建筑玻璃深加工 <br />
                <span className="text-amber-400">赋能绿色建筑新未来</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                重庆领先的建筑玻璃深加工制造商，提供高品质中空玻璃、夹层玻璃和钢化玻璃解决方案
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Link href="/products">
                  <div className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all p-4 rounded-lg text-center">
                    <h3 className="text-white font-medium">产品介绍</h3>
                  </div>
                </Link>
                <Link href="/about">
                  <div className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all p-4 rounded-lg text-center">
                    <h3 className="text-white font-medium">关于我们</h3>
                  </div>
                </Link>
                <Link href="/workshop">
                  <div className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all p-4 rounded-lg text-center">
                    <h3 className="text-white font-medium">车间实景</h3>
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all p-4 rounded-lg text-center">
                    <h3 className="text-white font-medium">联系我们</h3>
                  </div>
                </Link>
              </div>

              <Button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-6 rounded-md">
                了解我们的产品 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="flex justify-center md:justify-start">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg inline-flex items-center">
                <span className="text-white mr-2">向下滚动探索更多</span>
                <ChevronRight className="h-4 w-4 text-white animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                <span className="text-amber-400">专业</span>制造 · <span className="text-amber-400">卓越</span>品质
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                我们是一家专注于建筑玻璃深加工的现代化企业，位于重庆市，工厂占地28亩，车间面积超过10000平方米，拥有60余名经验丰富的员工。
              </p>

              {/* 两个第一成就展示 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-500/90 p-5 rounded-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center opacity-30">
                    <span className="text-4xl font-bold text-white">1</span>
                  </div>
                  <Award className="h-10 w-10 text-black mb-3" />
                  <h3 className="text-black text-xl font-bold mb-2">重庆第一家</h3>
                  <p className="text-black/80 font-medium">
                    重庆地区首家开展钢化玻璃深加工业务的企业，开启本地玻璃深加工新纪元
                  </p>
                </div>

                <div className="bg-amber-500/90 p-5 rounded-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center opacity-30">
                    <span className="text-4xl font-bold text-white">1</span>
                  </div>
                  <Flag className="h-10 w-10 text-black mb-3" />
                  <h3 className="text-black text-xl font-bold mb-2">行业先驱</h3>
                  <p className="text-black/80 font-medium">行业内首家购地建厂的深加工玻璃企业，开启规模化生产新阶段</p>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                公司主营中空玻璃、夹层玻璃、钢化玻璃等产品，致力于为建筑行业提供高品质、节能环保的玻璃解决方案。我们拥有先进的生产设备和严格的质量管控体系，产品广泛应用于商业建筑、住宅项目和特殊建筑工程。
              </p>
              <Link href="/about">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                  了解更多 <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/modern-glassworks.png"
                  alt="公司外景"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 公司数据统计 */}
      <CompanyStats />

      {/* 产品展示 */}
      <ProductHighlights />

      {/* 设备优势 */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              先进<span className="text-amber-400">设备</span>与生产<span className="text-amber-400">工艺</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              我们引进国内外先进设备，打造现代化生产线，确保产品质量和生产效率
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-white">现代化生产设备</h3>
              <p className="text-gray-300 mb-6">
                我们的工厂配备了全套现代化玻璃深加工设备，包括自动切割机、磨边线、钢化炉、PVB夹层线、中空合片线等，确保产品的精度和质量。
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3 text-amber-400">主要设备</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <span className="mr-2 text-amber-400">✓</span>
                    全自动CNC玻璃切割机
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="mr-2 text-amber-400">✓</span>
                    直线磨边机生产线
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="mr-2 text-amber-400">✓</span>
                    大型钢化炉
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="mr-2 text-amber-400">✓</span>
                    PVB夹层玻璃生产线
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="mr-2 text-amber-400">✓</span>
                    全自动中空玻璃合片线
                  </li>
                </ul>
              </div>

              <Link href="/workshop">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                  查看车间实景 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/automated-glass-cutting.png"
                  alt="玻璃切割设备"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/industrial-glass-edging.png"
                  alt="玻璃磨边设备"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/industrial-glass-tempering.png"
                  alt="钢化炉"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/automated-glass-insulation.png"
                  alt="中空玻璃生产线"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 区位优势 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                重庆<span className="text-amber-400">区位优势</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                我们的工厂位于重庆市，地处中国西南地区的交通枢纽，拥有得天独厚的区位优势。
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                依托重庆完善的公路、铁路、水路和航空网络，我们能够快速高效地将产品运送至西南地区各省市，为客户提供及时的供应保障。同时，重庆丰富的熟练技工资源为我们的生产提供了强有力的人才支持。
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">西南交通枢纽</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">多式联运便利</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">辐射西南市场</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">丰富技工资源</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/chongqing-city-map.png"
                  alt="重庆区位图"
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

      {/* 客户合作 */}
      <ClientLogos />

      {/* 联系我们 */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              联系<span className="text-amber-400">我们</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              无论您有任何问题或需求，我们的团队随时为您提供专业支持和服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">联系方式</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="mr-3 text-amber-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">电话</p>
                    <p className="text-white">023-68433031</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-amber-400">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">手机</p>
                    <p className="text-white">18696591661</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-amber-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">邮箱</p>
                    <p className="text-white">1986319@qq.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-amber-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">地址</p>
                    <p className="text-white">重庆市江津区珞璜工业园B区中兴大道5号</p>
                  </div>
                </div>
              </div>
              <Link href="/contact">
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">查看详细联系方式</Button>
              </Link>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 h-[300px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-amber-400 mb-4">
                  <MapPin className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">工厂位置</h3>
                <p className="text-gray-400 mb-4">点击查看详细地图和导航信息</p>
                <Link href="/contact">
                  <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400/10">
                    查看地图
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
