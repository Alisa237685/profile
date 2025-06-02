
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-700/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors group"
            >
              <Github className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors group"
            >
              <Linkedin className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors group"
            >
              <Mail className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by a passionate developer</span>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700/50 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
