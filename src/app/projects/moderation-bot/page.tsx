import React from 'react';
import Link from 'next/link';
import { SkillLogo } from '@/components/SkillLogos';
import Navbar from '@/components/Navbar';

export default function ModerationBotPage() {
  const project = {
    id: 'moderation-bot',
    title: 'Moderation Discord Bot',
    date: 'January 2023',
    description: 'A comprehensive moderation bot for Discord that helps server administrators manage their communities with automated warnings, mutes, bans, and detailed logging.',
    imageSrc: '/projects/moderation-bot.svg',
    technologies: [
      { name: 'Python', color: '#F7DF1E' },
      { name: 'SQLite', color: '#003B57' }
    ],
    longDescription: [
      'Moderation Bot is a powerful Discord moderation tool designed to assist server administrators in managing communities of any size. The bot provides a complete suite of moderation features, from basic message filtering to advanced user behavior analysis and automated moderation actions.',
      'Built with scalability in mind, the bot efficiently handles large servers with thousands of users while maintaining low resource usage and providing detailed audit logs for all moderation actions.',
      'This project was developed to address the challenges of managing large Discord communities where manual moderation becomes increasingly difficult. I wanted to create a solution that would not only automate repetitive tasks but also provide intelligent moderation capabilities that adapt to each server\'s unique needs.'
    ],
    features: [
      'Comprehensive moderation commands (warn, mute, kick, ban, etc.)',
      'Customizable auto-moderation system with regex pattern matching',
      'Tiered warning system with escalating consequences',
      'Detailed logging of all moderation actions and user activity',
      'Raid protection and spam detection algorithms',
      'Temporary punishment management with automatic expiration',
      'Server-specific configuration with permission levels',
      'Message content filtering with customizable rules',
      'User join verification systems'
    ],
    challenges: [
      'Handling high message throughput in large servers',
      'Creating effective anti-spam and anti-raid detection algorithms',
      'Managing complex permission hierarchies',
      'Storing moderation history efficiently',
      'Balancing automation with admin control',
      'Implementing context-aware content moderation'
    ],
    solutions: [
      'Implemented efficient message queuing and processing systems',
      'Developed pattern recognition algorithms with adjustable sensitivity',
      'Created a sophisticated permission caching and validation system',
      'Designed an optimized database schema for quick lookups of user history',
      'Built a robust configuration system allowing fine-grained control',
      'Used machine learning techniques for content classification'
    ],
    implementation: [
      'Leveraged Discord.js for reliable interaction with Discord\'s API',
      'Implemented a command handler with permission checking and rate limiting',
      'Created a robust SQLite database with efficient indexing for fast lookups',
      'Developed a custom caching layer to minimize API calls and database queries',
      'Implemented worker threads for heavy processing tasks to maintain responsiveness',
      'Built comprehensive logging systems for troubleshooting and auditing'
    ],
    outcome: [
      'Successfully deployed to over 150 Discord servers with varying sizes and requirements',
      'Dramatically reduced manual moderation needs in large servers',
      'Maintained 99.9% uptime with excellent performance metrics',
      'Received positive feedback from server administrators on ease of use and effectiveness',
      'Prevented multiple raid attempts and significantly reduced spam in protected servers',
      'Established a community of users who contribute to feature suggestions and testing'
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
                  <h3 className="text-white font-semibold mb-2">Features</h3>
                  <p className="text-zinc-400 text-sm">Auto-mod, Anti-raid, Logging</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Servers</h3>
                  <p className="text-zinc-400 text-sm">150+ with varying sizes</p>
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
                      <span className="text-purple-400 mr-2">•</span>
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
                      <span className="text-teal-400 mr-2">•</span>
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
