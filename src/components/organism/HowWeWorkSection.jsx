const HowWeWorkSection = () => {
  const steps = [
    {
      title: 'البحث والتخطيط',
      description: 'نجمع المعلومات حول أهداف المشروع ومتطلبات العميل، ونضع خطة تفصيلية تشمل خطوات التنفيذ والجداول الزمنية لتحقيق أفضل النتائج.',
      background: 'bg-req'
    },
    {
      title: 'اختيار التصميم',
      description: 'نقوم بعرض عدة تصاميم على العميل ومنها يختار ما يناسبه مع إمكانية التعديل على أي تفصيل بما يلزم أو كما يريد العميل.',
      background: 'bg-des'
    },
    {
      title: 'التطوير',
      description: 'نبني موقعك باستخدام أحدث التقنيات واللغات البرمجية مثل React وTailwind CSS، مع التركيز على الأداء العالي وسهولة الاستخدام.',
      background: 'bg-dev'
    },
    {
      title: 'الإطلاق',
      description: 'ننشر الموقع على الخوادم المناسبة، ونتأكد من توافقه مع مختلف الأجهزة والمتصفحات، مع توفير دعم فني مستمر لتحديثات وتحسينات مستقبلية.',
      background: 'bg-lunch'
    }
  ];

  return (
    <section id="how-we-work" className="py-16">
      <div className="max-w-[1400px] mx-auto px-6 text-center items-center">
        <h2 className="text-4xl font-black text-my-color mt-16">كيف نعمل</h2>
        <div className="flex items-center justify-center">
          <p className="mb-16 mt-6 py-1 text-sm px-5 rounded-md bg-my-color flex w-fit text-white">هذه الخطوات نعمل عليها مع كل مشروع للحفاظ على الجودة</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#9ca3af22] p-6 rounded-lg min-h-[300px] card-animation"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`absolute inset-0 text-2xl font-bold text-white rounded-xl backface-hidden transition-transform transform`}
                style={{ transform: "rotateY(0deg)" }}
              >

                <div className="relative flex justify-center items-center w-full h-full rounded-xl">
                  <div className={`absolute w-full h-full rounded-xl ${step.background} bg-cover bg-center`}></div>
                  <div className=" absolute w-full h-full bg-my-color bg-opacity-70 rounded-xl"></div>
                  <p className="z-10 ">{step.title}</p>
                </div>
              </div>
              <div
                className="absolute inset-0  rounded-xl justify-center text-black bg-gray-300 backface-hidden transition-transform transform"
                style={{ transform: "rotateY(180deg)" }}
              >

                <div className="relative flex justify-center items-center w-full h-full p-3 text-white rounded-xl overflow-hidden">
                  <div className={`absolute w-full h-full rounded-xl ${step.background} bg-cover bg-center blur-[5px]`}></div>
                  <div className=" absolute w-full h-full bg-my-color bg-opacity-80 rounded-xl"></div>
                  <p className="z-10 ">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
