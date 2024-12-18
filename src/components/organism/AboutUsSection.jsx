
import main_home from '../../assets/images/aboutmain.png';

import { AiFillRocket } from "react-icons/ai";
import { AiOutlineCrown } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";

const AboutUsSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1400px] text-thi-color flex slg:flex-row flex-col mx-auto gap-10 px-6">
        {/* النصوص */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 flex gap-3 items-center"><AiOutlineCrown className="text-sec-color" />Introduction</h2>
          <p className="text-lg mb-8">
            Inspired by the boundless potential of small businesses and fueled by a passion for innovation, Nova emerges as the guiding light for entrepreneurs seeking to illuminate their journey in the digital world.
          </p>
          <h3 className="text-3xl font-extrabold mb-4 flex gap-3 items-center"><AiFillRocket className="text-sec-color" />Vision</h3>
          <p className="text-lg mb-8">
            Our vision for Nova is to become the shining star in the realm of website development and branding companies. We envision a future where every business, regardless of its size, has the ability to harness the power of a compelling online presence, guided by our commitment to excellence, creativity, and unwavering support.
          </p>
          <h3 className="text-3xl font-extrabold mb-4 flex gap-3 items-center"><AiOutlineMessage className="text-sec-color" />Mission</h3>
          <p className="text-lg mb-8">
            At Nova, our mission is to empower small businesses and aspiring entrepreneurs by crafting exceptional websites and providing comprehensive branding solutions. We aim to be the catalyst that propels their growth, offering accessible and innovative tools to establish their digital presence confidently.
          </p>
        </div>
        {/* الصورة */}
        <div className="flex justify-center slg:justify-end items-center">

          <div className="relative rounded-[100px] z-10 w-11/12 aspect-square slg:size-[350px] lg:size-[450px] sxl:size-[500px] shadow-out-shadow overflow-hidden flex justify-center items-center">
            <img src={main_home} alt="main_home" className="m-7 size-full" />
            <div className="shadow-inner-shadow rounded-[100px] absolute w-full h-full border-[10px] border-sec-color"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
