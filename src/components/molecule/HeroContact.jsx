export default function HeroContact() {
  return (
    <div className="relative bg-contactbg bg-center bg-cover bg-no-repeat text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-my-color bg-opacity-70 z-0"></div>
      
      {/* Text content */}
      <div className="relative max-w-[1400px] mx-auto px-5 z-10">
        <div className="py-20">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-lg font-medium max-w-xl mt-10">
            We are happy to connect with you to answer your inquiries, hear your feedback, or provide any assistance you may need. We are here to serve you!
          </p>
        </div>
      </div>
    </div>
  );
}
