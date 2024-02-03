import React, { useState, useEffect } from 'react';
import { fromJS } from 'immutable';
import MAP_STYLE from '../../style-dark.json';
import { useMap } from '../../hooks/useMap';

const defaultMapStyle = fromJS(MAP_STYLE);
const defaultLayers = defaultMapStyle.get('layers');

const categories = ['traffic'];

const layerSelector = {
  traffic: /traffic/
};

function getMapStyle({ visibility }) {
  const layers = defaultLayers
    .filter((layer) => {
      const id = layer.get('id');
      return categories.every((name) => visibility[name] || !layerSelector[name].test(id));
    })
  return defaultMapStyle.set('layers', layers);
}

const TrafficController = (props) => {
  const {visibility, setVisibility} = useMap()

  useEffect(() => {
    props.onChange(getMapStyle({ visibility }));
    console.log()
  }, [visibility]);

  const onVisibilityChange = (name, value) => {
    setVisibility({ ...visibility, [name]: value });
  };

  return (
    <div className="">
      {categories.map((name, index) => (
      <div className="flex items-center w-full" key={index}>
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" id="toggleB" className="sr-only" checked={visibility[name]} onChange={(evt) => onVisibilityChange(name, evt.target.checked)}/>
            <div className="block bg-[#10151D] border border-slate-300 w-8 h-5 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-slate-300 w-3 h-3 rounded-full transition"></div>
          </div>
          <div className="ml-1 text-slate-300 text-sm font-medium whitespace-nowrap">
            Traffic
          </div>
        </label>

        </div>
      ))}
    </div>
  );
};

export {TrafficController, getMapStyle};
