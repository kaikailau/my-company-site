"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Smartphone, Mail, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, product: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        product: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <PageHeader
        title="联系我们"
        description="随时与我们取得联系，我们将为您提供专业的服务和支持"
        image="/contemporary-city-center.png"
      />

      {/* 联系信息 */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                联系<span className="text-amber-400">方式</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                无论您有任何问题或需求，我们的团队随时为您提供专业支持和服务。您可以通过以下方式与我们取得联系，我们将尽快回复您。
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 bg-amber-500/10 p-3 rounded-lg text-amber-400">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">电话</h3>
                    <p className="text-gray-400">023-68433031</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-amber-500/10 p-3 rounded-lg text-amber-400">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">手机</h3>
                    <p className="text-gray-400">18696591661</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-amber-500/10 p-3 rounded-lg text-amber-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">邮箱</h3>
                    <p className="text-gray-400">1986319@qq.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-amber-500/10 p-3 rounded-lg text-amber-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">地址</h3>
                    <p className="text-gray-400">重庆市江津区珞璜工业园B区中兴大道5号</p>
                    <p className="text-gray-400">邮编: 400000</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-white font-medium mb-3">工作时间</h3>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-400 mb-2">周一至周五: 9:00 - 18:00</p>
                  <p className="text-gray-400">周六: 9:00 - 12:00 (周日休息)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-white">在线咨询</h3>

              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                  <div className="text-green-400 mb-2">
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
                      className="mx-auto"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-white font-medium mb-2">提交成功</h4>
                  <p className="text-gray-400">感谢您的咨询，我们将尽快与您联系。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="请输入您的姓名"
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        电话 <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="请输入您的电话"
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        邮箱
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="请输入您的邮箱"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                        公司
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="请输入您的公司名称"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-300 mb-1">
                      咨询产品
                    </label>
                    <Select value={formData.product} onValueChange={handleSelectChange}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="请选择咨询产品" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="insulating">中空玻璃</SelectItem>
                        <SelectItem value="laminated">夹层玻璃</SelectItem>
                        <SelectItem value="tempered">钢化玻璃</SelectItem>
                        <SelectItem value="special">特种玻璃</SelectItem>
                        <SelectItem value="other">其他产品</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      留言内容 <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="请输入您的留言内容"
                      required
                      className="bg-gray-800 border-gray-700 text-white resize-none h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        提交中...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        提交留言
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 地图 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              工厂<span className="text-amber-400">位置</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              我们的工厂位于重庆市江津区珞璜工业园，交通便利，欢迎您前来参观考察
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/industrial-park-overview.png" alt="工厂地图" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg max-w-md text-center">
                  <h3 className="text-xl font-bold mb-2 text-white">重庆时代安全玻璃有限公司</h3>
                  <p className="text-gray-300 mb-4">重庆市江津区珞璜工业园B区中兴大道5号</p>
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white">获取导航</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
