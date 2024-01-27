import mockup from "../../assets/mockup-1.png";

const Discover = () => {
  return (
    <div className='flex flex-col gap-4 md:items-center md:flex-row'>
      <img src={mockup} alt="" className='w-full max-w-[800px]'/>
      <div className='w-full max-w-[600px] grid gap-4 px-[16px] md:pl-0 md:pr-[16px]'>
        <div className='max-w-[400px] grid gap-2'>
          <span className='text-blue-400 uppercase text-xs'>Discover</span>
          <h2 className='text-white text-4xl font-semibold'>Explore Metro Manila with Komyut:</h2>
        </div>
        <div className='grid gap-4 text-slate-300 text-sm'>
          <p className="leading-loose">The vibrant and bustling capital region of the Philippines. Comprising 16 cities, including Manila, Quezon City, Makati, and Taguig, Metro Manila is a dynamic metropolis where modernity meets rich cultural heritage.</p>
          <p className="leading-loose">Use our interactive map to discover the heart of Metro Manila. Whether you're a local navigating your daily commute or a visitor exploring the city's treasures, Komyut is your guide to seamless and efficient transportation in this vibrant metropolis.</p>
        </div>
      </div>
    </div>
  )
}

export default Discover
