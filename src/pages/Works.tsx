import Happy from "../assets/happy.jpg";
import Backy from "../assets/Works.jpg";

import HelpIcon from "@mui/icons-material/Help";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ForumIcon from "@mui/icons-material/Forum";
import SmartToyIcon from "@mui/icons-material/SmartToy";

import SecurityIcon from "@mui/icons-material/Security";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ApiIcon from "@mui/icons-material/Api";

import Header from "../components/WorksHeader";
import Repeat from "../components/Repeat";

const items1 = [
  {
    icon: <HelpIcon />,
    header: "Anonymity",
    description:
      "Our site provides its users with privacy. We recognize the importance of keeping your information safe from the public.",
  },
  {
    icon: <BookmarkIcon />,
    header: "Favorites",
    description:
      "Keep your favorites for later! This feature is convenient and can help you in choosing your roommates. You should be able to keep a list of people with characteristics that align with yours when it comes to living in a shared space. This gives you the ability to save and communicate with your favroite people.",
  },
  {
    icon: <ForumIcon />,
    header: "Community Discussions",
    description:
      "Engage with other users on the site. Do not miss out on the opportunity to share and gain insights on how to make your decisions. These conversations shed light on diverse perspectives and common experiences. The discussion board enriches our platform by forming a cohesive network that makes your journey in finding a roommate much easier.",
  },
  {
    icon: <SmartToyIcon />,
    header: "Cribbo",
    description:
      "Cribbo plays a pivotal role in enhancing user experience by intelligently pairing users based on their account information. Leveraging advanced algorithms and user preferences, Cribbo analyzes account details such as interests, preferences, and behavioral patterns to create tailored matches. Whether connecting users with similar hobbies or aligning them based on specific criteria, Cribbo strives to foster meaningful connections.",
  },
  {
    icon: <HelpIcon />,
    header: "Anonymity",
    description: "Description of feature 2",
  },
  {
    icon: <HelpIcon />,
    header: "Anonymity",
    description: "Description of feature 3",
  },
];

const items2 = [
  {
    icon: <SecurityIcon />,
    header: "Data Security",
    description:
      "We are dedicated to safeguarding your data security and privacy. We adhere to rigorous data protection standards and we are regularly auditing and updating our security protocols.Rest assured that your trust in us is met with a commitment to providing a secure and reliable platform.",
  },
  {
    icon: <CloudDoneIcon />,
    header: "Cloud",
    description:
      "Keep your favorites for later! This feature is convenient and can help you in choosing your roommates. You should be able to keep a list of people with characteristics that align with yours when it comes to living in a shared space. This gives you the ability to save and communicate with your favroite people.",
  },
  {
    icon: <ApiIcon />,
    header: "API",
    description:
      "These APIs empower our platform to access and leverage external data, services, or features, enabling us to offer dynamic and up-to-date content. Users benefit from enhanced features, real-time information, and expanded capabilities made possible through the synergy of our APIs. Our API-driven approach ensures that our site remains robust, versatile, and responsive to the evolving needs of our users.",
  },
  {
    icon: <SecurityIcon />,
    header: "Benefit 1",
    description:
      "Our investors ardently believe in the success of our site. Their unwavering support is rooted in a shared vision of the platform's potential and its ability to meet the demands of our target audience. Their confidence is reflected in their strategic contributions and commitment to fueling our growth. With a strong belief in the team, technology, and market opportunity, our investors play a pivotal role in propelling our site towards sustained success and innovation.",
  },
  {
    icon: <CloudDoneIcon />,
    header: "Benefit 2",
    description: "Description of benefit 2",
  },
  {
    icon: <MonetizationOnIcon />,
    header: "Benefit 3",
    description: "Description of benefit 3",
  },
];

const Works = () => {
  return (
    <>
      <Header />

      <Repeat title="Resident Tools" items={items1} backgroundImage={Happy} />

      <section className="bg-gradient-to-r from-purple-500 to-purple-400 text-white py-16 px-8 shadow-lg my-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-lg mb-6">
            Join us today and start your journey to finding the perfect
            roommate!
          </p>
          <button className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-purple-200 transition ease-in-out duration-300">
            Sign Up Now
          </button>
        </div>
      </section>

      <Repeat title="How It Works" items={items2} backgroundImage={Backy} />
    </>
  );
};

export default Works;
