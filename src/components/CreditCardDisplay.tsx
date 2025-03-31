
import React from "react";
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
import { ExternalLink } from "lucide-react";
import { CreditCard as CreditCardType } from "@/types";

// Function to get the background color based on the card segment
const getCardBackground = (segment: string): string => {
  switch (segment) {
    case "entry-level":
      return "bg-segment-entry";
    case "travel":
      return "bg-segment-travel";
    case "shopping":
      return "bg-segment-shopping";
    case "dining":
      return "bg-segment-dining";
    case "fuel":
      return "bg-segment-fuel";
    case "premium":
      return "bg-segment-premium";
    default:
      return "bg-gray-100";
  }
};

// Function to get a friendly name for the segment
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

interface CreditCardDisplayProps {
  card: CreditCardType;
}

const CreditCardDisplay = ({ card }: CreditCardDisplayProps) => {
  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className={`${getCardBackground(card.segment)} rounded-t-lg`}>
        <div className="flex justify-between items-start">
          <div>
            <Badge className="mb-2">{getSegmentName(card.segment)}</Badge>
            <CardTitle className="text-xl">{card.name}</CardTitle>
            <CardDescription className="text-sm font-medium">
              Issued by {card.issuer}
            </CardDescription>
          </div>
        </div>
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
            <p>{card.rewards}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm text-muted-foreground">Key Features</h4>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              {card.features.map((feature, index) => (
                <li key={index} className="text-sm">{feature}</li>
              ))}
            </ul>
          </div>
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
  );
};

export default CreditCardDisplay;
