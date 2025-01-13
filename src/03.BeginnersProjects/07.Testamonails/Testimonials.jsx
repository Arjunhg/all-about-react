import { useState } from "react";
import "./index.css";

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
          quote: "This is the best product I've ever used!",
          author: "Jane Doe",
        },
        {
          quote: "I highly recommend this product to everyone!",
          author: "John Smith",
        },
        {
          quote: "This product has completely changed my life!",
          author: "Bob Johnson",
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((currentIndex-1 + testimonials.length)%testimonials.length);
    }
    const handleNext = () => {
        setCurrentIndex((currentIndex+1)%testimonials.length);
    }

    return (
        <div className="testimonials">
           <div className="testimonials-quote">
            {testimonials[currentIndex].quote}
           </div>
           <div className="testimonials-author">
            {testimonials[currentIndex].author}
           </div>

           {/* <div className="testimonials-nav">
            {
                currentIndex > 0 ? (
                    <>
                        <button onClick={handlePrev}>Prev</button>
                        <button onClick={handleNext}>Next</button>
                    </>
                ) : (
                    <button onClick={handleNext}>Next</button>
                )
            }
           </div> */}
           <div className="testimonials-nav">
            <button onClick={handlePrev} disabled={testimonials.length<=1}>Prev</button>
            <button onClick={handleNext}>Next</button>
           </div>
        </div>
    )
}

export default Testimonials