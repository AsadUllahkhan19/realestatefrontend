// import {
//   Brands,
//   Counter,
//   Featured,
//   Projects,
//   Services,
//   Testimonial,
// } from "../components/common/page-componets";
import { useContext } from "react";
import FeaturedSection from "../components/common/FeaturedSection";
import {
  Filters,
  Hero,
  Explore,
  OurAgents,
  Testimonials,
} from "../components/home/home-1";
import Explore2 from "../components/home/home-1/Explore2";
import Explore3 from "../components/home/home-1/Explore3";
import { Store } from "../context/store";
import AdvancedSearch from "../components/common/AdvancedSearch";

const Home = () => {
  const { isLoading, featuredProperties } = useContext(Store);

  return (
    <div>
      <Hero />
      <Filters />
      <FeaturedSection />
      <Explore3 />
      <Explore2 />
      <OurAgents />
      <Testimonials />
    </div>
  );
};

export default Home;
