"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { AiOutlineLinkedin, AiOutlineDownload } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-3 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/myHeadshot.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Jamal!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-gray-500">
              Senior Software Engineer{" "}
            </span>
            based in Dallas, TX. Working towards creating software that makes
            life easier and more meaningful for everyone.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/jamal-shoubaki/"
                rel="noreferrer"
                target="_blank"
                className="flex items-center justify-center w-14 h-14 rounded-xl bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <AiOutlineLinkedin size={28} className="text-white" />
              </a>
              <a
                href="https://github.com/JamShou"
                rel="noreferrer"
                target="_blank"
                className="flex items-center justify-center w-14 h-14 rounded-xl bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <BsGithub size={28} className="text-white" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="experience"
                className="px-8 py-4 text-lg font-semibold text-white bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Experience
              </Link>
              <Link
                to="projects"
                className="px-8 py-4 text-lg font-semibold text-white bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
              <a
                href="/Resume.pdf"
                download
                className="flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Resume</span>
                <AiOutlineDownload className="ml-3" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
