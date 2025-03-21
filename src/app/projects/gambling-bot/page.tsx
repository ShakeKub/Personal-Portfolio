import React from 'react';
import Link from 'next/link';
import { SkillLogo } from '@/components/SkillLogos';
import Navbar from '@/components/Navbar';

export default function GamblingBotPage() {
  const project = {
    id: 'gambling-bot',
    title: 'Gambling Discord Bot',
    date: 'March 2023',
    description: 'A feature-rich Discord bot that enables users to play various gambling games like blackjack, slots, and roulette with a virtual currency system.',
    imageSrc: '/projects/gambling-bot.svg',
    technologies: [
      { name: 'Python', color: '#F7DF1E' },
      { name: 'SQLite', color: '#003B57' }
    ],
    longDescription: [
      'Gambling Bot is a feature-rich Discord bot built to bring casino-style entertainment to Discord communities. The bot offers users a complete gambling experience with realistic game mechanics, an economy system, and various customization options.',
      'The project includes a sophisticated virtual currency system with daily rewards, user statistics, and an economy ecosystem that keeps users engaged while ensuring fair play and balanced gameplay.',
      'As the sole developer of this project, I was responsible for everything from the initial concept and architecture to implementation and deployment. I focused on creating an engaging user experience with visually appealing game interfaces and intuitive commands.'
    ],
    features: [
      'Multiple casino games including Blackjack, Slots, Roulette, Poker, and Dice',
      'Virtual currency system with daily rewards and bonuses',
      'User statistics and leaderboard system',
      'Anti-cheat mechanics and fair play algorithms',
      'Customizable game settings for server administrators',
      'Interactive game interfaces with emoji reactions',
      'Economy management commands for server owners'
    ],
    challenges: [
      'Implementing fair random number generation for gambling games',
      'Balancing the economy to prevent inflation of virtual currency',
      'Handling high volumes of concurrent game sessions',
      'Preventing exploitation and cheating attempts',
      'Creating engaging visual interfaces within Discord\'s limitations'
    ],
    solutions: [
      'Used cryptographically secure random number generation',
      'Implemented economic sinks and diminishing returns on certain activities',
      'Designed an efficient game state management system using in-memory caching',
      'Created transaction logs and auditing systems to identify unusual patterns',
      'Utilized Discord\'s embed system and reactions for rich interactive interfaces'
    ],
    implementation: [
      'Built with Discord.js library for interacting with Discord\'s API',
      'Used SQLite database for persistent storage of user data and statistics',
      'Implemented modular architecture with separate handlers for commands, games, and economy',
      'Created a comprehensive testing suite to ensure fairness in game outcomes',
      'Deployed on a dedicated VPS for 24/7 availability with monitoring and automatic recovery'
    ],
    outcome: [
      'Successfully deployed to over 100 Discord servers with 20,000+ unique users',
      'Maintained a 99.9% uptime with minimal performance issues',
      'Received positive feedback for user interface and game balance',
      'Regular updates with new features based on user feedback',
      'Created detailed documentation for server administrators'
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
                  <h3 className="text-white font-semibold mb-2">Games</h3>
                  <p className="text-zinc-400 text-sm">Blackjack, Slots, Roulette, Poker, Dice</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Users</h3>
                  <p className="text-zinc-400 text-sm">20,000+ across 100+ servers</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Type</h3>
                  <p className="text-zinc-400 text-sm">Discord Bot</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Status</h3>
                  <p className="text-zinc-400 text-sm">Active & Maintained</p>
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
                      <span className="text-blue-400 mr-2">•</span>
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
                      <span className="text-purple-400 mr-2">•</span>
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
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation to other projects */}
          <div className="border-t border-zinc-800 pt-8">
            <h3 className="text-xl font-bold text-white mb-6">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <Link
                href="/projects/music-bot"
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 flex items-center hover:border-zinc-700 transition-all"
              >
                <div className="mr-4 w-12 h-12 relative">
                  <img
                    src="/projects/music-bot.svg"
                    alt="Music Bot"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">Music Discord Bot</h4>
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
