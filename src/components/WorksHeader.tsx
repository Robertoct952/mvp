import React, { useState } from 'react';
import Head from "../assets/header.png";

const WorksHeader = () => {
    const [isModalOpen, setModalOpen] = useState(false);
  
    const toggleModal = () => {
      setModalOpen(!isModalOpen);
    };

    const closeModalOnOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            setModalOpen(false);
        }
    }
  
    return (
      <section className="relative flex flex-col lg:flex-row justify-between items-center py-24 px-6 lg:px-16 bg-white">
        {/* Left Side: Title, Text, and Button */}
        <div className="w-full lg:w-1/2 space-y-4 lg:space-y-8 ">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Welcome to Navigating Shared Living
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Discover the secrets to harmonious co-living experiences.<br />
            Watch this video to learn how Cribbo can help you!
          </p>
          <button
            onClick={toggleModal}
            className="mt-4 lg:mt-6 px-6 lg:px-8 py-3 lg:py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl focus:outline-none"
          >
            Watch Video
          </button>
        </div>

        {/* Right Side: Image with Video */}
        <div className="w-full lg:w-1/2 relative flex lg:justify-center lg:items-center mt-8 lg:mt-0">
          <div
            className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full sm:w-3/4 lg:w-full flex justify-center items-center"
            style={{
              backgroundImage: `url(${Head})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <video
              className="relative z-10 w-5/6 sm:w-4/5 md:w-3/4 lg:w-2/3"
              controls
              muted
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Modal for Video */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModalOnOutsideClick}
          >
            <div className="relative w-full max-w-3xl bg-white rounded-lg p-6">
              <button
                onClick={toggleModal}
                className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
              <video
                className="w-full"
                controls
                autoPlay
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </section>
    );
  };

export default WorksHeader;