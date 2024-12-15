import shap6 from '../../assets/images/decor/shape-1-1.png'
import shap10 from '../../assets/images/decor/shape-2-1.png'
import shap5 from '../../assets/images/decor/shape-1-2.png'

const HeroSection = () => {
  return (
    <section className="bg-aboutbg relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center">
      <div className="bg-thi-color w-full absolute h-[500px] bg-opacity-80"></div>
      <img src={shap5} alt='' className=' absolute top-0 right-0 z-10' />
      <img src={shap6} alt='' className=' absolute top-0 right-0' />
      <img src={shap10} alt='' className=' absolute bottom-0 left-0 max-w-96' />
      <div className="text-center text-white z-10">
        <h1 className="text-8xl font-bold mb-8">Nova </h1>
      </div>
    </section>
  );
};

export default HeroSection;
