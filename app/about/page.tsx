import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import CompanyTimeline from "@/components/company-timeline"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <PageHeader
        title="关于我们"
        description="了解我们的企业文化、发展历程和团队优势"
        image="/modern-glass-workshop.png"
      />

      {/* 公司简介 */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                公司<span className="text-amber-400">简介</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                我们是一家专注于建筑玻璃深加工的现代化企业，位于重庆市，工厂占地28亩，车间面积超过10000平方米，拥有60余名经验丰富的员工。
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                公司成立于2001年，经过二十余年的发展，已成为西南地区具有影响力的建筑玻璃深加工企业。我们主营中空玻璃、夹层玻璃、钢化玻璃等产品，致力于为建筑行业提供高品质、节能环保的玻璃解决方案。
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                我们拥有先进的生产设备和严格的质量管控体系，产品广泛应用于商业建筑、住宅项目和特殊建筑工程。公司秉承"质量第一、客户至上"的经营理念，不断创新，追求卓越，为客户创造更大的价值。
              </p>

              {/* 行业领先成就展示 */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-lg mb-8 shadow-lg">
                <h3 className="text-black text-xl font-bold mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  行业领先成就
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex items-start">
                      <div className="bg-amber-700/60 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-black font-bold mb-1">重庆第一家钢化玻璃厂</h4>
                        <p className="text-black/80">
                          2001年成立于南坪弹子石重麻厂内，是重庆地区首家开展钢化玻璃深加工业务的企业，开启本地玻璃深加工新纪元。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex items-start">
                      <div className="bg-amber-700/60 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-black font-bold mb-1">行业首家购地建厂企业</h4>
                        <p className="text-black/80">
                          2007年在江津区珞璜工业园购地，2009年正式迁入全新厂区，成为行业内首家购地建厂的深加工玻璃企业，开启规模化生产新阶段。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-amber-400 text-2xl font-bold mb-1">28亩</div>
                  <div className="text-gray-400">工厂占地面积</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-amber-400 text-2xl font-bold mb-1">10000+</div>
                  <div className="text-gray-400">车间面积(平方米)</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-amber-400 text-2xl font-bold mb-1">60+</div>
                  <div className="text-gray-400">专业员工</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-amber-400 text-2xl font-bold mb-1">20+</div>
                  <div className="text-gray-400">行业经验(年)</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/modern-glass-facade.png"
                  alt="公司厂房"
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

      {/* 企业文化 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              企业<span className="text-amber-400">文化</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">我们的企业文化是我们成功的基石，指引着我们不断前进</p>
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
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">企业使命</h3>
              <p className="text-gray-400">为建筑行业提供高品质、节能环保的玻璃解决方案，推动绿色建筑发展。</p>
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
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">企业愿景</h3>
              <p className="text-gray-400">成为西南地区领先、全国知名的建筑玻璃深加工企业，引领行业技术创新。</p>
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
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">核心价值观</h3>
              <p className="text-gray-400">质量第一、客户至上、诚信经营、创新发展、团队协作。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 - 新的横向时间轴 */}
      <CompanyTimeline />

      {/* 团队介绍 */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              专业<span className="text-amber-400">团队</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">我们拥有一支经验丰富、技术精湛的专业团队</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/confident-executive.png"
                  alt="团队成员"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold">张总经理</h3>
                <p className="text-gray-400 text-sm">总经理</p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/thoughtful-engineer.png"
                  alt="团队成员"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold">李工程师</h3>
                <p className="text-gray-400 text-sm">技术总监</p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/factory-manager-confident.png"
                  alt="团队成员"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold">王经理</h3>
                <p className="text-gray-400 text-sm">生产经理</p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/confident-sales-leader.png"
                  alt="团队成员"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold">赵经理</h3>
                <p className="text-gray-400 text-sm">销售经理</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                加入我们 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
