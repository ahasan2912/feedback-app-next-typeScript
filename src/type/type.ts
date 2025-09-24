export interface Feedback {
  id: number;
  name: string;
  email: string;
  feedback: string;
  createdAt: string;
}

export interface FeedbackFormInputs {
  name: string
  email: string
  feedback: string
}

export interface FeedbackProps {
  feedback: Feedback;
  index: number;
}

export interface FeedbackFormProps {
  onAddFeedback: (savedFeedback: Feedback) => void;
}