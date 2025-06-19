
import React from 'react';
import AnimatedSphere from '@/components/AnimatedSphere';
import LoginSignupForm from '@/components/LoginSignupForm';

const Index = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Half - Animated Sphere */}
      <div className="w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <AnimatedSphere />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-lime-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-lime-400/10 rounded-full blur-2xl"></div>
      </div>

      {/* Right Half - Login/Signup Form */}
      <div className="w-1/2 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome</h1>
            <p className="text-lg text-gray-600">Access your account or create a new one</p>
          </div>
          <LoginSignupForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
