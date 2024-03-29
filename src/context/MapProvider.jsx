import { createContext, useState } from "react";

export const MapContext = createContext();


function MapProvider({children}){

  const [mapStyle, setMapStyle] = useState();
  const [visibility, setVisibility] = useState({traffic: false})
  const [geojson, setGeojson] = useState()
  const [searchValue, setSearchValue] = useState()
  
  return(
    <MapContext.Provider value={{mapStyle, setMapStyle, visibility, setVisibility, geojson, setGeojson, searchValue, setSearchValue}}>
      {children}
    </MapContext.Provider>
  )
}

export default MapProvider