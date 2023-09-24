import React, { useRef, useState } from "react";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      className="relative overflow-hidden rounded-lg bg-white"
      onMouseEnter={mouseIn}
      onMouseLeave={mouseOut}
      style={{ width: "300px", height: "400px", border: "3px solid white" }}
    >
      <img src={data.img} alt="" className="w-full h-full object-fill" />

      {isHovered ? (
        <div
          className="absolute animate__animated animate__fadeInUp left-0 top-1/2 h-full flex flex-col bg-white"
          ref={menuRef}
        >
          <h1 className="bg-indigo-400 p-2 rounded-t-lg font-bold text-white">
            {data.title}
          </h1>
          <div className="bg-white flex flex-col gap-2 items-start p-2">
            <p className="text-neutral-400 text-sm text-left">
              {data.description}
            </p>
            <ul className="flex justify-center text-black gap-3 flex-wrap">
              {data.using.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="border-2 border-indigo-400 rounded-2xl px-4 py-2 text-sm text-black"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border-2 border-t-neutral-400  flex mb-4 items-center h-14">
            <a
              className="w-1/2 border-2 border-r-neutral-400 h-full flex items-center justify-center cursor-pointer"
              href={data.git}
              target="_blank"
            >
              <FontAwesomeIcon icon={faCode} />
              <span>Code</span>
            </a>

            <a
              className="w-1/2 h-full flex items-center justify-center cursor-pointer"
              href={data.view}
              target="_blank"
            >
              <FontAwesomeIcon icon={faEye} />
              <span>View</span>
            </a>

            <span className="flex-1"></span>
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
