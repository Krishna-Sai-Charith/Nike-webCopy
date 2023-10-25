import Button from "../Components/button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center gap-10 max-lg:flex-col" id="contact-us">
     <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h3>
     <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col p-2.5 gap-5 border-slate-gray sm:border rounded-full">
      <input type="text" placeholder="subscribe@nike.com" className="input" />
      <div className="flex max-sm:justify-end max-sm:w-full items-center">
        <Button label="Sign Up" fullWidth />
      </div>
     </div>
    </section>
  )
}

export default Subscribe