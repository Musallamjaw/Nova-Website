import { TypeAnimation } from 'react-type-animation';

const TypeAnimationComp = () => {
  return (
    <TypeAnimation
      sequence={[
        'إدارة مشاريعك',
        1000,
        'بدء تجارتك الإلكترونية',
        1000,
        'توسيع نطاق عملك',
        1000,
        'تصميم تجربة تسوق سلسة',
        1000,
        'مشروع تخرجك',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className='text-3xl xl:text-5xl inline-block font-bold'
    />
  );
};

export default TypeAnimationComp;