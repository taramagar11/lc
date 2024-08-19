import React from 'react';
import { NavLink } from 'react-router-dom';

const Topics = () => {
  const topics = [
    {
      name: 'Artificial Intelligence',
      description: 'The world of AI, where machines learn and make decisions.',
      
    },
    {
      name: 'Web Development',
      description: 'Helps to learn to build dynamic websites and applications using modern technologies.',
      
    },
    {
      name: 'Data Science',
      description: 'Let us dive into data analysis, statistics, and machine learning to extract insights.',
      
    },
    {
      name: 'Cybersecurity',
      description: 'Understand the fundamentals of protecting systems and data from cyber threats.',
      
    },
    {
      name: 'Cloud Computing',
      description: 'Helps to earn about the infrastructure, services, and platforms provided over the internet.',
      
    },
  ];

  return (
    <div className="bg-[#2A30AB] text-white py-8 flex flex-col items-center">
      <div className="flex space-x-8 mb-8">
        <NavLink
          to="/club"
          className={({ isActive }) =>
            `text-2xl font-bold cursor-pointer hover:text-gray-300 transition-colors ${isActive ? 'underline' : ''}`
          }
          style={{ fontFamily: 'Arial' }}
        >
          Clubs
        </NavLink>
        <NavLink
          to="/topics"
          className={({ isActive }) =>
            `text-2xl font-bold cursor-pointer hover:text-gray-300 transition-colors ${isActive ? 'underline' : ''}`
          }
          style={{ fontFamily: 'Arial' }}
        >
          Topics
        </NavLink>
      </div>

      <div className="space-y-4 w-full px-4 sm:px-8 lg:px-16">
        {topics.map((topic, index) => (
          <NavLink
            key={index}
            to={topic.path}
            className="block p-4 bg-[#6168CF] rounded-lg hover:bg-[#4e55b6] transition-colors"
          >
            <h3 className="text-2xl font-bold" style={{ fontFamily: 'Arial' }}>{topic.name}</h3>
            <p className="text-lg mt-2">{topic.description}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Topics;
