import About from "./About";
import Banner from "./Banner";
import Features from "./Features";
import OurImpact from "./OurImpact";
import { Helmet } from 'react-helmet-async';


const Home = () => {

  return (
    <div>
      <Helmet>
        <title>Help The Hunger/Home</title>
      </Helmet>

      <Banner></Banner>
      <Features></Features>
      <OurImpact></OurImpact>
      <About></About>
    </div>
  );
};

export default Home;