import Link from "next/link"
import { Phone, Smartphone, Mail, MapPin, PhoneIcon as Wechat } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="h-10 w-40 bg-amber-500 flex items-center justify-center text-black font-bold rounded mb-4">
              时代玻璃
            </div>
            <p className="mb-4">专注建筑玻璃深加工，为客户提供高品质、节能环保的玻璃解决方案。</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Wechat className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  产品展示
                </Link>
              </li>
              <li>
                <Link href="/workshop" className="hover:text-amber-400 transition-colors">
                  车间设备
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">产品系列</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  中空玻璃
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  夹层玻璃
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  钢化玻璃
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  特种玻璃
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>023-68433031</span>
              </li>
              <li className="flex items-start">
                <Smartphone className="mr-2 h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>18696591661</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>1986319@qq.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>重庆市江津区珞璜工业园B区中兴大道5号</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© 2024 重庆时代安全玻璃有限公司. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
