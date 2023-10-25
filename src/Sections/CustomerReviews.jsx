import ReviewCard from "../Components/ReviewCard"
import { reviews } from "../Constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span> 
        Say?
      </h3>
      <p className="mt-4 max-w-lg text-center info-text m-auto">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="justify-evenly mt-24 flex flex-1 items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>(
          <ReviewCard 
          key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
        ))}

      </div>
    </section>
  )
}

export default CustomerReviews
