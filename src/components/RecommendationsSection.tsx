
import React from "react";
import { 
  CreditCard as CreditCardType,
  CardSegment
} from "@/types";
import CreditCardDisplay from "./CreditCardDisplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RecommendationsSectionProps {
  recommendations: Record<CardSegment, CreditCardType[]>;
}

const RecommendationsSection = ({ recommendations }: RecommendationsSectionProps) => {
  // Filter out empty segments
  const activeSegments = Object.entries(recommendations)
    .filter(([_, cards]) => cards.length > 0)
    .map(([segment]) => segment);

  if (activeSegments.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">No Recommendations Available</h2>
        <p className="text-muted-foreground mt-2">
          Based on your responses, we couldn't find suitable card recommendations. 
          Please try adjusting your preferences.
        </p>
      </div>
    );
  }

  // Function to get a friendly name for the segment
  const getSegmentName = (segment: string): string => {
    switch (segment) {
      case "entry-level":
        return "Entry Level Cards";
      case "travel":
        return "Travel Cards";
      case "shopping":
        return "Shopping Cards";
      case "dining":
        return "Dining & Entertainment";
      case "fuel":
        return "Fuel Cards";
      case "premium":
        return "Premium Cards";
      default:
        return segment;
    }
  };
  
  // Determine the default tab (first non-empty segment)
  const defaultTab = activeSegments[0];

  return (
    <div className="w-full animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-6">
        Your Personalized Credit Card Recommendations
      </h2>
      
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto mb-6">
          {activeSegments.map((segment) => (
            <TabsTrigger 
              key={segment} 
              value={segment} 
              className="flex-grow"
            >
              {getSegmentName(segment as CardSegment)}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {activeSegments.map((segment) => (
          <TabsContent key={segment} value={segment} className="space-y-6 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations[segment as CardSegment].map((card) => (
                <CreditCardDisplay key={card.id} card={card} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default RecommendationsSection;
