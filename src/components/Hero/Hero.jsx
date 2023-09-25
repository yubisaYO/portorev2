import React, { useEffect } from "react";
import "./hero.css";
import Typed from "typed.js";

const Hero = () => {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "Software Engineer",
        "Full-Stack Developer",
        "Binusian 2025",
        "CS Student",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className="h-full w-full hero-container"
        style={{ maxWidth: "1250px" }}
      >
        <div
          className="
       rounded-full overflow-x-hidden border-2 border-black heroImg"
        >
          <img
            src="./hero-3.png"
            alt=""
            className="w-full h-full object-cover bg-blue-500"
          />
        </div>
        {/* 
      <div className="hidden 2xl:absolute -bottom-1/4 w-big h-big rounded-full -z-5 bg-gradient-to-t from-bg-whtie to bg-blue-200 left-16"></div> */}

        {/* animated text occupation */}
        <div className="font-semibold animate__animated animate__fadeInDown desc">
          <h1 className="name">Hi, I&rsquo;m Charles</h1>

          <div className="flex items-center">
            <span className="text-indigo-400 job" ref={el}></span>
          </div>
          <ul className="flex items-center social-media">
            <li className="rounded-full bg-black p-2 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/charles-liu-75a5b2277/"
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin text-white"></i>
              </a>
            </li>
            <li className="rounded-full bg-black p-2 cursor-pointer flex items-center">
              <a
                href="https://github.com/yubisaYO"
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-github text-white"></i>
              </a>
            </li>
            <li className="rounded-full bg-black p-2 cursor-pointer">
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXQFdvqBDhzvVKshvvKBNBBWmfLBTmLVbkTWrRBJVhNLRJPznKBcJpzLmLBwjSgvdncjB"
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-gmail text-white"></i>
              </a>
            </li>
          </ul>
          <button className="bg-indigo-400 w-fit rounded-lg shadow-md font-bold text-white mt-auto cv">
            <a
              href="https://binusianorg-my.sharepoint.com/personal/charles008_binus_ac_id/_layouts/15/guestaccess.aspx?share=EYMss9yenVtJodM1hcpQfjQBkvsriQ69lpsSCJDsKiWwNg&e=G4FlNB"
              target="_blank"
              rel="noreferrer"
            >
              See My CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
