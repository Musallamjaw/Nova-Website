import values from "../../constants/coreValuesData";
import FeatureCard from "../molecule/FeatureCard";

const CoreValues = () => {
  

  return (
    <section id="core-values" className="py-16 bg-my-color text-white px-6">
      <div className="text-center mb-14 ">
        <h2 className="text-4xl font-semibold mb-8 mt-12">القيم الأساسية</h2>
        <p className="text-lg max-w-[800px] mx-auto">
          نحن في فريقنا نؤمن بمجموعة من القيم التي تشكل أساس عملنا وتوجه جميع قراراتنا وأعمالنا اليومية. نسعى دائمًا إلى الالتزام بها لتحقيق أفضل النتائج لعملائنا ومجتمعنا.
        </p>
      </div>
      <div className='grid max-w-[1400px] mx-auto 2md:grid-cols-2  rounded-xl bg-teal-600 w-full text-white'>
        {values.map((value, index) => (
          <FeatureCard
            key={index}
            imgSrc={value.imgSrc}
            title={value.title}
            description={value.description}
            additionalClasses={value.additionalClasses}
          />
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
