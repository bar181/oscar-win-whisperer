import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";

const Index = () => {
  const actingPredictions = [
    {
      category: "Best Actor",
      nominee: "Cillian Murphy",
      movie: "Oppenheimer",
      confidence: 92,
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop"
    },
    {
      category: "Best Actress",
      nominee: "Emma Stone",
      movie: "Poor Things",
      confidence: 88,
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop"
    },
    {
      category: "Best Supporting Actor",
      nominee: "Robert Downey Jr.",
      movie: "Oppenheimer",
      confidence: 95,
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop"
    },
    {
      category: "Best Supporting Actress",
      nominee: "Da'Vine Joy Randolph",
      movie: "The Holdovers",
      confidence: 90,
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
    }
  ];

  const topPredictions = [
    {
      category: "Best Picture",
      nominee: "Oppenheimer",
      movie: "Christopher Nolan",
      confidence: 94,
      imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop"
    },
    {
      category: "Best Director",
      nominee: "Christopher Nolan",
      movie: "Oppenheimer",
      confidence: 93,
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop"
    },
    {
      category: "Best Original Screenplay",
      nominee: "Anatomy of a Fall",
      movie: "Justine Triet, Arthur Harari",
      confidence: 78,
      imageUrl: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=400&h=600&fit=crop"
    },
    {
      category: "Best Adapted Screenplay",
      nominee: "American Fiction",
      movie: "Cord Jefferson",
      confidence: 82,
      imageUrl: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Hero />
      <CategorySection title="Top Categories" predictions={topPredictions} />
      <CategorySection title="Acting Categories" predictions={actingPredictions} />
      
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">How We Predict</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our predictions combine industry trends, critic reviews, guild awards, and historical 
            Oscar patterns to calculate the most likely winners in each category.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;