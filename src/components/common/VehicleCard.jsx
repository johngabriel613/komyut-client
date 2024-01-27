import jeepmarker from "../../assets/jeep-marker.svg";

const VehicleCard = ({icon, title, desc}) => {
  return (
    <div className='w-full flex gap-4 bg-[#161E29] border border-[#2E3C51] rounded-md p-4 md:px-8 md:py:4'>
      <img className="w-full max-w-[44px] md:max-w-[50px]" src={icon} alt="" />
      <div className='flex flex-col'>
        <h3 className="text-slate-200 font-semibold text-xl">{title}</h3>
        <p className="text-sm text-slate-400">{desc}</p>
      </div>
    </div>
  )
}

export default VehicleCard
