import { FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from "react-icons/gr";
const SocialLinks = () => {
  return (
    <div className="flex gap-5 items-center border-t w-1/2 p-5">
      <a href="https://www.instagram.com/nova.luminar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose-600 transition-all duration-500">
        <GrInstagram className="text-2xl" />
      </a>
      <a href="https://www.linkedin.com/company/nova-kw/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white hover:text-my-color transition-all duration-500">
        <FaLinkedin className="text-2xl" />
      </a>
    </div>
  );
};

export default SocialLinks;