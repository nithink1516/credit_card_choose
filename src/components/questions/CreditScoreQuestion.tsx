
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type CreditScoreQuestionProps = {
  value: string;
  onChange: (value: "unknown" | "below700" | "above700") => void;
};

const CreditScoreQuestion = ({ value, onChange }: CreditScoreQuestionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Do you know your credit score?</h3>
      <p className="text-sm text-muted-foreground">
        Your credit score affects which cards you might qualify for.
      </p>
      
      <RadioGroup defaultValue={value} className="mt-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="above700" 
            id="above700"
            onClick={() => onChange("above700")}
          />
          <Label htmlFor="above700">Yes, it's 700 or above</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="below700" 
            id="below700"
            onClick={() => onChange("below700")}
          />
          <Label htmlFor="below700">Yes, it's below 700</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="unknown" 
            id="unknown"
            onClick={() => onChange("unknown")}
          />
          <Label htmlFor="unknown">I don't know my credit score</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default CreditScoreQuestion;
