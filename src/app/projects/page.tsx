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
  id: 'poll-bot',
  title: 'Poll Discord Bot',
  date: 'July 2023',
  description: 'A Discord bot that allows users to create and manage polls with real-time voting and results visualization.',
  imageSrc: '/projects/poll-bot.svg',
  technologies: [
    { name: 'Node.js', color: '#339933' },
    { name: 'MongoDB', color: '#47A248' }
  ],
  url: '/projects/poll-bot',
  longDescription: [
    'Poll Bot is a user-friendly Discord bot designed to facilitate decision-making in communities. It allows users to create polls with multiple options, set time limits, and view real-time results.',
    'The bot supports advanced features like anonymous voting, weighted votes, and integration with external analytics tools.'
  ],
  features: [
    'Real-time voting and results visualization',
    'Support for single-choice and multi-choice polls',
    'Anonymous and weighted voting options',
    'Customizable poll duration and reminders',
    'Integration with external analytics platforms'
  ],
  challenges: [
    'Ensuring real-time updates for large-scale polls',
    'Preventing duplicate or fraudulent votes',
    'Designing an intuitive user interface for poll creation'
  ],
  solutions: [
    'Implemented WebSocket-based real-time updates',
    'Used unique user identifiers and IP tracking for vote validation',
    'Developed a guided poll creation process with interactive commands'
  ]
},
{
  id: 'event-bot',
  title: 'Event Management Discord Bot',
  date: 'May 2023',
  description: 'A bot that helps Discord communities organize and manage events with RSVP functionality and reminders.',
  imageSrc: '/projects/event-bot.svg',
  technologies: [
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'PostgreSQL', color: '#336791' }
  ],
  url: '/projects/event-bot',
  longDescription: [
    'Event Bot is a comprehensive event management solution for Discord servers. It allows users to create events, manage RSVPs, and send automated reminders to participants.',
    'The bot also includes features like event categories, recurring events, and integration with calendar applications.'
  ],
  features: [
    'Event creation and RSVP management',
    'Automated reminders and notifications',
    'Support for recurring events and categories',
    'Integration with Google Calendar and iCal',
    'Customizable event templates for quick setup'
  ],
  challenges: [
    'Synchronizing event data with external calendar services',
    'Handling time zone differences for global communities',
    'Ensuring scalability for servers with frequent events'
  ],
  solutions: [
    'Used OAuth2 for secure integration with calendar APIs',
    'Implemented time zone conversion utilities',
    'Optimized database queries for efficient event retrieval'
  ]
},
{
  id: 'quiz-bot',
  title: 'Quiz Discord Bot',
  date: 'August 2023',
  description: 'A fun and interactive Discord bot that hosts quizzes and trivia games with leaderboards and rewards.',
  imageSrc: '/projects/quiz-bot.svg',
  technologies: [
    { name: 'Python', color: '#F7DF1E' },
    { name: 'Redis', color: '#DC382D' }
  ],
  url: '/projects/quiz-bot',
  longDescription: [
    'Quiz Bot is an engaging Discord bot that brings trivia and quiz games to servers. It supports various quiz formats, difficulty levels, and categories to keep users entertained.',
    'The bot also features a leaderboard system and reward mechanisms to encourage participation.'
  ],
  features: [
    'Multiple quiz formats (MCQs, true/false, fill-in-the-blank)',
    'Category and difficulty selection',
    'Real-time scoring and leaderboards',
    'Reward system with customizable prizes',
    'Support for custom quizzes created by server admins'
  ],
  challenges: [
    'Ensuring low latency for real-time quiz interactions',
    'Preventing cheating during quizzes',
    'Managing large question databases efficiently'
  ],
  solutions: [
    'Used Redis for fast in-memory data storage',
    'Implemented anti-cheat mechanisms like randomized question order',
    'Optimized question database indexing for quick retrieval'
  ]
},
{
  id: 'reminder-bot',
  title: 'Reminder Discord Bot',
  date: 'February 2024',
  description: 'A bot that helps users set reminders and manage tasks efficiently within Discord.',
  imageSrc: '/projects/reminder-bot.svg',
  technologies: [
    { name: 'Node.js', color: '#339933' },
    { name: 'MongoDB', color: '#47A248' }
  ],
  url: '/projects/reminder-bot',
  longDescription: [
    'Reminder Bot is a productivity tool for Discord users, allowing them to set reminders, create task lists, and receive notifications directly in their servers.',
    'The bot supports recurring reminders, task prioritization, and integration with external calendar services.'
  ],
  features: [
    'Customizable reminders with recurring options',
    'Task list management with priority levels',
    'Integration with Google Calendar and iCal',
    'Notification system with Discord mentions',
    'User-friendly command interface'
  ],
  challenges: [
    'Handling time zone differences for global users',
    'Ensuring reliable delivery of notifications',
    'Managing large volumes of scheduled tasks'
  ],
  solutions: [
    'Implemented time zone conversion utilities',
    'Used a job queue system for reliable task scheduling',
    'Optimized database queries for efficient task retrieval'
  ]
},
{
  id: 'weather-bot',
  title: 'Weather Discord Bot',
  date: 'April 2024',
  description: 'A bot that provides real-time weather updates and forecasts for any location.',
  imageSrc: '/projects/weather-bot.svg',
  technologies: [
    { name: 'Python', color: '#F7DF1E' },
    { name: 'OpenWeather API', color: '#007ACC' }
  ],
  url: '/projects/weather-bot',
  longDescription: [
    'Weather Bot is a Discord bot that delivers accurate weather updates and forecasts. Users can check current conditions, hourly forecasts, and severe weather alerts.',
    'The bot also supports location-based weather tracking and customizable notifications.'
  ],
  features: [
    'Real-time weather updates and forecasts',
    'Severe weather alerts and notifications',
    'Support for multiple locations',
    'Customizable weather notifications',
    'Integration with OpenWeather API'
  ],
  challenges: [
    'Ensuring accurate location-based weather data',
    'Handling API rate limits for high usage',
    'Providing a user-friendly interface for weather queries'
  ],
  solutions: [
    'Used geocoding services for accurate location mapping',
    'Implemented caching to reduce API calls',
    'Designed intuitive commands for weather queries'
  ]
},
{
  id: 'translation-bot',
  title: 'Translation Discord Bot',
  date: 'June 2024',
  description: 'A bot that translates messages in real-time to multiple languages.',
  imageSrc: '/projects/translation-bot.svg',
  technologies: [
    { name: 'Node.js', color: '#339933' },
    { name: 'Google Translate API', color: '#4285F4' }
  ],
  url: '/projects/translation-bot',
  longDescription: [
    'Translation Bot is a multilingual communication tool for Discord servers. It translates messages in real-time, enabling seamless communication between users speaking different languages.',
    'The bot supports over 100 languages and provides automatic language detection.'
  ],
  features: [
    'Real-time message translation',
    'Support for over 100 languages',
    'Automatic language detection',
    'Customizable translation settings',
    'Integration with Google Translate API'
  ],
  challenges: [
    'Ensuring fast and accurate translations',
    'Handling messages with mixed languages',
    'Managing API usage efficiently'
  ],
  solutions: [
    'Used Google Translate API for reliable translations',
    'Implemented language detection algorithms',
    'Optimized API calls with batching and caching'
  ]
},
{
  id: 'stock-bot',
  title: 'Stock Market Discord Bot',
  date: 'August 2024',
  description: 'A bot that provides real-time stock market data and portfolio tracking.',
  imageSrc: '/projects/stock-bot.svg',
  technologies: [
    { name: 'Python', color: '#F7DF1E' },
    { name: 'Alpha Vantage API', color: '#003B57' }
  ],
  url: '/projects/stock-bot',
  longDescription: [
    'Stock Bot is a financial tool for Discord users, offering real-time stock market data, portfolio tracking, and alerts for price changes.',
    'The bot supports multiple stock exchanges and provides detailed analytics for investments.'
  ],
  features: [
    'Real-time stock price updates',
    'Portfolio tracking and analytics',
    'Price alerts and notifications',
    'Support for multiple stock exchanges',
    'Integration with Alpha Vantage API'
  ],
  challenges: [
    'Ensuring accurate and up-to-date stock data',
    'Handling API rate limits for high usage',
    'Providing detailed analytics in a user-friendly format'
  ],
  solutions: [
    'Used Alpha Vantage API for reliable stock data',
    'Implemented caching to reduce API calls',
    'Designed intuitive commands for portfolio management'
  ]
},
{
  id: 'fitness-bot',
  title: 'Fitness Tracker Discord Bot',
  date: 'October 2024',
  description: 'A bot that helps users track their fitness goals and progress.',
  imageSrc: '/projects/fitness-bot.svg',
  technologies: [
    { name: 'Node.js', color: '#339933' },
    { name: 'Firebase', color: '#FFCA28' }
  ],
  url: '/projects/fitness-bot',
  longDescription: [
    'Fitness Bot is a health and fitness tool for Discord users, allowing them to set goals, track workouts, and monitor progress over time.',
    'The bot supports integration with fitness apps and provides motivational reminders.'
  ],
  features: [
    'Goal setting and progress tracking',
    'Workout logging and analytics',
    'Integration with fitness apps',
    'Motivational reminders and tips',
    'Customizable fitness plans'
  ],
  challenges: [
    'Ensuring accurate tracking of fitness data',
    'Providing personalized fitness recommendations',
    'Integrating with third-party fitness apps'
  ],
  solutions: [
    'Used Firebase for secure data storage',
    'Implemented algorithms for personalized recommendations',
    'Used OAuth2 for secure integration with fitness APIs'
  ]
},
{
  id: 'news-bot',
  title: 'News Aggregator Discord Bot',
  date: 'December 2024',
  description: 'A bot that delivers real-time news updates from various sources.',
  imageSrc: '/projects/news-bot.svg',
  technologies: [
    { name: 'Python', color: '#F7DF1E' },
    { name: 'NewsAPI', color: '#FF4500' }
  ],
  url: '/projects/news-bot',
  longDescription: [
    'News Bot is a Discord bot that aggregates news from multiple sources and delivers updates in real-time. Users can customize their news feed based on topics and regions.',
    'The bot also supports notifications for breaking news and trending topics.'
  ],
  features: [
    'Real-time news updates',
    'Customizable news feed by topic and region',
    'Breaking news notifications',
    'Support for multiple news sources',
    'Integration with NewsAPI'
  ],
  challenges: [
    'Ensuring accurate and unbiased news aggregation',
    'Handling API rate limits for high usage',
    'Providing a user-friendly interface for news customization'
  ],
  solutions: [
    'Used NewsAPI for reliable news aggregation',
    'Implemented caching to reduce API calls',
    'Designed intuitive commands for news customization'
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
