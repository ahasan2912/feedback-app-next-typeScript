import { Feedback } from "@/type/type";
import { NextRequest, NextResponse } from "next/server";

// In-memory storage with default feedback
const feedbacks: Feedback[] = [
  {
    id: 1,
    name: "Ahasan Habib",
    email: "ahasanhabib2912@gmail.com",
    feedback: "I really enjoyed working with this Next.js and TypeScript project. The structure is clean, TypeScript types make the code more reliable, and integrating components with React is smooth. I especially liked how state management and routing are handled, making the app maintainable and scalable.",
    createdAt: new Date().toISOString(),
  },
];

export const GET = async () => {
  return NextResponse.json(feedbacks, { status: 200 });
}

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name: string;
      email: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    // crate object and intregate in array
    const newFeedback: Feedback = {
      id: Date.now(),
      name,
      email,
      feedback: message,
      createdAt: new Date().toISOString(),
    };
    feedbacks.push(newFeedback);
    return NextResponse.json(newFeedback, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 500 }
    );
  }
}
