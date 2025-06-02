
import React from 'react';
import { Code, Coffee, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              Hi, I'm a Full Stack Developer
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 3 years of experience in software development, I specialize in creating 
              robust, scalable, and user-friendly applications. My journey began with a curiosity 
              for how things work, which led me to discover the exciting world of programming.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about solving complex problems, learning new technologies, and 
              collaborating with teams to build amazing products. When I'm not coding, you can 
              find me exploring new frameworks, contributing to open source projects, or sharing 
              knowledge with the developer community.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and following best practices. 
              I'm always eager to take on new challenges and contribute to projects that 
              make a positive impact.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Clean Code</h3>
            <p className="text-gray-400">
              Writing maintainable, readable, and efficient code that stands the test of time.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
            <p className="text-gray-400">
              Embracing new technologies and creative solutions to solve challenging problems.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
            <p className="text-gray-400">
              Working effectively with teams and stakeholders to deliver exceptional results.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="h-8 w-8 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Passion</h3>
            <p className="text-gray-400">
              Driven by curiosity and the love of creating something meaningful and impactful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
