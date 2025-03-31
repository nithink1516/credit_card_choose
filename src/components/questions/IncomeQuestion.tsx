
import React from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type IncomeQuestionProps = {
  value: string;
  onChange: (value: string) => void;
};

const IncomeQuestion = ({ value, onChange }: IncomeQuestionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">What is your monthly income?</h3>
      <p className="text-sm text-muted-foreground">
        This helps us recommend cards appropriate for your income level.
      </p>
      
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select your monthly income range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="below15k">Less than ₹15,000</SelectItem>
          <SelectItem value="15k-25k">₹15,000 - ₹25,000</SelectItem>
          <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
          <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
          <SelectItem value="above100k">Above ₹1,00,000</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default IncomeQuestion;
