import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SkillLogo } from './SkillLogos';

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
}

export default function Projects() {
  // Updated projects data with Discord bots
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
      url: '/projects/gambling-bot'
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
      url: '/projects/moderation-bot'
    },
    {
      id: 'music-bot',
      title: 'Music Discord Bot',
      date: 'November 2022',
      description: 'A Discord bot that plays high-quality music from various sources like YouTube, Spotify, and SoundCloud with advanced queue management and filters.',
      imageSrc: '/projects/music-bot.svg',
      technologies: [
        { name: 'Python', color: '#F7DF1E' },
        { name: 'React', color: '#61DAFB' }
      ],
      url: '/projects/music-bot'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center z-0 opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-zinc-950 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-zinc-950 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/70 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all hover:shadow-xl hover:shadow-zinc-900/50 hover:-translate-y-1 duration-300"
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
              <div className="p-6">
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
                <p className="text-zinc-400 text-sm mb-5">
                  {project.description}
                </p>

                {/* Read More Button */}
                <Link
                  href={project.url}
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read More
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md font-medium transition-colors border border-zinc-700 hover:border-zinc-600"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
