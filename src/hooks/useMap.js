import { useContext } from "react";
import { MapContext } from "../context/MapProvider";

export const useMap = () => useContext(MapContext);

