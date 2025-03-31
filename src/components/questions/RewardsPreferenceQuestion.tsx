
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type RewardsPreferenceQuestionProps = {
  value: string;
  onChange: (value: "cashback" | "points" | "travel") => void;
};

const RewardsPreferenceQuestion = ({ value, onChange }: RewardsPreferenceQuestionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        What type of rewards do you prefer?
      </h3>
      <p className="text-sm text-muted-foreground">
        Different cards offer different types of rewards.
      </p>

      <RadioGroup defaultValue={value} className="mt-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="cashback" 
            id="cashback"
            onClick={() => onChange("cashback")}
          />
          <Label htmlFor="cashback">Cashback (money back on purchases)</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="points" 
            id="points"
            onClick={() => onChange("points")}
          />
          <Label htmlFor="points">Reward points (can be redeemed for products/services)</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="travel" 
            id="travel"
            onClick={() => onChange("travel")}
          />
          <Label htmlFor="travel">Travel perks (air miles, lounge access)</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default RewardsPreferenceQuestion;
