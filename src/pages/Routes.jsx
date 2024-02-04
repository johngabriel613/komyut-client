import Searchbar from "../components/common/Searchbar";
import Map from "../components/common/Map";
import axios from "../config/axios";
import { TrafficController } from "../components/common/TrafficController";
import { useMap } from "../hooks/useMap";
import Legend from "../components/common/Legend";
import ChatBox from "../components/common/ChatBox";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Routes = () => {
  const [isChatActive, setIsChatActive] = useState(false);
  const {setMapStyle} = useMap();
  
  return (
    <div className="relative">
      <div className="absolute w-full max-w-[500px] top-[50px] left-0 right-0 z-20 px-4 mx-auto md:top-[70px]">
        <div className="grid gap-2 bg-[#161E29] p-4 border border-[#2E3C51] rounded-lg md:p-6">
          <p className="text-sm text-slate-400">Navigate Routes</p>
          <div className="w-full flex flex-col gap-3 ">
            <Searchbar/>
            <div className="flex-center justify-between">
              <TrafficController onChange={setMapStyle}/>
              <Legend/>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-0 px-4 z-40">
        <div className={isChatActive ? "block" : "hidden"}>
          <ChatBox/>
        </div>
        <div className="flex justify-end mt-12">
          <Icon icon={isChatActive ? "iconamoon:close" : "bxs:chat"} width={60}  className="bg- p-3 rounded-full text-blue-400 bg-[#161E29] border border-[#2E3C51] cursor-pointer"  onClick={() => setIsChatActive(prev => !prev)}/>
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
