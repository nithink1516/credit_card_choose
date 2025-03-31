
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type DiningQuestionProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

const DiningQuestion = ({ value, onChange }: DiningQuestionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Do you frequently dine out or spend on entertainment?</h3>
      <p className="text-sm text-muted-foreground">
        Some cards offer special benefits for dining and entertainment expenses.
      </p>

      <RadioGroup defaultValue={value ? "yes" : "no"} className="mt-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="yes" 
            id="yes-dining"
            onClick={() => onChange(true)}
          />
          <Label htmlFor="yes-dining">Yes, I often dine out and/or go to movies, events, etc.</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="no" 
            id="no-dining"
            onClick={() => onChange(false)}
          />
          <Label htmlFor="no-dining">No, I don't spend much on dining or entertainment</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default DiningQuestion;
