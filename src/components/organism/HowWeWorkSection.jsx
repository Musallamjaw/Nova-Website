const HowWeWorkSection = () => {
  const steps = [
    {
      title: 'Research and Planning',
      description: 'We gather information about the project goals and client requirements and develop a detailed plan that includes execution steps and timelines to achieve the best results.',
      background: 'bg-req'
    },
    {
      title: 'Design Selection',
      description: 'We present several designs to the client, from which they can choose what suits them, with the option to modify any details as needed or desired by the client.',
      background: 'bg-des'
    },
    {
      title: 'Development',
      description: 'We build your website using the latest technologies and programming languages such as React and Tailwind CSS, focusing on high performance and ease of use.',
      background: 'bg-dev'
    },
    {
      title: 'Launch',
      description: 'We deploy the website on appropriate servers, ensuring compatibility with different devices and browsers, while providing ongoing technical support for future updates and improvements.',
      background: 'bg-lunch'
    }
  ];

  return (
    <section id="how-we-work" className="py-16">
      <div className="max-w-[1400px] mx-auto px-6 text-center items-center">
        <h2 className="text-4xl font-black text-thi-color mt-16">How We Work</h2>
        <div className="flex items-center justify-center">
          <p className="mb-16 mt-6 py-1 text-sm px-5 rounded-md bg-my-color flex w-fit text-white">
            These are the steps we follow for every project to maintain quality.
          </p>
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
                  <div className=" absolute w-full h-full bg-thi-color bg-opacity-70 rounded-xl"></div>
                  <p className="z-10 ">{step.title}</p>
                </div>
              </div>
              <div
                className="absolute inset-0  rounded-xl justify-center text-black bg-gray-300 backface-hidden transition-transform transform"
                style={{ transform: "rotateY(180deg)" }}
              >

                <div className="relative flex justify-center items-center w-full h-full p-3 text-white rounded-xl overflow-hidden">
                  <div className={`absolute w-full h-full rounded-xl ${step.background} bg-cover bg-center blur-[5px]`}></div>
                  <div className=" absolute w-full h-full bg-thi-color bg-opacity-80 rounded-xl"></div>
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
