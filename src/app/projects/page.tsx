import React from 'react';
import Link from 'next/link';
import { SkillLogo } from '@/components/SkillLogos';
import Navbar from '@/components/Navbar';

interface ProjectTech {
  name: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
  technologies: ProjectTech[];
  url: string;
  longDescription?: string[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
}

export default function ProjectsPage() {
  // Projects data with more detailed information
  const projects: Project[] = [
    {
      id: 'gambling-bot',
      title: 'Gambling Discord Bot',
      date: 'March 2023',
      description: 'A feature-rich Discord bot that enables users to play various gambling games like blackjack, slots, and roulette with a virtual currency system.',
      imageSrc: '/projects/gambling-bot.svg',
      technologies: [
        { name: 'Python', color: '#F7DF1E' },
        { name: 'SQLite', color: '#003B57' }
      ],
      url: '/projects/gambling-bot',
      longDescription: [
        'Gambling Bot is a feature-rich Discord bot built to bring casino-style entertainment to Discord communities. The bot offers users a complete gambling experience with realistic game mechanics, an economy system, and various customization options.',
        'The project includes a sophisticated virtual currency system with daily rewards, user statistics, and an economy ecosystem that keeps users engaged while ensuring fair play and balanced gameplay.'
      ],
      features: [
        'Multiple casino games including Blackjack, Slots, Roulette, Poker, and Dice',
        'Virtual currency system with daily rewards and bonuses',
        'User statistics and leaderboard system',
        'Anti-cheat mechanics and fair play algorithms',
        'Customizable game settings for server administrators'
      ],
      challenges: [
        'Implementing fair random number generation for gambling games',
        'Balancing the economy to prevent inflation of virtual currency',
        'Handling high volumes of concurrent game sessions',
        'Preventing exploitation and cheating attempts'
      ],
      solutions: [
        'Used cryptographically secure random number generation',
        'Implemented economic sinks and diminishing returns on certain activities',
        'Designed an efficient game state management system using in-memory caching',
        'Created transaction logs and auditing systems to identify unusual patterns'
      ]
    },
    {
      id: 'moderation-bot',
      title: 'Moderation Discord Bot',
      date: 'January 2023',
      description: 'A comprehensive moderation bot for Discord that helps server administrators manage their communities with automated warnings, mutes, bans, and detailed logging.',
      imageSrc: '/projects/moderation-bot.svg',
      technologies: [
        { name: 'Python', color: '#F7DF1E' },
        { name: 'SQLite', color: '#003B57' }
      ],
      url: '/projects/moderation-bot',
      longDescription: [
        'Moderation Bot is a powerful Discord moderation tool designed to assist server administrators in managing communities of any size. The bot provides a complete suite of moderation features, from basic message filtering to advanced user behavior analysis and automated moderation actions.',
        'Built with scalability in mind, the bot efficiently handles large servers with thousands of users while maintaining low resource usage and providing detailed audit logs for all moderation actions.'
      ],
      features: [
        'Comprehensive moderation commands (warn, mute, kick, ban, etc.)',
        'Customizable auto-moderation system with regex pattern matching',
        'Tiered warning system with escalating consequences',
        'Detailed logging of all moderation actions and user activity',
        'Raid protection and spam detection algorithms',
        'Temporary punishment management with automatic expiration'
      ],
      challenges: [
        'Handling high message throughput in large servers',
        'Creating effective anti-spam and anti-raid detection algorithms',
        'Managing complex permission hierarchies',
        'Storing moderation history efficiently'
      ],
      solutions: [
        'Implemented efficient message queuing and processing systems',
        'Developed pattern recognition algorithms with adjustable sensitivity',
        'Created a sophisticated permission caching and validation system',
        'Designed an optimized database schema for quick lookups of user history'
      ]
    },
    {
      id: 'music-bot',
      title: 'Music Discord Bot',
      date: 'November 2022',
      description: 'A Discord bot that plays high-quality music from various sources like YouTube, Spotify, and SoundCloud with advanced queue management and filters.',
      imageSrc: '/projects/music-bot.svg',
      technologies: [
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'React', color: '#61DAFB' }
      ],
      url: '/projects/music-bot',
      longDescription: [
        'Music Bot is a high-quality audio streaming solution for Discord that brings premium music features to any server. The bot supports multiple streaming platforms, offers rich audio customization, and provides an intuitive user experience.',
        'The project also includes a web dashboard built with React that allows users to control the bot, manage playlists, and adjust settings from outside Discord.'
      ],
      features: [
        'Multi-platform support (YouTube, Spotify, SoundCloud, etc.)',
        'Advanced queue management with shuffle, loop, and skip controls',
        'Audio filters (bass boost, nightcore, vaporwave, etc.)',
        'Playlist creation and management system',
        'Live lyrics display and song information',
        'Web dashboard for remote control and configuration',
        'DJ role system for managing permissions'
      ],
      challenges: [
        'Handling different API requirements for various music platforms',
        'Managing audio quality while minimizing latency',
        'Implementing complex audio processing for filters',
        'Synchronizing state between Discord commands and web dashboard'
      ],
      solutions: [
        'Created a unified API abstraction layer for different music sources',
        'Used efficient audio transcoding and caching techniques',
        'Implemented FFmpeg integration for real-time audio processing',
        'Developed a WebSocket system for real-time updates between platforms'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">All Projects</h1>
          <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto text-center">
            Here's a collection of my recent projects. Each one represents different challenges and solutions in the world of Discord bot development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.url}
                className="bg-zinc-900/70 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all hover:shadow-xl hover:shadow-zinc-900/50 hover:-translate-y-1 duration-300 flex flex-col"
              >
                {/* Project Image */}
                <div className="relative w-full h-56 overflow-hidden bg-zinc-900">
                  <div className="relative w-full h-full">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-sm text-zinc-500">{project.date}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
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

                  {/* Description */}
                  <p className="text-zinc-400 text-sm mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* View Details Button */}
                  <div className="mt-auto">
                    <span
                      className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Details
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
