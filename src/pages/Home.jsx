import shap1 from '../assets/images/decor/hero-3-shape3.png'
import shap3 from '../assets/images/decor/shape-5-2.png'
import shap4 from '../assets/images/decor/shape-5-6.png'
import shap8 from '../assets/images/decor/shape-1-4.png'
import shap9 from '../assets/images/decor/shape-1-5.png'

import main_home from '../assets/images/January_life_style_working_08-removebg-preview.png'
import SocialLinks from '../components/molecule/SocialLinks'
import featuresData from '../constants/features'
import FeatureCard from '../components/molecule/FeatureCard'
import ServicesCard from '../components/molecule/ServicesCard'
import { servicesCardData } from '../constants/servicesCardData'
import ProjectsCard from '../components/molecule/ProjectsCard'
import { projectsData } from '../constants/projectsData'
import { FaWhatsapp } from "react-icons/fa";
import { TbTriangleFilled } from "react-icons/tb";

export default function Home() {
  return (
    <div className='mx-auto min-h-screen'>
      <section className="min-h-screen w-full bg-gradient-to-b from-white via-my-color via-30% to-sec-color to-80% pt-24 text-white flex flex-col justify-center pb-10 px-5">
        <div className='relative max-w-[1400px] w-full mx-auto flex slg:flex-row flex-col justify-between items-center gap-3 slg:mt-24 2md:-mt-8 -mt-10'>

          <img src={shap3} alt="decor" className='absolute left-24 -top-20 hidden slg:block' />
          <img src={shap4} alt="decor" className='absolute w-32 rounded-full left-3/4 -bottom-10  slg:left-1/3 slg:-bottom-20 overflow-hidden' />
          <div className='max-w-[600px] xl:max-w-[700px] flex flex-col gap-10 slg:text-start text-center py-10 mt-10'>
            <p className='text-3xl lg:text-4xl xl:text-5xl font-bold xl:leading-[1.7] lg:leading-[1.5] leading-[1.5] xl:h-[150px] md:h-[100px] mobile:h-[140px] h-auto '>
              With <span className='text-amber-400'>Nova </span>Shaping Your Digital Success!&nbsp;
            </p>
            <p className='text-sm lg:text-base xl:text-lg font-medium text-gray-200 leading-loose'>Nova helps you design and develop interactive and integrated websites to suit your digital needs.</p>
            <div className='relative'>
              <SocialLinks />
              <img src={shap1} alt="decor" className='absolute w-32 left-32 bottom-3 ' />
            </div>
          </div>
          <div className='  flex max-w-[700px] mx-auto justify-center items-center'>
            <div className="relative rounded-[100px] z-10 w-11/12 aspect-square slg:size-[350px] lg:size-[450px] sxl:size-[500px] xl:size-[590px] shadow-out-shadow overflow-hidden flex justify-center items-center">
              <img src={main_home} alt="main_home" className="m-7 size-full" />
              <div className="shadow-inner-shadow rounded-[100px] absolute w-full h-full border-[10px] border-[#cce6e6]"></div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative mb-20'>
        <div className='curved-edge absolute -z-10 w-full h-[70%] max-h-96 bg-sec-color'></div>
        <div className='max-w-[1400px] mx-auto px-4 2xmobile:px-10 md:px-20 py-24'>
          <div className='grid  2md:grid-cols-2 xl:grid-cols-4 rounded-xl bg-my-color w-full text-white'>
            {featuresData.map((feature, index) => (
              <FeatureCard
                key={index}
                imgSrc={feature.imgSrc}
                title={feature.title}
                description={feature.description}
                additionalClasses={feature.additionalClasses}
              />
            ))}
          </div>
        </div>
        <div className='max-w-[1400px] mx-auto px-4 mt-20 text-white overflow-x-hidden pb-12'>
          <div className='flex  flex-col items-center gap-10'>
            <p className='text-4xl md:text-[54px] lg:text-6xl font-black text-my-color text-shadow'>Our featured  <span className='text-sec-color'>services</span></p>
            <p className='max-w-md text-thi-color font-bold text-lg w-fit px-5 py-1 text-center rounded-xl'>We provide innovative solutions that meet your needs and exceed your expectations.</p>
          </div>
          <div className="grid 2md:grid-cols-2 xl:grid-cols-3 gap-y-20 gap-x-16 mt-20">
            {servicesCardData.map((data) => (
              <ServicesCard key={data.id} {...data} />
            ))}
          </div>
        </div>
      </section>
      <section className='py-24 bg-gradient-to-t from-gray-100 from-90% to-white'>
        <div className='flex flex-col items-center gap-10'>
          <p className='text-4xl md:text-[54px] lg:text-6xl font-black text-my-color text-shadow'>Our <span className='text-sec-color'>Projects</span></p>
        </div>
        <div className='max-w-[1400px] xl:mx-auto grid 2md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-28 px-4 mt-24 text-white pr-14'>
          {projectsData.map((project) => (
            <ProjectsCard key={project.id} {...project} />
          ))}
        </div>
      </section>
      <section className="relative w-full h-[500px] bg-teal-950 bg-contactbg bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-my-color bg-opacity-60"></div>
        <img src={shap8} alt="decor" className='absolute left-1/3 bottom-20 hidden slg:block' />
        <img src={shap9} alt="decor" className='rotate-180 absolute w-32 right-1/3 top-28 ' />
        <div className='max-w-[1400px] h-full mx-auto grid 2md:grid-cols-2 p-4 2md:p-10'>
          <div className="text-white z-10 flex flex-col justify-center h-full">
            <p className="text-xl font-semibold mb-14">Start your digital presence today!</p>
            <p className="text-3xl font-bold mb-4">Order your website now!</p>
            <p className="text-3xl font-bold tracking-wider">+96565581620</p>
            <a href='http://wa.me/96565581620' target='_blanck' className="flex items-center justify-center w-fit gap-3 h-16 bg-sec-color hover:bg-teal-800 transition duration-300 ease-in-out rounded-lg mt-10 px-5 shadow-lg">
              <FaWhatsapp className="text-3xl mr-3 text-white" />
              <span className="text-lg font-medium text-white">Contact via WhatsApp</span>
            </a>
          </div>
          <div className='flex h-full w-full 2md:justify-end 2md:pl-20 items-center'>
            <button className='size-32 relative bg-white rounded-full z-10 shadow-out-shadow hover:bg-my-color hover:shadow-2xl hover:shadow-black group transition-all duration-300'>
              <TbTriangleFilled className='rotate-90 text-4xl text-my-color group-hover:text-white absolute top-[47px] right-[45px] transition-all duration-300' />
            </button>
            <p></p>
          </div>
        </div>
      </section>

    </div>
  )
}
