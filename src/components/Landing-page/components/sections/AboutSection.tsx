import React from 'react';
import { Users, Target, Award } from 'lucide-react';
import { Card } from '../ui/Card';

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief AI Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Ph.D. in Machine Learning with 15+ years of experience in AI applications."
  },
  {
    name: "Michael Torres",
    role: "Real Estate Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "20+ years in real estate, pioneering AI adoption in property markets."
  },
  {
    name: "Emma Watson",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Leading our technical innovations with 10+ years in AI development."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400 mb-8">
            We're a team of AI experts, real estate professionals, and tech innovators
            on a mission to revolutionize the real estate industry.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Target className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-400">To make AI technology accessible and practical for real estate professionals.</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-400">To lead the digital transformation of the real estate industry globally.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-400">Innovation, integrity, and client success drive everything we do.</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-cyan-500 mb-2">{member.role}</p>
              <p className="text-gray-400">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}