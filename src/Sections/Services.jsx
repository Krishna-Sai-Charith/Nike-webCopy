import { services } from "../Constants"
import ServiceCard from "../Components/ServiceCard"

const Services = () => {
  return (
    <section className="max-container justify-center flex flex-wrap gap-9">
     {services.map((service)=>(
      <ServiceCard key={service.label}{...service}/>
     ))}
    </section>
  )
}

export default Services