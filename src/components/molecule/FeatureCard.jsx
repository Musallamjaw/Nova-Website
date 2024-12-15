// eslint-disable-next-line react/prop-types
const FeatureCard = ({ imgSrc, title, description, additionalClasses = "" }) => {
  return (
    <div
      className={`p-6 flex flex-col py-10 gap-6 2md:h-96 hover:bg-sec-color hover:rounded-xl hover:border-2 hover:scale-105 hover:-mt-10 hover:shadow-2xl shadow-black transition-all duration-500 ease-in-out ${additionalClasses}`}
    >
      <img src={imgSrc} alt={title} className="size-16" />
      <p className="text-xl font-bold">{title}</p>
      <p className="text-base font-medium">{description}</p>
    </div>
  );
};

export default FeatureCard;