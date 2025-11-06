import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import { Movie } from "@/types/movie";

interface BestPictureCardProps {
  movie: Movie;
  onClick: () => void;
}

export const BestPictureCard = ({ movie, onClick }: BestPictureCardProps) => {
  return (
    <Card 
      className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden relative"
      onClick={onClick}
    >
      <div className="absolute top-2 right-2 z-10">
        <Badge variant="gold" className="text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-gold">
          {movie.rank}
        </Badge>
      </div>

      {movie.imageUrl && (
        <div className="aspect-[2/3] overflow-hidden bg-muted">
          <img 
            src={movie.imageUrl} 
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl">{movie.title}</CardTitle>
        <p className="text-sm text-gold">Dir. {movie.director}</p>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-gold" />
              <span className="text-sm text-muted-foreground">Predicted Score</span>
            </div>
            <span className="text-3xl font-bold text-gold">{movie.overallScore}</span>
          </div>

          <div className="pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Voter Segment Scores:</p>
            <div className="space-y-1">
              {movie.segments.map((segment, index) => (
                <div key={index} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground truncate flex-1">{segment.name}</span>
                  <span className="text-gold font-semibold ml-2">{segment.score}/100</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};