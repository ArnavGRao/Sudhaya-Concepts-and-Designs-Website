import { useState, useEffect } from "react";

import "./showcase.css";
import ImageCard from "./components/ImageCard";

export default function DisplaySection({ displayName, imageList }) {
  const [imageIdx, setImageIdx] = useState(0);
  const [numberShown, setNumberShown] = useState(3);

  useEffect(() => {
    const updateNumberShown = () => {
      if (window.innerWidth < 768) {
        setNumberShown(1);
      } else if (window.innerWidth < 1024) {
        setNumberShown(2);
      } else {
        setNumberShown(4);
      }
    };

    updateNumberShown();
    window.addEventListener("resize", updateNumberShown);
    return () => window.removeEventListener("resize", updateNumberShown);
  }, []);

  // Use the lesser of numberShown or available images. Ternary operation is to ensure 4 placeholder images when image is loading.
  const imagesToShow = imageList.length
    ? Math.min(numberShown, imageList.length)
    : 4;

  const isLeftDisabled = imageIdx === 0;
  const isRightDisabled = imageIdx >= imageList.length - imagesToShow;

  const changeIdx = (count) => {
    if ((count === -1 && isLeftDisabled) || (count === 1 && isRightDisabled))
      return;

    setImageIdx(imageIdx + count);
  };

  return (
    <div className="display-section">
      <h2 className="display-section-title">{displayName}</h2>
      <div className="display-section-controls">
        <button
          type="button"
          onClick={() => changeIdx(-1)}
          disabled={isLeftDisabled}
          className={`display-nav-btn ${
            isLeftDisabled
              ? "display-nav-btn-disabled"
              : "display-nav-btn-active"
          }`}
        >
          <i className="fa-solid fa-angles-left"></i>
        </button>

        <div className="display-section-images">
          {Array.from({ length: imagesToShow }).map((_, i) => (
            <ImageCard key={imageIdx + i} url={imageList[imageIdx + i]} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => changeIdx(1)}
          disabled={isRightDisabled}
          className={`display-nav-btn ${
            isRightDisabled
              ? "display-nav-btn-disabled"
              : "display-nav-btn-active"
          }`}
        >
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
}
