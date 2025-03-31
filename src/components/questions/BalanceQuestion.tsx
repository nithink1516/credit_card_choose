
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type BalanceQuestionProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

const BalanceQuestion = ({ value, onChange }: BalanceQuestionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Do you plan to carry a balance on your card?</h3>
      <p className="text-sm text-muted-foreground">
        If you plan to carry a balance, a card with a lower interest rate may be more important 
        than one with better rewards.
      </p>

      <RadioGroup defaultValue={value ? "yes" : "no"} className="mt-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="yes" 
            id="yes-balance"
            onClick={() => onChange(true)}
          />
          <Label htmlFor="yes-balance">Yes, I might need to carry a balance</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="no" 
            id="no-balance"
            onClick={() => onChange(false)}
          />
          <Label htmlFor="no-balance">No, I plan to pay in full each month</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default BalanceQuestion;
