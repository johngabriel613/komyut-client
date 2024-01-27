import React, { useState, useEffect, useRef } from 'react';
import {Map as Reactmap, Marker} from 'react-map-gl';
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


  const fetchRoute = async() => {
    try {
      const response = await axios.get(`/routes/${searchParams.get('route_id')}`)
      return response.data;
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {

    const routeId = searchParams.get('route_id');

    if(routeId){
      fetchRoute().then((geojson) => {
        setGeojson(geojson);
        setSearchValue(geojson?.route_long_name)
        mapRef?.current?.flyTo({center:  geojson.geometry.center})
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
        style={{width: '100%', height: '100vh'}}
        mapStyle={mapStyle && mapStyle.toJS()}
      >
        {geojson &&
          geojson.geometry.coordinates.map((point, index) => (
            <Marker latitude={point[1]} longitude={point[0]} key={index}>
             <img
                src={
                  geojson.route_type === "JEEP" ? jeepmarker
                  : geojson.route_type === "BUS" ? busmarker
                  : geojson.route_type === "TRAIN" ? trainmarker
                  : null
                }
                alt=""
              />
            </Marker>
          ))
        }
      </Reactmap>
    </>
  )
}

export default Map;
