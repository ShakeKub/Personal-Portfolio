import React from 'react';
import Link from 'next/link'; // Use Next.js Link
import SocialLinks from './SocialLinks';
import AnimatedBackground from './AnimatedBackground';

interface HeroProps {
  name: string;
}

export default function Hero({ name }: HeroProps) {
  return (
    <section className="relative flex items-center justify-center h-screen w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 z-0"></div>

      {/* Enhanced grid pattern layers */}
      <div className="absolute inset-0 bg-[url('/hero-grid.svg')] bg-center z-0 opacity-40"></div>

      {/* Animated background with particles */}
      <AnimatedBackground />

      {/* Animated glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-teal-500/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>

      {/* Grid overlay with moving gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/80 via-zinc-900/40 to-zinc-900/80 z-1 animate-gradient-shift"></div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-12 mx-auto text-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 animate-fade-up animate-duration-1000 drop-shadow-lg">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto animate-fade-up animate-delay-300 animate-duration-1000">
          Full-Stack Developer & Designer
        </p>

        <div className="mt-12 flex justify-center gap-4 animate-fade-up animate-delay-500 animate-duration-1000">
          <Link
            href="/projects"
            className="group px-6 py-3 bg-white text-zinc-900 rounded-md font-medium hover:bg-zinc-200 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            <span className="flex items-center">
              View Projects
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
          <button className="px-6 py-3 bg-transparent border border-zinc-700 text-white rounded-md font-medium hover:bg-zinc-800/50 transition-colors hover:border-zinc-500">
            Contact Me
          </button>
        </div>

        <div className="animate-fade-up animate-delay-700 animate-duration-1000">
          <SocialLinks />
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-zinc-500 animate-bounce z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
}