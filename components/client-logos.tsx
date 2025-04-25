export default function ClientLogos() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            合作<span className="text-amber-400">客户</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">我们与众多知名企业建立了长期稳定的合作关系</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-center h-20">
              <div className="text-gray-500 font-medium">客户 LOGO {item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
