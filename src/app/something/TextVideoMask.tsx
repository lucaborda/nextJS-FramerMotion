import { useRef } from "react";
import { useEffect } from "react";

const TextVideoMask = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <div className="h-screen bg-transparent relative mt-[4rem]">
      <div ref={container} className={`relative h-[300vh] bg-[hs(0,0,6%)]`}>
        <div
          ref={stickyMask}
          id="stickyMask"
          className={`flex overflow-hidden sticky top-0 h-screen items-center content-center`}
        >
          <video
            autoPlay
            playsInline
            muted
            loop
            className="w-screen h-screen object-fit"
          >
            <source src="/medias/raven.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default TextVideoMask;
