
import Searchbar from "../components/common/Searchbar";
import Map from "../components/common/Map";
import axios from "../config/axios";
import { useEffect } from "react";
import { TrafficController } from "../components/common/TrafficController";
import { useMap } from "../hooks/useMap";
import ViewStops from "../components/common/ViewStops";



const Routes = () => {
  const {setMapStyle} = useMap()
  return (
    <div className="relative">
      <div className="absolute w-full max-w-[500px] top-[70px] left-0 right-0 z-20 px-4 mx-auto">
        <div className="grid gap-2 bg-[#161E29] p-4 border border-[#2E3C51] rounded-lg md:p-6">
          <p className="text-sm text-slate-400">Navigate Routes</p>
          <div className="w-full flex flex-col gap-3 ">
            <Searchbar/>
            <div className="flex-center justify-between">
              <TrafficController onChange={setMapStyle}/>
              {/* <ViewStops/> */}
            </div>
          </div>
        </div>
      </div>
      <Map/>
    </div>
  )
}



export const action = async({request}) => {
  let controller;

  if(controller) controller.abort();

  controller = new AbortController();

  const signal = controller.signal;

  try {
    const formData = await request.formData();
    const intent = formData.get('intent')

    if(intent === "search"){
      const query = formData.get('search');
      const response = await axios.get(`/search?q=${query}`, {signal})
      return response.data
    }
  } catch (error) {
    throw error
  }
}

export default Routes
