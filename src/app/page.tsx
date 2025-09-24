import FeedbackData from "@/components/feedback/FeedbackData";
import HeroSection from "@/components/HeroSection";

const Home = async () => {
  return (
    <div className="min-h-[calc(100vh-140px)] container mx-auto px-4">
      <HeroSection />
      <FeedbackData/>
    </div>
  );
}

export default Home;