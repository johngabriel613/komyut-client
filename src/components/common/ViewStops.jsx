import { Icon } from '@iconify/react';
import { useMap } from '../../hooks/useMap';

const ViewStops = () => {
  const {geojson} = useMap();

  return (
    <>
      <button className='flex-center text-sm text-blue-400'>
        <Icon icon="tabler:chevron-down" width={22}></Icon>
        View Stops
      </button>

      <div className='absolute w-full h-full bg-red-50 top-0 left-0'>
        <h3>Stops</h3>
        {geojson && geojson.features.map((item, index) => (
          <p>{item.properties.stop_name}</p>
        ))}
      </div>
    </>
  )
}

export default ViewStops
