import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import MiniHero from "./MiniHero";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ContactContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex-col full-width items-centered mb100">
      <MiniHero title="Contact Us" />
      <div
        className={
          isMobile
            ? "section flex-col full-width ph30"
            : "section flex-row less-width"
        }
      >
        <div
          data-aos="fade-right"
          className={isMobile ? "flex-col mb30" : "flex-col child-3 pr100"}
        >
          <p className="weight-bold decoration-underlined mb20">
            REACH OUT TO US
          </p>
          <h1 className="heading weight-black less-width size-bigger mb30">
            We are here to listen.
          </h1>
          <p className="normal-text-color mb30">
            At Healing Hands Staffing, we are dedicated to providing exceptional
            healthcare staffing solutions tailored to meet your specific needs.
            Whether you are a healthcare facility in need of qualified
            professionals or a healthcare worker seeking new opportunities, we
            are here to help. Reach out to us using the information below, and
            our team will be delighted to assist you.
          </p>

          <h2
            style={{ fontSize: "1.5rem" }}
            className="weight-bold title-text-color mb10"
          >
            Phone:
          </h2>
          <p className="normal-text-color mb30">
            Feel free to call us at (123) 456-7890. Our office hours are Monday
            to Friday, 9:00 AM to 5:00 PM.
          </p>

          <h2
            style={{ fontSize: "1.5rem" }}
            className="weight-bold title-text-color mb10"
          >
            Email:
          </h2>
          <p className="normal-text-color">
            For general inquiries, please email us at
            info@healinghandsstaffing.com. We strive to respond to all emails
            within 24 hours.
          </p>
        </div>

        <div data-aos="fade-left" className="contact-form flex-col child-2">
          <h2
            style={{ fontSize: "1.5rem" }}
            className="weight-bold title-text-color mb30"
          >
            Send us a meassage.
          </h2>
          <form action="/submit-form" method="post">
            <div className="flex-col mb30">
              <div className="flex-col">
                <label className="normal-text-color" for="name">
                  Name:
                </label>
              </div>
              <input
                className="full-width"
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="flex-col mb30">
              <div className="flex-col">
                <label className="normal-text-color" for="email">
                  Email:
                </label>
              </div>
              <input
                className="full-width"
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="flex-col mb30">
              <div className="flex-col">
                <label className="normal-text-color" for="subject">
                  Subject:
                </label>
              </div>
              <input
                className="full-width"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject or topic"
                required
              />
            </div>

            <div className="flex-col mb30">
              <div className="flex-col">
                <label className="normal-text-color" for="message">
                  Message:
                </label>
              </div>
              <textarea
                className="full-width"
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <input type="submit" value="Submit" className="submit-button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
