'use client'
import { useState } from 'react'
import { Mail, MessageSquareMore, Send, User } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Feedback, FeedbackFormInputs } from '@/type/type'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

interface FeedbackFormProps {
    onAddFeedback: (savedFeedback: Feedback) => void;
}

export default function FeedbackForm({ onAddFeedback }: FeedbackFormProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FeedbackFormInputs>()
    const [charCount, setCharCount] = useState<number>(0)

    // Submit handler
    const onSubmit: SubmitHandler<FeedbackFormInputs> = async (data) => {
        const { name, email, feedback } = data

        try {
            const res = await fetch('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message: feedback }),
            })

            if (!res.ok) {
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: "Something went wrong!",
                });
                return
            }

            const savedFeedback: Feedback = await res.json();
            // add new feedback data
            onAddFeedback(savedFeedback)
            reset()
            setCharCount(0)

            // Show SweetAlert only after successful submission
            Swal.fire({
                title: "Feedback submitted successfully!",
                text: "You clicked the button!",
                icon: "success"
            });

        } catch (err) {
            Swal.fire({
                icon: "error",
                title: `${err}`,
                text: "Something went wrong!",
            });
        }
    }
    return (
        <div className="flex flex-col items-center p-4">
            <div className="p-6 rounded-xl shadow-lg w-full max-w-4xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="text-gray-700 font-medium flex items-center mb-1 gap-0.5">
                                <User className='text-gray-400 mb-1' size={22} />
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full name"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="text-gray-700 font-medium flex items-center mb-1 gap-1">
                                <Mail className='text-gray-400 mb-1' size={20} />
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                })}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                    </div>
                    {/* Feedback */}
                    <div>
                        <label htmlFor="feedback" className="text-gray-700 font-medium flex items-center mb-1 gap-1">
                            <MessageSquareMore className='text-gray-400 mb-1' size={21} />
                            Your Feedback
                        </label>
                        <textarea
                            id="feedback"
                            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={5}
                            maxLength={500}
                            placeholder="Tell us what's on your mind. We're all ears!"
                            {...register("feedback", {
                                required: "Feedback is required",
                                onChange: (e) => setCharCount(e.target.value.length)
                            })}
                        >
                        </textarea>
                        <p className="text-right text-sm text-gray-400 mt-1">
                            {charCount}/500 characters
                        </p>
                        {errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback.message}</p>}
                    </div>
                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 px-6 rounded-md font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out flex items-center justify-center gap-1"
                        >
                            <Send size={20} />
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
