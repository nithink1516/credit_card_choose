
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserResponse } from "@/types";

type QuestionnaireCardProps = {
  currentStep: number;
  totalSteps: number;
  question: React.ReactNode;
  onNext: () => void;
  onPrev: () => void;
  canProceed: boolean;
};

const QuestionnaireCard = ({
  currentStep,
  totalSteps,
  question,
  onNext,
  onPrev,
  canProceed,
}: QuestionnaireCardProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto animate-fade-in shadow-lg">
      <CardHeader className="bg-navy/5 rounded-t-lg">
        <CardTitle className="text-2xl">Find Your Perfect Credit Card</CardTitle>
        <CardDescription>
          Step {currentStep} of {totalSteps}
        </CardDescription>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 pb-4">{question}</CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button
          variant="outline"
          onClick={onPrev}
          disabled={currentStep === 1}
          className="w-24"
        >
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!canProceed}
          className="w-24 bg-blue hover:bg-blue-light"
        >
          {currentStep === totalSteps ? "Finish" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionnaireCard;
