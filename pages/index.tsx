import Header from "../src/components/Header";
import Home from "../src/components/Home";
import AboutUs from "../src/components/AboutUs";
import Blog from "../src/components/Blog";
import OurClients from "../src/components/OurClients";
import Contact from "../src/components/Contact";

export default function App() {
  return (
    <div className="bg-[#1E1E1E] font-montserrat">
      <Header />
      <Home />
      <AboutUs />
      <Blog />
      <OurClients />
      <Contact />
    </div>
  )
}