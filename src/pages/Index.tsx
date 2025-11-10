import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { BestPictureCard } from "@/components/BestPictureCard";
import { MovieModal } from "@/components/MovieModal";
import { FormulaExplanation } from "@/components/FormulaExplanation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { movies } from "@/data/movies";
import { Movie } from "@/types/movie";

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="predictions" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
            <TabsTrigger value="formulas">How It Works</TabsTrigger>
          </TabsList>
          
          <TabsContent value="predictions" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gold mb-2">Best Picture Contenders</h2>
              <p className="text-muted-foreground">Click any film for detailed voter segment analysis</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {movies.map((movie) => (
                <BestPictureCard
                  key={movie.rank}
                  movie={movie}
                  onClick={() => handleMovieClick(movie)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="formulas">
            <FormulaExplanation />
          </TabsContent>
        </Tabs>
      </div>

      <MovieModal 
        movie={selectedMovie}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default Index;