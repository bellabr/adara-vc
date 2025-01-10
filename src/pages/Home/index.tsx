import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import Exits from "../Exits";
import GivingBack from "../GivingBack";
import OurTeam from "../OurTeam";
import Portfolio from "../Portfolio";
import Title from "../Title";

const Home = () => {
  return (
    <div>
      <Title/>
      <AboutUs/>
      <Portfolio/>
      <Exits/>
      <OurTeam/>
      <GivingBack/>
      <ContactUs/>
    </div>
  );
};

export default Home;
