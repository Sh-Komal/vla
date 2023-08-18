import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    name: "Maria Kate",
    role: "Photographer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    rating: 4,
    avatar:
      "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg",
  },
  {
    name: "John Doe",
    role: "Web Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis.",
    rating: 5,
    avatar:
      "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg",
  },
  {
    name: "Anna Deynah",
    role: "UX Designer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    rating: 4,
    avatar:
      "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
  },
];

const Testimonial = () => {
  return (
    
    <div className="container bg-cyan-600 my-20 mx-auto md:px-6 pt-10 overflow: hidden">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">TESTIMONIALS</h2>

        <div className="relative">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000} // Set the time (in milliseconds) for each slide
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-content">
                <img
                  className="mx-auto mb-6 rounded-full h-40 w-40 object-contain"
                  src={testimonial.avatar}
                  alt="avatar"
                />
                <div className="flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <h5 className="mb-2 text-lg font-bold">
                      {testimonial.name}
                    </h5>
                    <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                      {testimonial.role}
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      {testimonial.content}
                    </p>
                    <ul className="mb-0 flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className={`w-5 ${
                              i < testimonial.rating
                                ? "text-warning"
                                : "text-neutral-600 dark:text-neutral-300"
                            }`}
                          >
                            <path
                              fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            />
                          </svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;