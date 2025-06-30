
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type CobrandedQuestionProps = {
  value: {
    amazon: boolean;
    tata: boolean;
    none: boolean;
  };
  onChange: (brand: keyof CobrandedQuestionProps['value'], checked: boolean) => void;
};

const CobrandedQuestion = ({ value, onChange }: CobrandedQuestionProps) => {
  const handleNoneChange = (checked: boolean) => {
    if (checked) {
      // If "None" is checked, uncheck others
      onChange("none", true);
      onChange("amazon", false);
      onChange("tata", false);
    } else {
      onChange("none", false);
    }
  };

  const handleOtherChange = (brand: "amazon" | "tata", checked: boolean) => {
    onChange(brand, checked);
    // If any specific brand is checked, uncheck "None"
    if (checked) {
      onChange("none", false);
    }
    // If all brands are unchecked, check "None"
    else if (!value.amazon && !value.tata) {
      onChange("none", true);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        Are you interested in co-branded cards?
      </h3>
      <p className="text-sm text-muted-foreground">
        Co-branded cards offer enhanced rewards with specific merchants.
      </p>

      <div className="space-y-3 mt-4">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="amazon" 
            checked={value.amazon}
            onCheckedChange={(checked) => handleOtherChange("amazon", checked as boolean)}
          />
          <Label htmlFor="amazon">Amazon (enhanced rewards on Amazon shopping)</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="tata" 
            checked={value.tata}
            onCheckedChange={(checked) => handleOtherChange("tata", checked as boolean)}
          />
          <Label htmlFor="tata">Tata Neu (rewards on Tata group brands)</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="none" 
            checked={value.none}
            onCheckedChange={(checked) => handleNoneChange(checked as boolean)}
          />
          <Label htmlFor="none">I'm not interested in co-branded cards</Label>
        </div>
      </div>
    </div>
  );
};

export default CobrandedQuestion;
