import React from 'react';
import { SkillLogo } from './SkillLogos';

interface SkillItem {
  name: string;
  color: string;
}

export default function Skills() {
  // Define skills with their properties
  const skills: SkillItem[] = [
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#000000' },
    { name: 'Node.js', color: '#539E43' },
    { name: 'TailwindCSS', color: '#38B2AC' },
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'Git', color: '#F05032' },
    { name: 'SQLite', color: '#003B57' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Bootstrap', color: '#7952B3' }
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center z-0 opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-zinc-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-zinc-900 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-zinc-700 transition-all hover:shadow-lg hover:shadow-zinc-900/50 hover:-translate-y-1 duration-300"
            >
              {/* Logo using SkillLogo component */}
              <div className="mb-4 flex items-center justify-center">
                <SkillLogo
                  skill={skill.name}
                  color={skill.color}
                  size={48}
                  className="transition-transform hover:scale-110 duration-300"
                />
              </div>

              {/* Skill Name */}
              <h3 className="text-white text-center font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
