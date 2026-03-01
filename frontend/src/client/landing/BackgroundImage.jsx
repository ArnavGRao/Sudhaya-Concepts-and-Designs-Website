import "./landing.css";
import bgImage from "../../assets/background.png";

export default function BackgroundImage() {
  return (
    <img
      src={bgImage}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}
