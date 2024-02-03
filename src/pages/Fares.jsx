import SectionBanner from '../components/common/SectionBanner';
import FareCard from '../components/common/FareCard';
import { fares } from '../constants';

const Fares = () => {
  return (
    <div>
      <SectionBanner heading={'Fare Guide'} subheading={'Navigating Fares: Your Quick Reference Fare Guide.'}/>
      <div className="container fares-grid">
        {fares.map((fare, index) => (
          <FareCard key={index} title={fare.title} path={fare.path}/>
        ))}
      </div>
    </div>
  )
}

export default Fares
