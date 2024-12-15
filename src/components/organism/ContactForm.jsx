import { FaClock, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import ContactInfoCard from "../atoms/ContactInfoCard";
import { MdAlternateEmail } from "react-icons/md";
import { TbArrowBigDownFilled } from "react-icons/tb";
import MyForm from "./MyForm";

export default function ContactForm() {
  const contactInfoData = [
    {
      icon: <FaWhatsapp className="size-8" />,
      title: "WhatsApp Number",
      info: "+96565581620"
    },
    {
      icon: <FaEnvelope className="size-8" />,
      title: "Email",
      info: "Musallamjawish314@gmail.com"
    },
    {
      icon: <FaClock className="size-8" />,
      title: "Working Hours",
      info: "7 Days - 24/7"
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-5 grid slg:grid-cols-2 my-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold text-thi-color">Everything you need to contact us:</h1>
        <div className="flex flex-col justify-center items-center gap-10 mt-14">
          {contactInfoData.map((item, index) => (
            <ContactInfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              info={item.info}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="bg-gray-100 rounded-2xl shadow-xl slg:mt-0 mt-20 shadow-gray-300 z-20">
          <div className="flex gap-4 items-center p-8">
            <div className="p-2 bg-my-color bg-opacity-40 w-fit rounded-md">
              <MdAlternateEmail className="text-thi-color text-4xl" />
            </div>
            <p className="font-semibold md:font-bold text-sm md:text-base 2md:text-lg text-thi-color flex items-center">
              You can send an email by filling out the form below <TbArrowBigDownFilled className="mr-2 text-xl" />
            </p>
          </div>
          <MyForm />
        </div>
      </div>
    </div>
  );
}
