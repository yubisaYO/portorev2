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
    <div className="w-full min-h-screen max-w-screen-xl mx-auto flex gap-20 bg-indigo-500 px-4 py-5 rounded-3xl shadow-xl ">
      <div className="p-4 w-full min-h-full mx-auto flex flex-col justify-evenly items-center rounded-lg bg-blue-50 lg:flex-row lg:py-0 lg:pl-0 shadow-lg">
        <div className="w-full lg:w-1/4 lg:flex lg:min-h-full lg:border-solid lg:border-2 lg:border-r-gray-500 lg:border-y-black">
          <h1 className=" hidden md:block md:text-4xl md:mb-4 lg:hidden text-center font-bold">
            My Contact Info
          </h1>
          <h1
            style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
            className="hidden lg:block  text-3xl text-center font-bold px-2 text-white bg-neutral-600"
          >
            My <strong className="text-indigo-400">Contact</strong> Info
          </h1>
          <ul className="w-full linkProfile flex lg:flex-col justify-evenly items-center">
            <li>
              <a href="https://wa.link/210nhu">
                <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
              </a>
              <span>+62 877-8515-0006</span>
            </li>
            <li>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXQFdvqBDhzvVKshvvKBNBBWmfLBTmLVbkTWrRBJVhNLRJPznKBcJpzLmLBwjSgvdncjB">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </a>

              <span>Charles.liu56@gmail.com</span>
            </li>
            <li>
              <a href="https://www.google.com/maps/place/Jl.+Vikamas+Raya,+RW.5,+Kapuk+Muara,+Kec.+Penjaringan,+Jkt+Utara,+Daerah+Khusus+Ibukota+Jakarta+14460/@-6.1325964,106.7685076,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6a1d81fd917367:0x35770352da3eec01!8m2!3d-6.1326017!4d106.7710825!16s%2Fg%2F1hm1x8qfy?entry=ttu">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
              </a>

              <span>Vikamas 1 blok bb no 12 b</span>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/charles-liu-75a5b2277/">
                <i className="bx bxl-linkedin text-black icon"></i>
              </a>

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
              <a href="https://github.com/yubisaYO?tab=repositories">
                <i className="bx bxl-github text-black icon"></i>
              </a>
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

        <div className="w-full lg:w-3/4 lg:min-h-full lg:px-5 md:py-3 lg:py-10 lg:flex lg:flex-col lg:gap-10">
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-4 lg:mb-0 lg:3xl text-center font-bold md:hidden lg:block">
            Feel Free to Contact Me 😁
          </h2>
          <form
            action=""
            className="flex flex-col gap-5 w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Name"
              className="dataForm"
              name="user_name"
            />
            <input
              type="text"
              placeholder="Subject"
              className="dataForm"
              name="user_subject"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="dataForm"
            />
            <textarea
              name="message"
              id=""
              cols="25"
              rows="10"
              placeholder="Message"
              className="txtArea w-full bg-blue-50 p-2"
              style={{ border: "2px solid grey" }}
            ></textarea>

            <button
              className="bg-blue-400 mx-auto px-8 py-4 w-fit rounded-lg shadow-md text-white font-bold text-xl lg:mt-auto lg:mx-0"
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
