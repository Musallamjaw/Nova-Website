import BouncingImage from "../atoms/BouncingImage";
import main_home from '../../assets/images/aboutmain.png';

import { AiFillRocket } from "react-icons/ai";
import { AiOutlineCrown } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";

const AboutUsSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1400px] text-my-color flex slg:flex-row flex-col mx-auto gap-10 px-6">
        {/* النصوص */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 flex gap-3 items-center"><AiOutlineCrown className="text-sec-color"/>من نحن</h2>
          <p className="text-lg mb-8">
            نحن فريق فلسطيني ناشئ نسعى بكل شغف وإصرار إلى تقديم خدمات مبتكرة وحلول تكنولوجية متكاملة تلبي احتياجات عملائنا وتساهم في تعزيز تواجدهم الرقمي.
          </p>
          <h3 className="text-3xl font-extrabold mb-4 flex gap-3 items-center"><AiFillRocket className="text-sec-color" />رؤيتنا</h3>
          <p className="text-lg mb-8">
            أن نؤسس لحقبة جديدة من الابتكار الرقمي في فلسطين، حيث تتحول الأفكار إلى حلول عملية مبتكرة تسهم في تحسين جودة الحياة. نسعى لأن نكون روادًا في قيادة التحول الرقمي، من خلال تمكين الأفراد والمؤسسات بالمعرفة والأدوات اللازمة لتحقيق النجاح والتأثير الإيجابي في المجتمع.
          </p>
          <h3 className="text-3xl font-extrabold mb-4 flex gap-3 items-center"><AiOutlineMessage className="text-sec-color" />رسالتنا</h3>
          <p className="text-lg mb-8">
            رسالتنا هي تمكين الأفراد والمؤسسات من تحقيق أهدافهم من خلال تقديم حلول تقنية مبتكرة تلبي احتياجاتهم الحالية وتدعم تطلعاتهم المستقبلية. نؤمن بأهمية التعاون والإبداع في إحداث تغيير إيجابي، ونسعى جاهدين لبناء جسور الثقة مع عملائنا، وتعزيز التميز الرقمي في فلسطين، ووضع بصمتنا في تطوير مجتمعاتنا المحلية والإقليمية.
          </p>
        </div>
        {/* الصورة */}
        <div className="flex justify-center slg:justify-end items-center">
          <BouncingImage
            animationType="bouncey"
            duration={5}
            easing="easeInOut"
            className=""
          >
            <div className="relative rounded-[100px] z-10 w-11/12 aspect-square slg:size-[350px] lg:size-[450px] sxl:size-[500px] shadow-out-shadow overflow-hidden flex justify-center items-center">
              <img src={main_home} alt="main_home" className="m-7 size-full" />
              <div className="shadow-inner-shadow rounded-[100px] absolute w-full h-full border-[10px] border-my-color"></div>
            </div>
          </BouncingImage>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
