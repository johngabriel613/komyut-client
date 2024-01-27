

const LogoCarousel = () => {
  return(
    <div className="grid place-items-center gap-4">
      <p className="text-md text-slate-500 font-semibold">EXPLORE THE ROUTES OF PUV'S:</p>
      <div className="w-full flex gap-12 justify-center">
        <img className="w-full max-w-[60px]" src={jeepmarker} alt="jeep" />
        <img className="w-full max-w-[60px]" src={busmarker} alt="bus" />
        <img className="w-full max-w-[60px]" src={trainmarker} alt="train" />
      </div>
    </div>
  )
}

export default LogoCarousel