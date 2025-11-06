import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import heroImage from "@/assets/hero-oscars.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Trophy className="w-12 h-12 text-gold animate-pulse" />
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-gold bg-clip-text text-transparent">
            Oscar Predictor
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover the frontrunners for the most prestigious awards in cinema
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button variant="gold" size="lg">
            View Predictions
          </Button>
          <Button variant="outline" size="lg" className="border-gold/30 hover:bg-gold/10">
            Past Winners
          </Button>
        </div>
      </div>
    </section>
  );
};