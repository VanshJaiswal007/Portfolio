import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://messenger-jet-six.vercel.app/">
              <img src="/images/project1.png" alt="Messenger app" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                Now connecting with others has become simple with the messenger
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with NextJs , React , TailwindCss & NodeJs for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://chromewebstore.google.com/detail/tab-manager-pro/fbhfepfmpanemfbinlndjbiggidfkgdf?utm_source=ext_app_menu">
                <img
                  src="/images/project2.png"
                  alt="Tab Manager"
                  />
                  </a>
              </div>
              <h2>Tab Manager Pro - Google chrome Extension</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://hotel-booking-delta-seven.vercel.app/">
                <img src="/images/project3.png" alt="Hotel Booking App" />
                </a>
              </div>
              <h2>VJ booking - A hotel booking platform</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
