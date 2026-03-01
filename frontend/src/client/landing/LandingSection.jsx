import LandingCard from "./LandingCard";
import BackgroundImage from "./BackgroundImage";
import ScrollDownButton from "./ScrollDownButton";
import "./landing.css";

export default function LandingSection() {
  return (
    <section className="landing-section">
      <BackgroundImage />
      <div className="landing-text-backdrop" />
      <div className="landing-overlay">
        <LandingCard />
      </div>
      <ScrollDownButton />
    </section>
  );
}
