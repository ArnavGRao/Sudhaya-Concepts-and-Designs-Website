import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Designs",
  "Fabrications",
  "Food Carts",
  "Food Vans",
  "Food Stalls",
];

export default function TransitionText({ className }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1) % TEXTS.length),
      1500,
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h3 className={className}>
      High-Quality, Custom-Made
      <br />
      <TextTransition springConfig={presets.stiff} inline={true}>
        {TEXTS[index]}
      </TextTransition>
    </h3>
  );
}
