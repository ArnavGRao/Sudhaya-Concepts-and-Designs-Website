import { useState } from "react";
import { createPortal } from "react-dom";

import "./locationimage.css";

const MAPS_URL =
  "https://www.google.com/maps/place/Sudhaya+Concepts+and+Designs/@13.0128403,77.4944954,15.83z/data=!4m6!3m5!1s0x3bae3d08ffa5469d:0xb76bc4e1038b7e83!8m2!3d13.0120469!4d77.4985621!16s%2Fg%2F11wv2yyzlt?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D";

export default function LocationImage({ src }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  return (
    <>
      <div className="location-image-wrapper" onClick={openLightbox}>
        <img src={src} alt="Factory location" />
      </div>

      {isOpen &&
        createPortal(
          <div className="location-lightbox-overlay" onClick={closeLightbox}>
            <img
              src={src}
              className="location-lightbox-image"
              alt="Factory location"
              onClick={(e) => e.stopPropagation()}
            />

            <div
              className="location-lightbox-actions"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="location-maps-btn"
              >
                <i className="fa-solid fa-map-location-dot" />
                Open in Google Maps
              </a>

              <button className="location-close-btn" onClick={closeLightbox}>
                Close
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
