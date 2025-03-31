
// User question response types
export type UserResponse = {
  age: boolean;
  income: string;
  employmentType: "salaried" | "self-employed" | "";
  creditScore: "unknown" | "below700" | "above700";
  spendingCategories: {
    travel: boolean;
    shopping: boolean;
    dining: boolean;
    fuel: boolean;
    groceries: boolean;
  };
  preferredRewards: "cashback" | "points" | "travel" | "";
  travelFrequency: "rarely" | "domestic" | "international" | "";
  diningOut: boolean;
  cobrandedInterest: {
    amazon: boolean;
    tata: boolean;
    none: boolean;
  };
  annualFee: "yes" | "no" | "";
  carryBalance: boolean;
  additionalBenefits: {
    insurance: boolean;
    fuelSurcharge: boolean;
    none: boolean;
  };
};

// Credit card data type
export type CreditCard = {
  id: string;
  name: string;
  issuer: string;
  segment: CardSegment;
  annualFee: number;
  features: string[];
  rewards: string;
  applicationLink: string;
  imageUrl?: string;
};

// Card segments/categories
export type CardSegment = 
  | "entry-level" 
  | "travel" 
  | "shopping" 
  | "dining" 
  | "fuel" 
  | "premium";

// Default responses for a new user
export const defaultUserResponses: UserResponse = {
  age: false,
  income: "",
  employmentType: "",
  creditScore: "unknown",
  spendingCategories: {
    travel: false,
    shopping: false,
    dining: false,
    fuel: false,
    groceries: false,
  },
  preferredRewards: "",
  travelFrequency: "",
  diningOut: false,
  cobrandedInterest: {
    amazon: false,
    tata: false,
    none: true,
  },
  annualFee: "",
  carryBalance: false,
  additionalBenefits: {
    insurance: false,
    fuelSurcharge: false,
    none: true,
  },
};
