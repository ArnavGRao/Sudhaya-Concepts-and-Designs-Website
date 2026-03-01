import "./landing.css";

import TransitionText from "./components/TransitionText.jsx";
import Logo from "./components/Logo.jsx";
import CompanyName from "./components/CompanyName.jsx";

export default function LandingCard() {
  return (
    <div className="landingcard">
      <div className="flex-1 flex flex-col justify-center pb-16 items-center md:items-end">
        <Logo className="mb-4 w-40 h-auto sm:w-52 md:w-60" />
        <CompanyName className="mb-2 text-4xl md:text-5xl font-extrabold leading-tight max-w-[17ch]" />
        <TransitionText className="mt-4 text-2xl md:text-3xl font-medium" />
      </div>
    </div>
  );
}
