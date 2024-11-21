import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Avatar1 from '../assets/avatar1.svg';
import Avatar2 from '../assets/avatar2.svg';
import Avatar3 from '../assets/avatar3.svg';
import Avatar4 from '../assets/avatar4.svg';

// Example reviews
const reviews = [
  {
    name: "Atl_301",
    review: "This platform made finding a roommate so easy! I found the perfect match within days.",
    avatar: `${Avatar1}`,
  },
  {
    name: "Jane Smith",
    review: "I was really struggling to find a good living situation, but this site helped me find a great place and awesome roommates.",
    avatar: `${Avatar2}`
  },
  {
    name: "Mark Wilson",
    review: "Highly recommend this service to anyone looking for a shared living space. It’s a game-changer!",
    avatar: `${Avatar3}`
  },
  {
    name: "Some dude",
    review: "I love this site maybe I don't know how to use it yet because it's always a work in progress",
    avatar: `${Avatar4}`
  },
  // Add more reviews as needed
];

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial-section my-16 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-left mb-8">Hear From Our Roomies</h2>
      <div className="overflow-x-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          loop
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            // When screen width is >= 768px
            768: {
              slidesPerView: 2, // 2 slides for tablets and larger screens
            },
            // When screen width is < 768px
            0: {
              slidesPerView: 1, // 1 slide for mobile screens
            },
          }}
          className="pb-20"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col items-start border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  {/* Avatar */}
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                  
                  {/* Quote Icon */}
                  <span className="material-icons text-purple-500 text-2xl">format_quote</span>
                </div>

                {/* Review Text */}
                <p className="text-lg text-gray-700 italic mb-2">{review.review}</p>
                
                {/* User Name */}
                <p className="text-sm text-gray-500 self-end">- {review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;