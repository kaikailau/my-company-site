import { Shield, Clock, Award, Settings, Users, Zap } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-10 w-10 text-amber-500" />,
    title: "品质保障",
    description: "严格的质量管控体系，确保每一台设备都符合国际标准",
  },
  {
    icon: <Clock className="h-10 w-10 text-amber-500" />,
    title: "高效生产",
    description: "先进的生产线和工艺，大幅提升生产效率和产品一致性",
  },
  {
    icon: <Award className="h-10 w-10 text-amber-500" />,
    title: "行业认证",
    description: "获得多项国际认证，产品质量和安全性得到权威认可",
  },
  {
    icon: <Settings className="h-10 w-10 text-amber-500" />,
    title: "定制服务",
    description: "根据客户需求提供个性化解决方案，满足不同应用场景",
  },
  {
    icon: <Users className="h-10 w-10 text-amber-500" />,
    title: "专业团队",
    description: "拥有一支经验丰富的技术团队，提供专业的技术支持",
  },
  {
    icon: <Zap className="h-10 w-10 text-amber-500" />,
    title: "创新研发",
    description: "持续投入研发，不断推出新技术和新产品，引领行业发展",
  },
]

export default function FeatureSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            企业<span className="text-amber-500">优势</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">二十年专注高端设备制造，以卓越品质和创新技术为客户创造价值</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <div className="w-full h-[400px] bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-gray-400">企业优势展示图</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              为什么选择<span className="text-amber-500">我们</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              作为行业领先的设备制造商，我们始终坚持"质量第一、客户至上"的原则，致力于为客户提供最优质的产品和服务。
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              我们拥有先进的生产设备、完善的质量管理体系和专业的技术团队，能够满足客户的各种需求。无论是标准产品还是定制解决方案，我们都能提供最佳选择。
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-300">先进制造工艺</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-300">严格质量控制</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-300">专业技术团队</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-300">全球服务网络</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-300">持续技术创新</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
