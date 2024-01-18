import React, { useState, useEffect } from 'react';
import { fromJS } from 'immutable';
import MAP_STYLE from '../../style.json';
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

const StyleControls = (props) => {
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
      {categories.map((name) => (
        <div key={name} className="input">
          <label>{name}</label>
          <input
            type="checkbox"
            checked={visibility[name]}
            onChange={(evt) => onVisibilityChange(name, evt.target.checked)}
          />
        </div>
      ))}
    </div>
  );
};

export {StyleControls, getMapStyle};
