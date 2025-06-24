import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsProps {
  id?: string;
}

const skills: Skill[] = [
  { name: 'MERN Stack', level: 100, category: 'Full Stack' },
  { name: 'Next.js', level: 60, category: 'Database' },
  { name: 'JavaScript', level: 90, category: 'Languages' },
  { name: 'TypeScript', level: 80, category: 'Languages' },
  { name: 'CSS/Tailwind', level: 90, category: 'Styling' },
  { name: 'Git/Github', level: 85, category: 'Tools' },
  { name: 'C++', level: 90, category: 'Programming Languages' },
  { name: 'Java', level: 90, category: 'Programming Languages' },
  { name: 'Python', level: 85, category: 'Programming Languages' },
  { name: 'SQL', level: 85, category: 'Database' },
  { name: 'DSA', level: 70, category: 'Computer Science' },
  { name: 'Prompt Designing', level: 100, category: 'Generative AI' },
  { name: 'Vertex AI and Google Gemini', level: 80, category: 'Generative AI' },
  { name: 'Search Engine Optimization', level: 90, category: 'Digital Marketing' },
  { name: 'WordPress', level: 100, category: 'Tools' },
  { name: 'Communitcation Skills', level: 100, category: 'Soft Skills' },
  { name: 'Problem Solving', level: 95, category: 'Soft Skills' },
  { name: 'Teamwork', level: 100, category: 'Soft Skills' },
];

const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <section id={id} className="relative min-h-[600px] w-full py-16">
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b dark:from-black/0 dark:via-black/50 dark:to-black/0 from-[#F5F8FA]/0 via-[#E2E8F0]/50 to-[#F5F8FA]/0" />
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white text-[#2D3748]">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="dark:bg-black/40 bg-white/40 backdrop-blur-md p-6 rounded-lg 
                dark:border-gray-700 border-[#E2E8F0] border
                dark:hover:border-gray-500 hover:border-[#CBD5E0] transition-all 
                hover:transform hover:scale-105 dark:hover:bg-black/50 hover:bg-white/60
                hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold dark:text-white text-[#2D3748] mb-2">{skill.name}</h3>
              <p className="dark:text-gray-400 text-[#4A5568] text-sm mb-3">{skill.category}</p>
              <div className="relative group">
                <div className="w-full dark:bg-gray-800/50 bg-[#EDF2F7] rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="dark:bg-black/80 bg-white/90 text-sm px-2 py-1 rounded shadow-lg dark:text-white text-[#2D3748]">
                    {skill.level}%
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent dark:border-t-black/80 border-t-white/90" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 