"use client";

import { useState, useEffect } from "react";
import projectsData from "../data/projects.json";
import Image from "next/image";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                jrKitt
              </div>
              <span className="text-xl">😸</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                About
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-folder"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h4.172a2 2 0 0 1 2 2l-.54.87a1 1 0 0 1-.94.63H1.48a1 1 0 0 1-.94-.63zM2.5 4a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11z" />
                </svg>
                Projects
              </a>
              <a
                href="/service"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gear"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>
                Services
              </a>
              <a
                href="#blog"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-journal-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg>
                Blog
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chat-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                </svg>
                Contact
              </a>
              <a
                href="https://webring.wonderful.software#jrkitt.com"
                title="วงแหวนเว็บ"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm font-medium"
              >
                <Image
                  alt="วงแหวนเว็บ"
                  width="32"
                  height="32"
                  src="https://webring.wonderful.software/webring.black.svg"
                />
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 bg-gray-600 rounded transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-gray-600 rounded transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-gray-600 rounded transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-100 bg-white/95 backdrop-blur-lg rounded-lg mx-4 shadow-lg">
              <div className="flex flex-col space-y-4 px-4">
                <a
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-200 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  About
                </a>
                <a
                  href="#projects"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-200 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-folder"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h4.172a2 2 0 0 1 2 2l-.54.87a1 1 0 0 1-.94.63H1.48a1 1 0 0 1-.94-.63zM2.5 4a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11z" />
                  </svg>
                  Projects
                </a>
                <a
                  href="/service"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-200 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                  </svg>
                  Services
                </a>
                <a
                  href="#blog"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-200 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-journal-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                  </svg>
                  Blog
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-200 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-chat-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                  </svg>
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section
        id="about"
        className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-navy-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div>
                    <h1 className="text-xl font-medium text-blue-100 mb-1">
                      Hi, I&apos;m Kittichai Raksawong
                    </h1>
                    <div className="text-sm text-blue-300 font-medium">
                      @jrKitt • Full Stack Developer
                    </div>
                  </div>
                </div>

                <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Kittichai
                  <span className="block bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                    Raksawong
                  </span>
                </h2>

                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  Junior Full Stack Developer at{" "}
                  <span className="font-semibold text-blue-300">APSTH</span> &
                  Web Developer at{" "}
                  <span className="font-semibold text-blue-200">
                    Student Union KKU
                  </span>
                  . Passionate about building accessible, user-friendly
                  applications with modern web technologies.
                </p>

                <div className="flex items-center gap-4 text-sm text-blue-200">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt text-blue-300"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    Khon Kaen, Thailand
                  </div>
                  <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Available for opportunities
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:contact@jrkitt.dev"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 border border-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.8V5.383zm-.034 7.434-5.482-3.29L8 9.583l-.484-.056-5.482 3.29A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.183zM1 11.8l4.708-2.592L1 5.383V11.8z" />
                  </svg>
                  Get in touch
                </a>
                <a
                  href="https://github.com/jrKitt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 border-2 border-blue-400 text-blue-100 px-6 py-3 rounded-full font-medium hover:bg-white/20 hover:shadow-md transition-all duration-200 backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  View GitHub
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Decorative background elements */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-3xl opacity-40"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-700/30 to-blue-900/30 rounded-3xl opacity-40"></div>

                {/* Main image container */}
                <div className="relative w-full h-full bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl overflow-hidden shadow-2xl border border-blue-600">
                  <Image
                    src="/img.JPG"
                    alt="Kittichai Raksawong profile"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 320px, 384px"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>

                  {/* Status badge */}
                  <div className="absolute top-4 left-4 bg-blue-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-blue-600">
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-100">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">524+</div>
              <div className="text-sm text-gray-600">
                Contributions this year
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">39+</div>
              <div className="text-sm text-gray-600">Open source projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-sm text-gray-600">Years of experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies I work with
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building modern applications with cutting-edge tools and
              frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    className="bi bi-display"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Frontend
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">React & Next.js</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium">TypeScript</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm font-medium">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">Astro.js</span>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    className="bi bi-server"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z" />
                    <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z" />
                    <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.317-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Backend</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Node.js</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <span className="text-sm font-medium">Express.js</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm font-medium">Python & Django</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-sm font-medium">GraphQL</span>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-purple-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    className="bi bi-database"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.318 2.687C6.234 1.665 8.088 1.146 10 1.146s3.766.519 5.682 1.541c.853.454 1.318.98 1.318 1.49 0 .51-.465 1.036-1.318 1.49C13.766 6.188 11.912 6.707 10 6.707s-3.766-.519-5.682-1.541C3.465 4.712 3 4.186 3 3.676c0-.51.465-1.036 1.318-1.49z" />
                    <path d="M3 7.234v3.113c0 .51.465 1.036 1.318 1.49C6.234 12.858 8.088 13.377 10 13.377s3.766-.519 5.682-1.541c.853-.454 1.318-.98 1.318-1.49V7.234a6.56 6.56 0 0 1-1.318.82C13.766 8.575 11.912 9.094 10 9.094s-3.766-.519-5.682-1.54A6.56 6.56 0 0 1 3 7.234z" />
                    <path d="M3 10.76v2.457c0 .51.465 1.036 1.318 1.49C6.234 15.728 8.088 16.247 10 16.247s3.766-.519 5.682-1.541c.853-.454 1.318-.98 1.318-1.49V10.76a6.56 6.56 0 0 1-1.318.82c-1.916 1.021-3.77 1.54-5.682 1.54s-3.766-.519-5.682-1.54A6.56 6.56 0 0 1 3 10.76z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Database
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">MongoDB</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">MySQL</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium">Firebase</span>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-orange-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    className="bi bi-tools"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293L2.089 6.5l1.414 1.414L5.207 6.21a1 1 0 0 1 .293-.207h.07a1 1 0 0 0 .419-.815L9 3 8 2 4.5 5.5 1 0z" />
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM14 12h-3v-1h3v1z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Tools & Cloud
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Docker</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">AWS</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  <span className="text-sm font-medium">Vercel</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-12 text-gray-900">
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <div className="aspect-video rounded-lg mb-4 relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={project.id === "e-ticket-smocp"}
                    />
                  ) : (
                    <div
                      className={`bg-gradient-to-br ${project.gradient} flex items-center justify-center relative h-full`}
                    >
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 text-center text-white">
                        <div className="text-4xl mb-2">
                          {project.fallbackIcon}
                        </div>
                        <div className="text-sm font-medium">
                          {project.subtitle}
                        </div>
                        <div className="text-xs opacity-80">
                          {project.title}
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    className={`absolute top-2 right-2 ${project.badge.color} ${
                      project.badge.textColor || "text-white"
                    } text-xs px-2 py-1 rounded-full`}
                  >
                    {project.badge.text}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-700 mb-2">
                    Key Features:
                  </div>
                  <div className="space-y-1 text-xs text-gray-600">
                    {project.features.map((feature, index) => (
                      <div key={index}>• {feature}</div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Source
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">บล็อก</h3>
            <p className="text-lg text-gray-600">
              เรื่องราวการเขียนโค้ด และประสบการณ์ในการพัฒนาเว็บ
            </p>
          </div>

          <ul className="space-y-8">
            <li>
              <article className="group cursor-pointer">
                <a
                  href="/blog/smocp-3-days"
                  className="block hover:bg-gray-50 -mx-4 px-4 py-4 rounded-lg transition-colors duration-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2 transition-colors duration-200">
                        สร้างเว็บ SMOCP ใน 3 วัน
                      </h2>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        ตอนแรกกะจะไม่ได้ทำ แต่พอเห็นพี่ๆในห้องนั่งวาด Flow
                        กันก็สนใจ เลยได้โอกาสเข้าร่วมทำเว็บ e-commerce สำหรับสโม
                        วิทยาลัยคอมพิวเตอร์ภายใน 3 วัน
                        พร้อมเรียนรู้เครื่องมือใหม่ๆ อย่าง Google Script...
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <time>14 มิถุนายน 2025</time>
                        <span>•</span>
                        <span>อ่าน 5 นาที</span>
                        <span>•</span>
                        <span className="text-blue-600">
                          Express.js, Bootstrap, Google Script
                        </span>
                      </div>
                    </div>
                    <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L12.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </article>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gray-900">
            Let&apos;s work together
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I&apos;m currently available for freelance projects and full-time
            opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:contact@jrkitt.dev"
              className="contact-link flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.8V5.383zm-.034 7.434-5.482-3.29L8 9.583l-.484-.056-5.482 3.29A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.183zM1 11.8l4.708-2.592L1 5.383V11.8z" />
              </svg>
              Email
            </a>
            <a
              href="https://github.com/jrKitt"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-secondary flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jrKitt"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-secondary flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.71-.521-1.248-1.342-1.248-.821 0-1.358.538-1.358 1.248 0 .694.52 1.248 1.327 1.248h.015zm4.908 8.212h2.4V9.359c0-.216.016-.432.08-.586.176-.432.577-.88 1.25-.88.881 0 1.234.664 1.234 1.635v4.866h2.4V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.19h.03V6.169h-2.4c.03.7 0 7.225 0 7.225z" />
              </svg>
              LinkedIn
            </a>
          </div>

          <div className="text-sm text-gray-500">
            📍 Khon Kaen, Thailand &bull; UTC+7 &bull;{" "}
            {currentTime.toLocaleString("th-TH", {
              timeZone: "Asia/Bangkok",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
          <p>© 2025 Kittichai Raksawong (jrKitt) • Built with Love</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with ❤️{" "}
            <a href="www.jrKitt.com" className="text-teal-500">
              jrKitt
            </a>
          </p>
        </div>
      </footer>

      <style jsx>{`
        .contact-link {
          @apply inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200;
        }

        .contact-link-secondary {
          @apply inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-gray-300 hover:shadow-md transition-all duration-200;
        }

        .project-card {
          @apply bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
