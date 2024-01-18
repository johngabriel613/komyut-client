
import Searchbar from "../components/common/Searchbar";
import Map from "../components/common/Map";
import axios from "../config/axios";
import { useEffect } from "react";



const Routes = () => {
  return (
    <div className="relative">
      <Searchbar/>
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
