import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            联系<span className="text-amber-500">我们</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            无论您有任何问题或需求，我们的团队随时为您提供专业支持和服务
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
          <form className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  姓名
                </label>
                <Input id="name" placeholder="请输入您的姓名" className="bg-gray-900 border-gray-700 text-white" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  邮箱
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="请输入您的邮箱"
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  电话
                </label>
                <Input id="phone" placeholder="请输入您的电话" className="bg-gray-900 border-gray-700 text-white" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  公司
                </label>
                <Input
                  id="company"
                  placeholder="请输入您的公司名称"
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  主题
                </label>
                <Input id="subject" placeholder="请输入咨询主题" className="bg-gray-900 border-gray-700 text-white" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  留言
                </label>
                <Textarea
                  id="message"
                  placeholder="请输入您的留言内容"
                  className="bg-gray-900 border-gray-700 text-white resize-none h-[140px]"
                />
              </div>

              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium mt-2">提交留言</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
