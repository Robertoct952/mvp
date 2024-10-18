import Company from "../assets/company.jpg";
import Beto from "../assets/beto.jpeg";
import Overview from "../assets/overview.jpg";

const About = () => {
  return (
    <>
      {/* Background Image Section */}
      <div className="flex justify-center items-center">
        <div
          className="bg-cover bg-center w-full max-w-4xl h-64 translate-y-4 sm:h-80 lg:h-96"
          style={{
            backgroundImage: `url(${Company})`,
            paddingTop: "2rem", // Optional: Adjust to add padding above the image
            paddingBottom: "2rem", // Optional: Adjust to add padding below the image
          }}
        ></div>
      </div>

      {/* Vision and Story Containers */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
        {/* Vision Container */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
          <hr className="my-4 border-gray-300" />
          <p className="text-lg text-gray-600">
            Building Tomorrow’s Connected Living: We envision a future where
            Roomie HQ is the heartbeat of a global community, pioneering
            revolutionary connections and setting the standard for inclusive,
            secure, and vibrant shared living experiences. Our vision is to
            redefine cohabitation, making it a seamless and enriching journey
            for individuals worldwide.
          </p>
        </div>

        {/* Story Container */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
          <hr className="my-4 border-gray-300" />
          <p className="text-lg text-gray-600">
            Our mission is to empower individuals embarking on shared living
            journeys with a tool that reshapes the status quo. By harnessing the
            capabilities of cutting-edge AI technology and intricate user
            profiles, we have developed a dynamic platform that transcends the
            mundane and often uncomfortable process of selecting roommates.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="max-w-screen-lg mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ernestine Peng */}
          <div className="relative bg-white shadow-lg p-6 rounded-lg mt-16 md:mt-0">
            <div
              className="absolute w-32 h-32 -top-16 left-1/2 transform -translate-x-1/2 bg-center bg-cover rounded-full"
              style={{ backgroundImage: `url(${Beto})` }}
            ></div>
            <div className="mt-20">
              <h3 className="text-xl font-semibold text-center">Name</h3>
              <p className="text-center text-sm text-gray-600">
                Vision & Financials
              </p>
              <p className="mt-4 text-gray-700 text-center">
                Name steers the vision and financial direction of Roomie HQ,
                ensuring the company’s future is bright and sustainable.
              </p>
            </div>
          </div>

          {/* Roberto Torres */}
          <div className="relative bg-white shadow-lg p-6 rounded-lg mt-8 md:mt-0 transform translate-y-8">
            <div
              className="absolute w-32 h-32 -top-16 left-1/2 transform -translate-x-1/2 bg-center bg-cover rounded-full"
              style={{ backgroundImage: `url(${Beto})` }}
            ></div>
            <div className="mt-20">
              <h3 className="text-xl font-semibold text-center">
                Roberto Torres
              </h3>
              <p className="text-center text-sm text-gray-600">Tech Lead</p>
              <p className="mt-4 text-gray-700 text-center">
                Roberto is the tech mastermind behind Roomie HQ, turning ideas
                into reality and driving innovation within the platform.
              </p>
            </div>
          </div>

          {/* Name */}
          <div className="relative bg-white shadow-lg p-6 rounded-lg mt-24 md:mt-0">
            <div
              className="absolute w-32 h-32 -top-16 left-1/2 transform -translate-x-1/2 bg-center bg-cover rounded-full"
              style={{ backgroundImage: `url(${Beto})` }}
            ></div>
            <div className="mt-20">
              <h3 className="text-xl font-semibold text-center">Name</h3>
              <p className="text-center text-sm text-gray-600">Marketing</p>
              <p className="mt-4 text-gray-700 text-center">
                Name leads our marketing efforts, creating strategies that
                connect Roomie HQ with the right audience at the right time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <div className="relative w-60 h-60 mx-auto">
              <img
                src={Overview} // Update with your image path
                alt="Company Overview"
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-2/3 px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Company Overview
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Our company presents an innovative solution to transform the
              roommate finding process by introducing Roomie HQ–an anonymous
              ratings and findings platform for roommates and housing. This
              groundbreaking platform is designed to revolutionize the way
              individuals discover compatible roommates and living arrangements,
              while prioritizing privacy and security. By harnessing AI
              technology and detailed user profiles, we offer a unique solution
              to empower users in making informed decisions when selecting their
              future roommates and residence.
            </p>
            <p className="text-lg text-gray-600">
              We take pride in our commitment to creating a safe and inclusive
              community. Our team works tirelessly to ensure that your shared
              living experience is hassle-free and enjoyable. With Roomie HQ,
              you'll find not just roommates, but friends who make your shared
              living journey memorable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
