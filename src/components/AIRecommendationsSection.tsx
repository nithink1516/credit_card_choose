
import React from "react";
import { AIRecommendation } from "@/hooks/useAIRecommendations";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Loader2 } from "lucide-react";

interface AIRecommendationsSectionProps {
  recommendations: AIRecommendation[];
  loading: boolean;
  error: string | null;
}

const AIRecommendationsSection = ({ 
  recommendations, 
  loading, 
  error 
}: AIRecommendationsSectionProps) => {
  
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue mb-4" />
        <h2 className="text-2xl font-bold">Generating Your Personalized Recommendations</h2>
        <p className="text-muted-foreground mt-2">
          Our AI is analyzing your profile and finding the best credit cards for you...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600">Error Generating Recommendations</h2>
        <p className="text-muted-foreground mt-2">{error}</p>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">No Recommendations Available</h2>
        <p className="text-muted-foreground mt-2">
          Unable to generate recommendations at this time. Please try again.
        </p>
      </div>
    );
  }

  const getSegmentColor = (segment: string): string => {
    switch (segment) {
      case "entry-level":
        return "bg-green-100 text-green-800";
      case "travel":
        return "bg-blue-100 text-blue-800";
      case "shopping":
        return "bg-purple-100 text-purple-800";
      case "dining":
        return "bg-orange-100 text-orange-800";
      case "fuel":
        return "bg-yellow-100 text-yellow-800";
      case "premium":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSegmentName = (segment: string): string => {
    switch (segment) {
      case "entry-level":
        return "Entry Level";
      case "travel":
        return "Travel";
      case "shopping":
        return "Shopping";
      case "dining":
        return "Dining & Entertainment";
      case "fuel":
        return "Fuel";
      case "premium":
        return "Premium";
      default:
        return segment;
    }
  };

  return (
    <div className="w-full animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-2">
        Your AI-Powered Credit Card Recommendations
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        Personalized recommendations based on your profile and current market offerings
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((card) => (
          <Card key={card.id} className="w-full shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge className={getSegmentColor(card.segment)}>
                  {getSegmentName(card.segment)}
                </Badge>
              </div>
              <CardTitle className="text-xl">{card.name}</CardTitle>
              <CardDescription className="text-sm font-medium">
                Issued by {card.issuer}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">Annual Fee</h4>
                  <p className="font-medium">
                    {card.annualFee === 0 ? "No Annual Fee" : `₹${card.annualFee}`}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">Rewards</h4>
                  <p className="text-sm">{card.rewards}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    {card.features.map((feature, index) => (
                      <li key={index} className="text-sm">{feature}</li>
                    ))}
                  </ul>
                </div>

                {card.reasoning && (
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Why This Card?</h4>
                    <p className="text-sm text-blue-600 italic">{card.reasoning}</p>
                  </div>
                )}
              </div>
            </CardContent>
            
            <CardFooter className="border-t pt-4">
              <Button 
                className="w-full bg-blue hover:bg-blue-light" 
                onClick={() => window.open(card.applicationLink, "_blank", "noopener noreferrer")}
              >
                Apply Now <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendationsSection;
