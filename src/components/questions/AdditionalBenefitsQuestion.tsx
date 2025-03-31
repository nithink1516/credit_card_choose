
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type AdditionalBenefitsQuestionProps = {
  value: {
    insurance: boolean;
    fuelSurcharge: boolean;
    none: boolean;
  };
  onChange: (benefit: keyof typeof value, checked: boolean) => void;
};

const AdditionalBenefitsQuestion = ({ value, onChange }: AdditionalBenefitsQuestionProps) => {
  const handleNoneChange = (checked: boolean) => {
    if (checked) {
      // If "None" is checked, uncheck others
      onChange("none", true);
      onChange("insurance", false);
      onChange("fuelSurcharge", false);
    } else {
      onChange("none", false);
    }
  };

  const handleOtherChange = (benefit: "insurance" | "fuelSurcharge", checked: boolean) => {
    onChange(benefit, checked);
    // If any specific benefit is checked, uncheck "None"
    if (checked) {
      onChange("none", false);
    }
    // If all benefits are unchecked, check "None"
    else if (!value.insurance && !value.fuelSurcharge) {
      onChange("none", true);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        What additional benefits are important to you?
      </h3>
      <p className="text-sm text-muted-foreground">
        Select any additional benefits that might be valuable to you.
      </p>

      <div className="space-y-3 mt-4">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="insurance" 
            checked={value.insurance}
            onCheckedChange={(checked) => handleOtherChange("insurance", checked as boolean)}
          />
          <Label htmlFor="insurance">Insurance coverage (travel, purchase protection)</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="fuelSurcharge" 
            checked={value.fuelSurcharge}
            onCheckedChange={(checked) => handleOtherChange("fuelSurcharge", checked as boolean)}
          />
          <Label htmlFor="fuelSurcharge">Fuel surcharge waivers</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="none-benefits" 
            checked={value.none}
            onCheckedChange={(checked) => handleNoneChange(checked as boolean)}
          />
          <Label htmlFor="none-benefits">No specific additional benefits</Label>
        </div>
      </div>
    </div>
  );
};

export default AdditionalBenefitsQuestion;
