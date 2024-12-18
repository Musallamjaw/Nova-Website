/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa";
import shap5 from '../../assets/images/decor/sun-shadow-right.png'
const ServicesCard = ({ title, description, text, note, image, gradientFrom }) => {
  return (
    <div className="relative main-div flex justify-center">
      <div
        className={`absolute flex w-full flex-col 2xmobile:p-10 p-5 bg-gradient-to-b ${gradientFrom === 'orange-700' ? 'from-orange-700 to-amber-500' : gradientFrom === 'violet-900' ? 'from-violet-900 to-blue-500' : 'from-teal-950 to-sky-600'} h-[590px] max-w-[500px] rounded-2xl shadow-xl shadow-gray-400 hover:z-10 my-back-animation overflow-y-auto`}
      >
        <p className="text-xl font-bold border-b-2 pb-4">{title}</p>
        <ul className="2xmobile:mt-10 mt-6 space-y-3">
            <li className="flex items-center">
              <FaCheck className="ml-2" />
              {text}
            </li>
        </ul>
        {note && <p className="mt-6 text-black">{note}</p>}
      </div>
      <div
        className={`relative flex flex-col justify-around items-center p-6 bg-gradient-to-b ${gradientFrom === 'orange-700' ? 'from-orange-700 to-amber-500' : gradientFrom === 'violet-900' ? 'from-violet-900 to-blue-500' : 'from-teal-950 to-sky-600'} h-[590px] max-w-[500px] rounded-2xl shadow-xl shadow-gray-400 my-animation`}
      >
        <img src={shap5} alt="" className="absolute top-0 right-0" />
        <p className="text-xl font-bold">{title}</p>
        <img src={image} alt="" className="w-2/3" />
        <p className="text-center font-semibold text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;