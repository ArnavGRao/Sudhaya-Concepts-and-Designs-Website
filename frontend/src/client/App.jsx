import LandingSection from "./landing/LandingSection";
import Showcase from "./showcase/Showcase";
import ContactUsSection from "./contactUs/ContactUsSection";

function App() {
  return (
    <div className="page-scroll-root">
      <LandingSection />
      <Showcase />
      <ContactUsSection />
    </div>
  );
}
export default App;
