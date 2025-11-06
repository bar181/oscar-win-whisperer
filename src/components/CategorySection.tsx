import { PredictionCard } from "./PredictionCard";

interface Prediction {
  category: string;
  nominee: string;
  movie: string;
  confidence: number;
  imageUrl?: string;
}

interface CategorySectionProps {
  title: string;
  predictions: Prediction[];
}

export const CategorySection = ({ title, predictions }: CategorySectionProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gold">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {predictions.map((prediction, index) => (
            <PredictionCard key={index} {...prediction} />
          ))}
        </div>
      </div>
    </section>
  );
};