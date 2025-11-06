import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Movie } from "@/types/movie";
import { Progress } from "@/components/ui/progress";

interface MovieModalProps {
  movie: Movie | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MovieModal = ({ movie, open, onOpenChange }: MovieModalProps) => {
  if (!movie) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl text-gold">{movie.title}</DialogTitle>
          <p className="text-muted-foreground">
            Directed by {movie.director} • Overall Score: {movie.overallScore}/10
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {movie.segments.map((segment, index) => (
            <div 
              key={index}
              className="bg-secondary/50 rounded-lg p-6 border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{segment.name}</h3>
                  <p className="text-sm text-muted-foreground">{segment.weight} of voters</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-gold">{segment.score}</div>
                  <div className="text-sm text-muted-foreground">/100</div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground mb-3">Voting Pattern:</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-16">Rank #1</span>
                    <Progress value={segment.votes.first} className="flex-1 h-3" />
                    <span className="text-sm font-semibold text-gold w-12 text-right">{segment.votes.first}%</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-16">Rank #2</span>
                    <Progress value={segment.votes.second} className="flex-1 h-3" />
                    <span className="text-sm font-semibold text-gold w-12 text-right">{segment.votes.second}%</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-16">Rank #3</span>
                    <Progress value={segment.votes.third} className="flex-1 h-3" />
                    <span className="text-sm font-semibold text-gold w-12 text-right">{segment.votes.third}%</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-16">Rank #4</span>
                    <Progress value={segment.votes.fourth} className="flex-1 h-3" />
                    <span className="text-sm font-semibold text-gold w-12 text-right">{segment.votes.fourth}%</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-16">Rank #5</span>
                    <Progress value={segment.votes.fifth} className="flex-1 h-3" />
                    <span className="text-sm font-semibold text-gold w-12 text-right">{segment.votes.fifth}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};