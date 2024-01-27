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

export const fares = [
  {
    title: 'Traditional Jeepney',
    path: 'https://ltfrb.gov.ph/wp-content/uploads/2023/02/TPUJ-1-scaled.jpg'
  },
  {
    title: 'Modern Jeepney',
    path: 'https://ltfrb.gov.ph/wp-content/uploads/2023/02/Fare-Guide_Modernized-E-jeeps-MC-2019-061-1-scaled.jpg'
  },
  {
    title: 'City Buses',
    path: 'https://ltfrb.gov.ph/wp-content/uploads/2023/02/PUB-CITY-AIRCON-1-scaled.jpg'
  },
  {
    title: 'LRT - 1',
    path: 'https://lrmc.ph/our-business-featured/fare-matrix/'
  },
  {
    title: 'LRT - 2',
    path: 'https://www.lrta.gov.ph/wp-content/uploads/2023/08/Line2-Fare-Matrix-effective-august-2-2023_final-1-1536x1086.png'
  },
  {
    title: 'MRT - 3',
    path: 'https://images.summitmedia-digital.com/topgear/images/2022/08/15/lrt-1-lrt-2-mrt-3-full-guide-04-1660550542.jpg'
  },
  {
    title: 'Philippine National Railways',
    path: 'https://janisnarvas.com/wp-content/uploads/2020/09/fare_increase_aircon-1024x700.jpg'
  }
]