import React, { useState, useEffect, useRef } from 'react';
import {Map as Reactmap, Marker, Popup, GeolocateControl, FullscreenControl, NavigationControl, ScaleControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {getMapStyle} from './TrafficController'
import { useMap as useMapHook} from '../../hooks/useMap';
import { useSearchParams } from "react-router-dom";
import axios from "../../config/axios";
import jeepmarker from '../../assets/jeep-marker.svg';
import busmarker from '../../assets/bus-marker.svg';
import trainmarker from '../../assets/train-marker.svg';

const Map = () => {
  const {mapStyle, setMapStyle, visibility, geojson, setGeojson, setSearchValue} = useMapHook();
  const [searchParams] = useSearchParams()
  const mapRef = useRef(null)
  const [popupInfo, setPopupInfo] = useState(null)


  const fetchRoute = async() => {
    try {
      const response = await axios.get(`/routes/${searchParams.get('route_id')}`)
      return response.data;
    } catch (error) {
      throw error
    }
  }

  const pin = (
    <img
      src={
        geojson?.route_type === "JEEP" ? jeepmarker
        : geojson?.route_type === "BUS" ? busmarker
        : geojson?.route_type === "TRAIN" ? trainmarker
        : null
      }
      alt=""
    />
  );

  useEffect(() => {

    const routeId = searchParams.get('route_id');

    if(routeId){
      fetchRoute().then((data) => {
        setGeojson(data);
        setSearchValue(data?.route_long_name)
        mapRef?.current?.flyTo({center:  data.center})
      }).catch((error) => {
        console.error("Error fetching route:", error);
      });
    }

    setGeojson();
    setSearchValue('')
  },[searchParams])

  
  useEffect(() => {
    setMapStyle(getMapStyle({visibility}));
  },[visibility])

  return (
    <>
      <Reactmap
        ref={mapRef}
        reuseMaps
        mapboxAccessToken="pk.eyJ1IjoiZG91Z2hudXQ2MTMiLCJhIjoiY2xvOWQyamRjMDlpeDJpbXU4bmZ2bWNncCJ9.WwAmQXPSCCUNHQgoOCaa1Q"
        initialViewState= {{
            width: '100%',
            height: '100%',
            latitude: 14.6091,
            longitude: 121.0223,
            zoom: 12,
        }}
        style={{width: '100%', height: '100dvh'}}
        mapStyle={mapStyle && mapStyle.toJS()}
        
      >
        <NavigationControl position="bottom-left" />
        <FullscreenControl position="bottom-left" />
        <GeolocateControl position="bottom-left" />  
        <ScaleControl />
        {geojson &&
          geojson.stops.map((stop, index) => (
            <Marker latitude={stop.coordinates[1]} longitude={stop.coordinates[0]} key={index} onClick={e => {
              e.originalEvent.stopPropagation();
              setPopupInfo(stop);
            }}>
             {pin}
            </Marker>
          ))
        }

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.coordinates[0])}
            latitude={Number(popupInfo.coordinates[1])}
            onClose={() => setPopupInfo(null)}
            className='pop-up'
          >
            <div>
              {popupInfo.stop_name}
            </div>
          </Popup>
        )}
      </Reactmap>
    </>
  )
}

export default Map;
