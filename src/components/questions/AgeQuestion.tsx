
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type AgeQuestionProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

const AgeQuestion = ({ value, onChange }: AgeQuestionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Are you above 18 years old?</h3>
      <p className="text-sm text-muted-foreground">
        Credit cards are only available to individuals who are 18 years or older.
      </p>
      
      <RadioGroup defaultValue={value ? "yes" : "no"} className="mt-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="yes" 
            id="yes-age"
            onClick={() => onChange(true)}
          />
          <Label htmlFor="yes-age">Yes, I am 18 years or older</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="no" 
            id="no-age"
            onClick={() => onChange(false)}
          />
          <Label htmlFor="no-age">No, I am under 18 years old</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default AgeQuestion;
