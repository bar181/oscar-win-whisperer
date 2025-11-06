import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp } from "lucide-react";

interface PredictionCardProps {
  category: string;
  nominee: string;
  movie: string;
  confidence: number;
  imageUrl?: string;
}

export const PredictionCard = ({ 
  category, 
  nominee, 
  movie, 
  confidence,
  imageUrl 
}: PredictionCardProps) => {
  return (
    <Card className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {imageUrl && (
        <div className="aspect-[2/3] overflow-hidden bg-muted">
          <img 
            src={imageUrl} 
            alt={nominee}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{category}</CardTitle>
          <Badge variant="gold" className="gap-1">
            <TrendingUp className="w-3 h-3" />
            {confidence}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <Trophy className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">{nominee}</p>
              <p className="text-sm text-muted-foreground">{movie}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Confidence</span>
              <span>{confidence}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-gold transition-all duration-500"
                style={{ width: `${confidence}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};