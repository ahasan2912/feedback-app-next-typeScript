import { FeedbackProps } from '@/type/type';
import Link from 'next/link';
import React from 'react';

const FeedbackCard = ({ feedback, index }: FeedbackProps) => {
    return (
        <div className="p-3 border-l-8 border-blue-500 border rounded shadow-sm space-y-1 overflow-hidden">
            <div className='flex items-center gap-1'>
                <h1 className="text-xl font-semibold">{index + 1}.</h1>
                <h1 className="text-xl font-semibold">{feedback.name}</h1>
            </div>
            <p className="text-gray-700">
                <Link href={`mailto:${feedback.email}`} className="text-blue-500 hover:underline">
                    {feedback.email}
                </Link>
            </p>
            <p className="text-gray-700 text-justify">{feedback.feedback}</p>
            <p className="text-xs text-gray-500">{new Date(feedback.createdAt).toLocaleString()}</p>
        </div>
    );
};

export default FeedbackCard;