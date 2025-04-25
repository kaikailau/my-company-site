export default function Timeline() {
  return (
    <div className="relative">
      {/* 中间线 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-500/30"></div>

      <div className="space-y-12">
        <TimelineItem
          year="2010"
          title="公司成立"
          description="公司在重庆市成立，开始从事建筑玻璃深加工业务，主要生产钢化玻璃。"
          isLeft={true}
        />

        <TimelineItem
          year="2013"
          title="扩大生产规模"
          description="引进先进设备，扩大生产规模，增加中空玻璃生产线，产品种类更加丰富。"
          isLeft={false}
        />

        <TimelineItem
          year="2015"
          title="技术升级"
          description="引进国际先进的PVB夹层玻璃生产线，开始生产高品质夹层玻璃产品。"
          isLeft={true}
        />

        <TimelineItem
          year="2018"
          title="新厂区建成"
          description="新厂区建成并投入使用，占地28亩，车间面积超过10000平方米，生产能力大幅提升。"
          isLeft={false}
        />

        <TimelineItem
          year="2020"
          title="获得行业认证"
          description="获得多项行业认证和荣誉，产品质量和企业实力得到权威认可。"
          isLeft={true}
        />

        <TimelineItem
          year="2023"
          title="技术创新"
          description="引进新型特种玻璃生产技术，开发新产品，进一步拓展市场。"
          isLeft={false}
        />
      </div>
    </div>
  )
}

function TimelineItem({ year, title, description, isLeft }) {
  return (
    <div className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      <div className={`w-5/12 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
        <div className="text-amber-400 text-xl font-bold mb-2">{year}</div>
        <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>

      <div className="w-2/12 flex justify-center">
        <div className="w-5 h-5 rounded-full bg-amber-500 z-10"></div>
      </div>

      <div className="w-5/12"></div>
    </div>
  )
}
