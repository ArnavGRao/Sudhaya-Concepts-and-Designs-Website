import { useState, useRef } from "react";
import { createPortal } from "react-dom";

import "./imagecard.css";
export default function ImageCard({ url }) {
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);

  const openLightbox = () => {
    if (!url) return;
    setIsZoomed(false);
    setZoomOrigin({ x: 50, y: 50 });
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setIsZoomed(false);
  };

  const handleImageClick = (event) => {
    event.stopPropagation();

    if (!isZoomed) {
      // Calculate click position relative to image and zoom in at that point
      const rect = imageRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      setZoomOrigin({ x, y });
      setIsZoomed(true);
    } else {
      // Zoom out from the same point
      setIsZoomed(false);
    }
  };

  return (
    <>
      <article className="imagecard" onClick={openLightbox}>
        {!loaded && <div className="skeleton-sheen" />}
        {url && (
          <img
            src={url}
            className="w-full h-full object-cover"
            style={{ display: loaded ? "block" : "none" }}
            onLoad={() => setLoaded(true)}
          />
        )}
      </article>

      {isOpen &&
        createPortal(
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              ref={imageRef}
              src={url}
              className={`lightbox-image ${isZoomed ? "lightbox-image-zoomed" : ""}`}
              onClick={handleImageClick}
              style={{
                transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
              }}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
