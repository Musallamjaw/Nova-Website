// eslint-disable-next-line react/prop-types
export default function ContactInfoCard({ icon, title, info }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="rounded-full bg-thi-color bg-opacity-20 p-3 w-fit text-thi-color">
        {icon}
      </div>
      <h1 className="text-xl font-bold text-thi-color mt-2">{title}</h1>
      {title == "رقم الواتس آب" ?
        <p className="font-semibold text-lg text-thi-color" dir="ltr">(+972)569597622</p> :
        <p className="font-semibold text-lg text-thi-color">{info}</p>
      }

    </div>
  )
}
