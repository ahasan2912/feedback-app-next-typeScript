import { MessageSquare } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10  sm:px-6 lg:px-8">
            <div className="container mx-auto px-4 md:px-0 flex items-center justify-between py-5">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        FeedbackPro
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;