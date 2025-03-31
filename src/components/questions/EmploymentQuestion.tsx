
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type EmploymentQuestionProps = {
  value: string;
  onChange: (value: "salaried" | "self-employed") => void;
};

const EmploymentQuestion = ({ value, onChange }: EmploymentQuestionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Are you salaried or self-employed?</h3>
      <p className="text-sm text-muted-foreground">
        Different cards cater to different employment types.
      </p>
      
      <RadioGroup defaultValue={value} className="mt-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="salaried" 
            id="salaried"
            onClick={() => onChange("salaried")}
          />
          <Label htmlFor="salaried">Salaried</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="self-employed" 
            id="self-employed"
            onClick={() => onChange("self-employed")}
          />
          <Label htmlFor="self-employed">Self-employed</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default EmploymentQuestion;
