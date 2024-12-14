/* eslint-disable react/prop-types */
import { TbPointFilled } from "react-icons/tb";

export default function ProjectsCard({ name, imagePc, imageMop, link }) {
  return (
    <a href={link} target={link === "#" ? "_self" : "_blank"} rel="noopener noreferrer" className=" relative w-full flex group">
      <div className=' absolute left-6 pt-[2px] flex justify-end group-hover:-mt-6 transition-all duration-500'>
        <TbPointFilled className='text-red-600' />
        <TbPointFilled className='text-yellow-600' />
        <TbPointFilled className='text-green-600' />
      </div>
      <div className=" absolute flex flex-col items-center bg-slate-900 bg-opacity-90 w-[150px] aspect-[9/16] border-2 border-white bottom-5 -right-14 rounded-2xl pb-4 px-2 group-hover:bottom-10 transition-all duration-700">
        <div className='bg-white w-1/3 h-[2px] rounded-full mt-2 mb-2 '></div>
        <div className="w-full h-full rounded-lg aspect-[9/16]">
          <img src={imageMop} alt='project image' className='w-full h-full rounded-lg' />
        </div>
      </div>
      <div className="bg-slate-900 bg-opacity-90 shadow-2xl rounded-2xl p-3 py-5 w-full group-hover:-mt-6 max-h-[460px] h-fit aspect-square transition-all duration-500">
        <div className="w-full rounded-2xl aspect-square">
          <img src={imagePc} alt='project image' className='w-full rounded-2xl aspect-square' />
        </div>
        <p className='text-center mt-5 text-xl font-semibold'>{name}</p>
      </div>
    </a>
  )
}
