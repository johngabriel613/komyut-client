import jeepmarker from '../assets/jeep-marker.svg';
import busmarker from '../assets/bus-marker.svg';
import trainmarker from '../assets/train-marker.svg';

export const navLinks = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'Routes',
    path: '/routes'
  },
  {
    text: 'Fares',
    path: '/fares'
  },
  {
    text: 'About',
    path: '/about'
  }
]

export const vehicles = [
  {
    icon: jeepmarker,
    title: 'Jeepney',
    desc: 'a vibrant and iconic public utility vehicles, bustling city streets with their unique designs and lively colors.'
  },
  {
    icon: busmarker,
    title: 'Bus',
    desc: 'a reliable and affordable intercity transportation, connecting various destinations to both urban and rural commuters.'
  },
  {
    icon: trainmarker,
    title: 'Train',
    desc: 'a convenient and efficient mass transit option within urban areas, providing a vital link for commuters within cities.'
  }
]