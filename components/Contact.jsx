import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-6 py-14 gap-4 animate-fade-in-up">
      <div>
        <h2 className="head_text text-center sm:text-left mb-5  ">
          <span className="red_gradient">Let's Connect</span>
        </h2>
        <div>
          <p className="desc text-justify mb-4 md:mr-5 ">
            I&apos;m currently looking for new opportunities my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="flex flex-row gap-4">
            <Link href="https://github.com/AbdullahSaeed1211" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/abdullah-saeed1211/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-Black text-lg block mb-2 font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-Black block text-lg mb-2 font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just try saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-Black block text-lg mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-white red_gradient text-lg hover:bg-gradient-to-r from-red-700 to-red-600 text-transparent hover:text-red-700 font-medium py-3 px-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 border border-red-800 hover:border-red-600 shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
