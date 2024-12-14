export default function HeroContact() {
  return (
    <div className="relative bg-contactbg bg-center bg-cover bg-no-repeat text-white">
      {/* الخلفية المطلية */}
      <div className="absolute inset-0 bg-my-color bg-opacity-70 z-0"></div>
      
      {/* المحتوى النصي */}
      <div className="relative max-w-[1400px] mx-auto px-5 z-10">
        <div className="py-20">
          <h1 className="text-5xl font-bold">تواصل معنا</h1>
          <p className="text-lg font-medium max-w-xl mt-10">
            نسعد بتواصلك معنا للإجابة على استفساراتك، سماع ملاحظاتك، أو تقديم أي مساعدة تحتاجها. نحن هنا لخدمتك!
          </p>
        </div>
      </div>
    </div>
  );
}
