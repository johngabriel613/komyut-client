import { BannerBG, Banner } from "../components/common/Banner"
import VehicleCard from "../components/common/VehicleCard"
import { vehicles } from "../constants"


const Home = () => {
  return (
    <div className="container pt-[80px] isolate">
      <BannerBG/>
      <Banner/>
      <div className="flex flex-col gap-4 mt-12 md:flex-row">
        {vehicles.map((item, index) => (
          <VehicleCard key={index} icon={item.icon} title={item.title} desc={item.desc}/>
        ))}
      </div>
    </div>
  )
}

export default Home
