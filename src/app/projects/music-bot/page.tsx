import React from 'react';
import Link from 'next/link';
import { SkillLogo } from '@/components/SkillLogos';
import Navbar from '@/components/Navbar';

export default function MusicBotPage() {
  const project = {
    id: 'music-bot',
    title: 'Music Discord Bot',
    date: 'November 2022',
    description: 'A Discord bot that plays high-quality music from various sources like YouTube, Spotify, and SoundCloud with advanced queue management and filters.',
    imageSrc: '/projects/music-bot.svg',
    technologies: [
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'React', color: '#61DAFB' }
    ],
    longDescription: [
      'Music Bot is a high-quality audio streaming solution for Discord that brings premium music features to any server. The bot supports multiple streaming platforms, offers rich audio customization, and provides an intuitive user experience.',
      'The project also includes a web dashboard built with React that allows users to control the bot, manage playlists, and adjust settings from outside Discord. This dual-interface approach provides flexibility for both casual and power users.',
      'What sets this Music Bot apart is its focus on audio quality and user experience. Rather than simply playing audio, the bot provides a comprehensive music experience with features like volume normalization, audio effects, and intelligent playlist management.'
    ],
    features: [
      'Multi-platform support (YouTube, Spotify, SoundCloud, etc.)',
      'Advanced queue management with shuffle, loop, and skip controls',
      'Audio filters (bass boost, nightcore, vaporwave, etc.)',
      'Playlist creation and management system',
      'Live lyrics display and song information',
      'Web dashboard for remote control and configuration',
      'DJ role system for managing permissions',
      '24/7 playback option for continuous music',
      'Song request channels and reaction controls',
      'Voice channel auto-join and leave settings'
    ],
    challenges: [
      'Handling different API requirements for various music platforms',
      'Managing audio quality while minimizing latency',
      'Implementing complex audio processing for filters',
      'Synchronizing state between Discord commands and web dashboard',
      'Handling rate limits from music platforms',
      'Creating a reliable audio streaming pipeline',
      'Supporting multiple servers with different configurations simultaneously'
    ],
    solutions: [
      'Created a unified API abstraction layer for different music sources',
      'Used efficient audio transcoding and caching techniques',
      'Implemented FFmpeg integration for real-time audio processing',
      'Developed a WebSocket system for real-time updates between platforms',
      'Implemented intelligent queue caching to reduce API calls',
      'Created a robust error handling system with fallback options',
      'Designed a scalable architecture that efficiently manages resources'
    ],
    implementation: [
      'Built on Discord.js framework with custom audio handling',
      'Developed a React-based web dashboard with responsive design',
      'Created audio processing modules using FFmpeg and Prism',
      'Implemented secure authentication between Discord and the web dashboard',
      'Designed a custom caching system to improve performance and reduce API calls',
      'Used WebSockets for real-time communication between the bot and dashboard',
      'Implemented analytics tracking to monitor usage patterns and performance metrics'
    ],
    outcome: [
      'Successfully deployed to over 200 Discord servers with 30,000+ unique users',
      'Maintained 99.8% uptime with excellent audio quality and low latency',
      'Received overwhelmingly positive feedback about audio quality and feature set',
      'Built a dedicated user community with active feature requests and bug reports',
      'Processed over 1 million song requests with minimal errors',
      'Regularly added new features based on user feedback and platform updates',
      'Created comprehensive documentation for users and server administrators'
    ]
  };

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-zinc-400 hover:text-white transition-colors"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="md:w-1/2">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>

              <div className="mb-6">
                <span className="text-zinc-500 inline-block mb-4">{project.date}</span>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center bg-zinc-800/80 rounded-full px-3 py-1">
                      <div className="mr-1.5">
                        <SkillLogo
                          skill={tech.name}
                          color={tech.color}
                          size={16}
                        />
                      </div>
                      <span className="text-xs text-zinc-400">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-zinc-400 mb-6">{project.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Sources</h3>
                  <p className="text-zinc-400 text-sm">YouTube, Spotify, SoundCloud</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Users</h3>
                  <p className="text-zinc-400 text-sm">30,000+ across 200+ servers</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Type</h3>
                  <p className="text-zinc-400 text-sm">Discord Bot + Web Dashboard</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Status</h3>
                  <p className="text-zinc-400 text-sm">Active & Regularly Updated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                {project.longDescription.map((para, index) => (
                  <p key={index} className="text-zinc-400 mb-4">{para}</p>
                ))}
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Implementation Details</h2>
                <ul className="text-zinc-400 space-y-2">
                  {project.implementation.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Outcome & Results</h2>
                <ul className="text-zinc-400 space-y-2">
                  {project.outcome.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-white mb-4">Features</h2>
                <ul className="text-zinc-400 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-white mb-4">Challenges</h2>
                <ul className="text-zinc-400 space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Solutions</h2>
                <ul className="text-zinc-400 space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Web Dashboard Preview */}
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Web Dashboard</h2>
            <p className="text-zinc-400 mb-8">
              One of the unique features of this Music Bot is its web-based control panel that allows users to manage the bot, create playlists, and control playback from outside Discord. The dashboard is built with React and communicates with the bot in real-time via WebSockets.
            </p>
            <div className="flex justify-center">
              <div className="bg-zinc-800 rounded-xl p-4 max-w-2xl w-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Music Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 mb-4">
                  <div className="h-8 bg-zinc-800 rounded-md mb-4"></div>
                  <div className="flex gap-4">
                    <div className="w-1/3 h-24 bg-zinc-800 rounded-md"></div>
                    <div className="w-2/3">
                      <div className="h-6 bg-zinc-800 rounded-md mb-2 w-2/3"></div>
                      <div className="h-4 bg-zinc-800 rounded-md mb-2 w-1/2"></div>
                      <div className="h-8 bg-zinc-800 rounded-md mb-2"></div>
                      <div className="flex gap-2">
                        <div className="h-6 w-6 bg-blue-500/30 rounded-full"></div>
                        <div className="h-6 w-6 bg-green-500/30 rounded-full"></div>
                        <div className="h-6 w-6 bg-purple-500/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="h-16 bg-zinc-800 rounded-md"></div>
                  <div className="h-16 bg-zinc-800 rounded-md"></div>
                  <div className="h-16 bg-zinc-800 rounded-md"></div>
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-blue-400 border-b-4 border-b-transparent"></div>
                  </div>
                  <div className="h-10 w-10 bg-zinc-800 rounded-full"></div>
                  <div className="h-10 w-10 bg-zinc-800 rounded-full"></div>
                  <div className="h-10 w-10 bg-zinc-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation to other projects */}
          <div className="border-t border-zinc-800 pt-8">
            <h3 className="text-xl font-bold text-white mb-6">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/projects/gambling-bot"
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 flex items-center hover:border-zinc-700 transition-all"
              >
                <div className="mr-4 w-12 h-12 relative">
                  <img
                    src="/projects/gambling-bot.svg"
                    alt="Gambling Bot"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">Gambling Discord Bot</h4>
                  <p className="text-zinc-500 text-sm">Check out this project</p>
                </div>
                <svg
                  className="ml-auto w-5 h-5 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/projects/moderation-bot"
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 flex items-center hover:border-zinc-700 transition-all"
              >
                <div className="mr-4 w-12 h-12 relative">
                  <img
                    src="/projects/moderation-bot.svg"
                    alt="Moderation Bot"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">Moderation Discord Bot</h4>
                  <p className="text-zinc-500 text-sm">Check out this project</p>
                </div>
                <svg
                  className="ml-auto w-5 h-5 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
