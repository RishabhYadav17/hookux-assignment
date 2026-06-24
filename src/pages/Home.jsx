import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";

import Footer from "../components/Footer/Footer";


function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
export default Home;