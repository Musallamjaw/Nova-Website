import values from "../../constants/coreValuesData";
import FeatureCard from "../molecule/FeatureCard";

const CoreValues = () => {


  return (
    <section id="core-values" className="py-16 bg-gradient-to-b from-white via-my-color via-15% to-thi-color to-80% text-white px-6">
      <div className="text-center mb-14 ">
        <h2 className="text-4xl font-semibold mb-8 mt-12">Core Values</h2>
        <p className="text-lg max-w-[800px] mx-auto">
          In our team, we believe in a set of values that form the foundation of our work and guide all our decisions and daily activities. We always strive to adhere to these values to achieve the best results for our clients and community.
        </p>
      </div>
      <div className='grid max-w-[1400px] mx-auto 2md:grid-cols-2  rounded-xl shadow-xl  bg-my-color w-full text-white'>
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
