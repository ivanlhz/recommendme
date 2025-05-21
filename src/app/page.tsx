import { HomePage } from "@/components/organisms/HomePage";
import { mockExistingRecommendations } from "@/mocks/recommendation.mock";

export default function Home() {
  return (
    <HomePage testimonials={mockExistingRecommendations} />
  );
}
