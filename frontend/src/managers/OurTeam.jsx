import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons
import siddharth from  "../assets/siddharth.jpg"
import ayush from  "../assets/ayush.png"
import rajul from "../assets/dp.jpeg"
const teamMembers = [
  {
    name: 'Rajul Dwivedi',
    title: 'Manager',
    photoUrl: rajul,
    email: 'rajuldwivedi@gurukulres.com',
  },
  {
    name: 'Ayush Raj Baranwal',
    title: 'Web Developer',
    photoUrl: ayush,
    email: 'ayushrbaranwal@gmail.com',
  },
  {
    name: 'Siddharth Aggarwal',
    title: ' Developer',
    photoUrl: siddharth,
    email: 'aggarwalsiddharth49@gmail.com',
  },
  {
    name: 'Sujal Kumar ',
    title: ' Developer',
    photoUrl: "",
    email: 'aggarwalsiddharth49@gmail.com',
  },
  // Add more team members as needed
];

const OurTeam = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Team</h1>
        <p className="text-black text-lg">
          Meet the talented professionals who drive our success with their expertise and dedication.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
            <img src={member.photoUrl} alt={`${member.name}`} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-blue-600 mb-1">{member.name}</h2>
            <p className="text-black mb-4">{member.title}</p>
            <div className="flex justify-center gap-6 text-blue-600">
  
              <a href={`mailto:${member.email}`} className="hover:text-blue-700">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
