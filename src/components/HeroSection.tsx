import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex items-center justify-center p-4 mt-5">
            <div className="w-full max-w-2xl mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-900 mb-3">
                    We&apos;d Love Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Feedback</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-lg mx-auto">
                    Help us improve by sharing your thoughts, suggestions, or experiences with us.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;