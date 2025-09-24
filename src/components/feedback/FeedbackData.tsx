"use client"
import React, { useEffect, useState } from 'react';
import FeedbackCard from './FeedbackCard';
import { Feedback } from '@/type/type';
import FeedbackForm from './FeedbackForm';
import LoadingSpiner from '../LoadingSpiner';

const FeedbackData = () => {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Data Load From LocalStorage
    useEffect(() => {
        const saved = localStorage.getItem('feedbacks');
        if (saved) {
            setFeedbacks(JSON.parse(saved));
            setLoading(false);
        } else {
            fetch('/api/feedback')
                .then(res => res.json())
                .then(data => {
                    setFeedbacks(data);
                    setLoading(false);
                    localStorage.setItem('feedbacks', JSON.stringify(data));
                })
        }
    }, [])

    // Add new feedback
    const handleAddFeedback = (newFeedback: Feedback) => {
        const updated = [...feedbacks, newFeedback];
        setFeedbacks(updated);
        setLoading(false);
        localStorage.setItem("feedbacks", JSON.stringify(updated));
    };

    if(loading){
        return <LoadingSpiner/>
    }

    return (
        <div>  
            <FeedbackForm onAddFeedback={handleAddFeedback} />
            <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
                {
                    feedbacks.map((feedback, index) => <FeedbackCard
                        key={feedback.id}
                        feedback={feedback}
                        index={index}
                    />)
                }
            </div >
        </div>
    );
};

export default FeedbackData;