import Living from "../assets/living.jpg";
import Search from "../assets/search.svg";
import Robot from "../assets/robot.jpg";
import Feedback from "../assets/pic3.jpg";
import Testimonial from "../components/Testimonial";
import Preview from "../components/Preview";

const Home = () => {
  return (
    <>
      <section
        className="h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-center pt-16 md:pt-0 px-4"
        style={{ backgroundImage: `url(${Living})` }}
      >
        {/* Left Side: Title and Sign-Up Button */}
        <div className="bg-white bg-opacity-0 backdrop-blur-[2px] p-8 rounded-md max-w-md mx-auto ml-2 md:ml-16 mb-4 md:mb-0">
          <h1
            className="text-5xl sm:text-6xl font-bold text-white mb-2 whitespace-nowrap"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Roomie HQ
          </h1>
          <p
            className="text-xl sm:text-2xl text-white mb-6"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Search For Your Roomie Here!
          </p>
          <a
            href="/login?mode=signup"
            className="inline-block text-lg sm:text-xl bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-secondary transition-transform transform hover:scale-105"
          >
            Sign Up
          </a>
        </div>

        {/* Right Side: Preview Component */}
        <div className="flex items-center justify-start w-[320px] h-[450px] sm:w-[384px] sm:h-[500px] md:w-[512px] md:h-[600px] lg:w-[640px] lg:h-[700px] mx-auto md:justify-center">
          <Preview />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center my-16 px-4 md:px-16">
        {/* Image Container */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <img
            src={Search}
            alt="Roommate Search"
            className="max-w-full h-auto"
          />
        </div>

        {/* Text Container with Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center md:text-left">
            Revolutionizing the Roommate Search
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center md:text-left">
            At Roomie HQ, our mission is to transform the landscape of shared
            living. We are dedicated to pioneering innovative connections that
            extend beyond mere housing—creating a harmonious blend of privacy
            and community. With cutting-edge technology, our platform not only
            simplifies tenant finding but also revolutionizes the leasing
            experience. We’re committed to ensuring that every individual finds
            not just a space but a home, and every leasing office becomes a
            gateway to seamless, secure, and enriching shared living.
          </p>
          {/* Button and Subtext */}
          <div className="text-center md:text-left">
            <p className="mb-3 text-sm text-gray-500">
              View our "How It Works" page to see more
            </p>
            <a
              href="/works"
              className="inline-block bg-primary text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-primary-dark transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {<Testimonial />}

      <section className="py-16 px-4 md:px-16 flex flex-col md:flex-row items-center">
        {/* Text Container */}
        <div className="w-full md:w-1/2 lg:w-2/3 mb-8 md:mb-0 flex flex-col items-center md:items-start bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-primary text-center md:text-left">
            Cribbo
          </h2>
          <p className="text-lg text-black leading-relaxed mb-6 text-center md:text-left">
            We are dedicated to making the roommate search process seamless and
            efficient. Our platform connects individuals looking for a shared
            living space, helping them find compatible roommates and quality
            accommodations.
          </p>
          {/* Button */}
          <a
            href="/about"
            className="inline-block bg-primary text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-primary-dark transition duration-300"
          >
            About Us
          </a>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
          <div className="relative w-48 h-48 overflow-hidden rounded-full">
            <img
              src={Robot}
              alt="Description"
              className="absolute inset-0 object-cover w-full h-full"
              style={{ clipPath: "circle(50% at center)" }} // Circular crop effect
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-16 flex flex-col md:flex-row justify-around items-center">
        <div
          className="card relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden w-full md:w-1/3 h-[35rem] text-left m-4 transition transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${Feedback})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold text-white mb-2">
              Provide Feedback
            </h2>
            <p className="text-lg text-gray-200 mb-4">
              We’d love to hear your thoughts!
            </p>
            <a
              href="/feedback"
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
            >
              Give Feedback
            </a>
          </div>
        </div>

        <div
          className="card relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden w-full md:w-1/3 h-[35rem] text-left m-4 transition transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${Feedback})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold text-white mb-2">Sign Up</h2>
            <p className="text-lg text-gray-200 mb-4">
              Start finding your perfect roommate.
            </p>
            <a
              href="/questionnaire"
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
            >
              Take Questionnaire
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
