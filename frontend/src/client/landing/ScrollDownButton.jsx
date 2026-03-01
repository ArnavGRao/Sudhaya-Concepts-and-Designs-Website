import "./landing.css";

function scrollPastLanding() {
  const root = document.querySelector(".page-scroll-root");
  if (!root) return;

  const duration = 1200;
  const start = root.scrollTop;
  const target = start + window.innerHeight;
  const startTime = performance.now();

  function ease(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    root.scrollTop = start + (target - start) * ease(progress);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function ScrollDownButton() {
  return (
    <button
      onClick={scrollPastLanding}
      aria-label="Scroll down"
      className="
        absolute bottom-10 left-10
        z-20
        flex items-center justify-center
        w-12 h-12
        rounded-full
        bg-blue-950 hover:bg-blue-900
        border border-blue-800
        text-white
        transition-colors duration-200
        cursor-pointer
        animate-bounce-down
      "
    >
      <i className="fa-solid fa-chevron-down text-xl" />
    </button>
  );
}
