// eslint-disable-next-line react/prop-types
const FeatureCard = ({ imgSrc, title, description, additionalClasses = "" }) => {
  return (
    <div
      className={`p-10 flex flex-col py-10 gap-6 2md:max-h-80 hover:bg-sec-color hover:rounded-xl hover:scale-105 hover:-mt-10 hover:shadow-2xl shadow-black hover:border-0 transition-all duration-500 ease-in-out ${additionalClasses}`}
    >
      <img src={imgSrc} alt={title} className="size-16" />
      <p className="text-xl font-black">{title}</p>
      <p className="text-base font-semibold">{description}</p>
    </div>
  );
};

export default FeatureCard;