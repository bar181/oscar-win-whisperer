import { Trophy } from "lucide-react";
import heroImage from "@/assets/hero-oscars.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Trophy className="w-12 h-12 text-gold animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-gold bg-clip-text text-transparent">
            2026 OSCARS
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground/80 mb-2 uppercase tracking-wider">
          Best Picture Predictor
        </p>
        
        <div className="inline-block mt-2 px-6 py-2 bg-gold/10 border border-gold/30 rounded-full">
          <p className="text-sm text-gold">March 15, 2026 • 98th Academy Awards</p>
        </div>
      </div>
    </section>
  );
};