
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type AnnualFeeQuestionProps = {
  value: string;
  onChange: (value: "yes" | "no") => void;
};

const AnnualFeeQuestion = ({ value, onChange }: AnnualFeeQuestionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Are you comfortable paying an annual fee?</h3>
      <p className="text-sm text-muted-foreground">
        Premium cards typically have annual fees but offer better rewards and benefits.
      </p>

      <RadioGroup defaultValue={value} className="mt-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="yes" 
            id="yes-fee"
            onClick={() => onChange("yes")}
          />
          <Label htmlFor="yes-fee">Yes, I'm willing to pay for better benefits</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="no" 
            id="no-fee"
            onClick={() => onChange("no")}
          />
          <Label htmlFor="no-fee">No, I prefer lifetime-free cards</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default AnnualFeeQuestion;
