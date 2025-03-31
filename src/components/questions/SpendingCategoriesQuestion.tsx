
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type SpendingCategoriesQuestionProps = {
  value: {
    travel: boolean;
    shopping: boolean;
    dining: boolean;
    fuel: boolean;
    groceries: boolean;
  };
  onChange: (category: keyof typeof value, checked: boolean) => void;
};

const SpendingCategoriesQuestion = ({ value, onChange }: SpendingCategoriesQuestionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        What are your primary spending categories?
      </h3>
      <p className="text-sm text-muted-foreground">
        Select all categories where you spend regularly. This helps us find cards with relevant rewards.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="travel" 
            checked={value.travel}
            onCheckedChange={(checked) => onChange("travel", checked as boolean)}
          />
          <Label htmlFor="travel">Travel (flights, hotels)</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="shopping" 
            checked={value.shopping}
            onCheckedChange={(checked) => onChange("shopping", checked as boolean)}
          />
          <Label htmlFor="shopping">Shopping (online & retail)</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="dining" 
            checked={value.dining}
            onCheckedChange={(checked) => onChange("dining", checked as boolean)}
          />
          <Label htmlFor="dining">Dining & Entertainment</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="fuel" 
            checked={value.fuel}
            onCheckedChange={(checked) => onChange("fuel", checked as boolean)}
          />
          <Label htmlFor="fuel">Fuel & Transportation</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="groceries" 
            checked={value.groceries}
            onCheckedChange={(checked) => onChange("groceries", checked as boolean)}
          />
          <Label htmlFor="groceries">Groceries & Daily Essentials</Label>
        </div>
      </div>
    </div>
  );
};

export default SpendingCategoriesQuestion;
