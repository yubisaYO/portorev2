import React, { useRef, useState } from "react";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./project.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Project = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef(null);
  // Fungsi untuk menampilkan atau menyembunyikan menu dengan efek fade
  const mouseIn = () => {
    setIsHovered(true);
  };

  const mouseOut = () => {
    menuRef.current.classList.add("animate__fadeOutDown");
    setTimeout(() => {
      setIsHovered(false);
      menuRef.current.classList.remove("animate__fadeOutDown");
    }, 300); // Ubah angka 300 sesuai dengan durasi animasi CSS (ms)
  };
  return (
    <div
      className="relative rounded-lg bg-white"
      onMouseEnter={mouseIn}
      onMouseLeave={mouseOut}
      style={{ width: "300px", minHeight: "400px", border: "3px solid white" }}
    >
      <img src={data.img} alt="" className="w-full h-full object-fill" />

      {isHovered ? (
        <div
          className="absolute animate__animated animate__fadeInUp top-1/4 flex flex-col parent h-3/4 w-full"
          ref={menuRef}
        >
          <h1 className="rounded-t-lg font-bold text-white bg-indigo-400 p-2 projectTitle">
            {data.title}
          </h1>
          <div className="flex flex-col gap-2 p-2 h-full overflow-y-hidden bg-white">
            <p className="text-neutral-400 text-sm w-full break-all h-4/5 overflow-y-auto projectDesc text-justify">
              {data.description}
            </p>
            <div className="h-1/5 relative overflow-y-visible">
              <Swiper
                className="text-black gap-3 w-full h-full overflow-y-visible"
                spaceBetween={5}
                slidesPerView={3}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
              >
                {data.using.map((item) => {
                  return (
                    <SwiperSlide
                      key={item.id}
                      className="border-2 border-indigo-400 rounded-2xl px-2 py-1 text-sm text-black flex items-center justify-center h-4/5"
                    >
                      {item}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="border-2 border-t-neutral-400 test flex mt-auto bg-white">
            <a
              className="flex-1 p-2 border-r-2 border-slate-200"
              href={data.git}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faCode} className="text-xs" />
              <span>Code</span>
            </a>

            <a
              className="flex-1 p-2"
              href={data.view}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEye} className="text-xs" />
              <span>View</span>
            </a>
          </div>
        </div>
      ) : (
        <h1 className="text-white absolute bottom-0 left-0 right-0 mx-auto animate__animated animate__fadeIn bg-indigo-400 p-4 font-bold rounded-md ">
          {data.title}
        </h1>
      )}
    </div>
  );
};

export default Project;
