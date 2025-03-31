
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type TravelFrequencyQuestionProps = {
  value: string;
  onChange: (value: "rarely" | "domestic" | "international") => void;
};

const TravelFrequencyQuestion = ({ value, onChange }: TravelFrequencyQuestionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">How often do you travel?</h3>
      <p className="text-sm text-muted-foreground">
        Travel-focused credit cards offer benefits like lounge access and travel insurance.
      </p>

      <RadioGroup defaultValue={value} className="mt-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="rarely" 
            id="rarely"
            onClick={() => onChange("rarely")}
          />
          <Label htmlFor="rarely">I rarely travel</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="domestic" 
            id="domestic"
            onClick={() => onChange("domestic")}
          />
          <Label htmlFor="domestic">I mostly travel domestically</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="international" 
            id="international"
            onClick={() => onChange("international")}
          />
          <Label htmlFor="international">I frequently travel internationally</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default TravelFrequencyQuestion;
