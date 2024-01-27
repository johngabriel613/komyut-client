

const SectionBanner = ({heading, subheading}) => {
  return (
    <div className="section-banner flex-center justify-center">
      <div className="text-center grid gap-4">
        <h2 className="text-white text-5xl font-bold uppercase">{heading}</h2>
        <p className="text-slate-300">{subheading}</p>
      </div>
    </div>
  )
}

export default SectionBanner
