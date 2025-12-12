import React from 'react';

const CounterDappHero: React.FC = () => {
  return (
    // Outer container (Full-width, responsible for background)
    <div className="min-h-screen  bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Content Container - Removed 'container mx-auto px-4' for full edge-to-edge content */}
      {/* Added horizontal padding (px-4/px-8) directly to the content areas for readability */}
      <div className="w-full  md:py-24">
        
        {/* Main Hero Content - Added horizontal padding here */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-semibold">
                Solana Blockchain DApp
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master Smart Contracts with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mt-2">
                Counter DApp
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              A hands-on decentralized application built on Solana to learn blockchain development. 
              Perfect for understanding core Web3 concepts through a simple yet powerful counter application.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#features" 
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Features
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-gray-800 dark:border-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                View on GitHub
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Core Functions</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">Solana</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Blockchain</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Anchor</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Framework</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Interactive Preview */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main Counter Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Counter DApp Preview</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                {/* Counter Display */}
                <div className="mb-10 text-center">
                  <div className="text-6xl font-bold text-gray-800 dark:text-white mb-4">42</div>
                  <p className="text-gray-500 dark:text-gray-400">Current Counter Value</p>
                </div>
                
                {/* Function Buttons */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-4 rounded-xl text-center cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="font-bold">Init</div>
                    <div className="text-sm opacity-90">Initialize Counter</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-xl text-center cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="font-bold">Increment</div>
                    <div className="text-sm opacity-90">+1 to Counter</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-4 rounded-xl text-center cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="font-bold">Set Counter</div>
                    <div className="text-sm opacity-90">Update Value</div>
                  </div>
                  <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-4 rounded-xl text-center cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="font-bold">Close</div>
                    <div className="text-sm opacity-90">Close Counter</div>
                  </div>
                </div>
                
                {/* Transaction Status */}
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Last Transaction</span>
                    <span className="text-sm text-green-600 dark:text-green-400 font-semibold">✓ Confirmed</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    Tx: 5zvP...Xy9a • Increment Counter • 2s ago
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
        
        {/* Technologies Section - Added horizontal padding here */}
        <div className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="technologies">
          <h2 className="text-3xl font-bold text-center mb-12">Built With Modern Web3 Stack</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <div className="font-bold text-lg">{tech.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{tech.type}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Features Section - Added horizontal padding here */}
        <div className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="features">
          <h2 className="text-3xl font-bold text-center mb-12">Core DApp Functions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section - Added horizontal padding here */}
        <div className="mt-24 text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-800 to-black dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Learn Solana Development?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              This Counter DApp is the perfect starting point for understanding Solana smart contracts, 
              transaction handling, and Web3 integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                Try Live Demo
              </a>
              <a 
                href="#" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Technologies data (unchanged)
const technologies = [
  { name: "Solana", icon: "🔗", type: "Blockchain" },
  { name: "Anchor", icon: "⚓", type: "Framework" },
  { name: "Next.js", icon: "⚡", type: "Frontend" },
  { name: "React", icon: "⚛️", type: "Frontend" },
  { name: "TypeScript", icon: "📘", type: "Language" },
  { name: "Rust", icon: "🦀", type: "Smart Contracts" },
];

// Features data (unchanged)
const features = [
  {
    title: "Initialize Counter",
    description: "Create and deploy a new counter on the Solana blockchain with a single transaction.",
    icon: "🚀",
    color: "bg-gradient-to-br from-purple-500 to-purple-700"
  },
  {
    title: "Increment",
    description: "Increase the counter value by 1 through a secure blockchain transaction.",
    icon: "➕",
    color: "bg-gradient-to-br from-blue-500 to-blue-700"
  },
  {
    title: "Set Counter",
    description: "Update the counter to any specific value with a custom set function.",
    icon: "🎯",
    color: "bg-gradient-to-br from-green-500 to-green-700"
  },
  {
    title: "Close Counter",
    description: "Safely close and reclaim the counter account resources when done.",
    icon: "🔒",
    color: "bg-gradient-to-br from-red-500 to-red-700"
  },
];

export default CounterDappHero;