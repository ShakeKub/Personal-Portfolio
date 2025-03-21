import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-zinc-950 to-transparent"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl border-4 border-zinc-700 shadow-xl transform transition-transform hover:scale-105 duration-500">
              {/* Replace placeholder with actual image */}
              <Image
                src="/profile.jpg" // Path to your image in the public folder
                alt="Jakub Ch."
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-3/5">
            <div className="space-y-6">
              <p className="text-zinc-400 text-lg leading-relaxed">
                Hello! I'm <span className="text-white font-medium">Jakub Ch.</span>, a passionate Python Developer specializing in Discord bot development, with over 3 years 
                of experience in building advanced, feature-rich bots. My journey in technology began when I discovered my passion for automation and creating interactive 
                experiences on Discord through code.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
              My primary focus is on developing, optimizing, and maintaining Discord bots, ensuring they are efficient, scalable, and user-friendly. I have deep experience with Python,
               Discord API, and related frameworks. Besides bot development, I also work with web technologies like JavaScript/TypeScript, React, and Node.js to create modern web applications, 
               though my main expertise lies in the Discord ecosystem.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
              I'm dedicated to writing clean, maintainable code and building solutions that enhance user engagement and automation within Discord communities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-zinc-800">
              <div>
                <h3 className="text-white font-semibold text-xl mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Education
                </h3>
                <ul className="space-y-4">
                  <li className="text-zinc-400">
                    <span className="text-white font-medium">Graduation - Information Technology</span>
                    <br />
                    <span className="text-sm">VOŠ obalové techniky a Střední škola, Štětí, 2022-2026</span>
                  </li>
                  <li className="text-zinc-400">
                    <span className="text-white font-medium">Cisco Certification</span>
                    <br />
                    <span className="text-sm">IT Essentials: PC Hardware and Software, 2024</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-xl mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Experience
                </h3>
                <ul className="space-y-4">
                  <li className="text-zinc-400">
                    <span className="text-white font-medium">Discord bot development</span>
                    <br />
                    <span className="text-sm">Managing multiple bots for discord servers <br/> with thousands users, 2022-2025</span>
                  </li>
                  <li className="text-zinc-400">
                    <span className="text-white font-medium"></span>
                    <br />
                    <span className="text-sm"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}