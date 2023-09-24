import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";
import {
  faPhoneVolume,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tjl1kxj",
        "template_vwreebf",
        form.current,
        "xgVnvf2bHayNqLTJu"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto flex gap-20 bg-indigo-500 px-4 py-5 rounded-3xl shadow-xl ">
      <div
        className="w-full mx-auto flex gap-5 md:gap-20 bg-white rounded-lg"
        style={{ height: "100vh", border: "1px solid black" }}
      >
        <div className="flex w-1/2">
          <div className="w-1/4 flex justify-center items-center h-full bg-indigo-400">
            <h1
              style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
              className="text-4xl font-bold text-white"
            >
              My Contact Info
            </h1>
          </div>
          <ul className="linkProfile w-3/4 flex flex-col justify-evenly px-2">
            <li>
              <FontAwesomeIcon icon={faPhoneVolume} />
              <span>+62 877-8515-0006</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Charles.liu56@gmai.com</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Vikamas 1 blok bb no 12 b</span>
            </li>
            <li>
              <i className="bx bxl-linkedin text-black"></i>
              <a
                href="https://www.linkedin.com/in/charles-liu-75a5b2277/"
                target="_blank"
                className="text-blue-700"
                rel="noreferrer"
              >
                <span>MyLinked in profile</span>
              </a>
            </li>
            <li>
              <i className="bx bxl-github text-black"></i>
              <a
                href="https://github.com/yubisaYO?tab=repositories"
                target="_blank"
                className="text-blue-700"
                rel="noreferrer"
              >
                <span>MyGithub profile</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 w-full lg:bg-red-50 pr-3">
            Feel Free to Contact Me 😁
          </h2>
          <form
            action=""
            className="flex flex-col gap-5 w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="w-1/2 info flex flex-col gap-5 md:gap-10">
              <input
                type="text"
                placeholder="Name"
                className="w-full"
                name="user_name"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full"
                name="user_subject"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="w-full"
              />
            </div>
            <textarea
              name="message"
              id=""
              cols="25"
              rows="10"
              placeholder="Message"
              className="txtArea w-full"
            ></textarea>

            <button
              className="bg-blue-400 px-8 py-4 w-fit rounded-lg shadow-md text-white font-bold text-xl"
              type="submit"
              value="Send"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
