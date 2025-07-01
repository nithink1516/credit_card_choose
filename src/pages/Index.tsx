import React, { useState } from "react";
import { UserResponse, defaultUserResponses } from "@/types";
import QuestionnaireCard from "@/components/QuestionnaireCard";
import AgeQuestion from "@/components/questions/AgeQuestion";
import IncomeQuestion from "@/components/questions/IncomeQuestion";
import EmploymentQuestion from "@/components/questions/EmploymentQuestion";
import CreditScoreQuestion from "@/components/questions/CreditScoreQuestion";
import SpendingCategoriesQuestion from "@/components/questions/SpendingCategoriesQuestion";
import RewardsPreferenceQuestion from "@/components/questions/RewardsPreferenceQuestion";
import TravelFrequencyQuestion from "@/components/questions/TravelFrequencyQuestion";
import DiningQuestion from "@/components/questions/DiningQuestion";
import CobrandedQuestion from "@/components/questions/CobrandedQuestion";
import AnnualFeeQuestion from "@/components/questions/AnnualFeeQuestion";
import BalanceQuestion from "@/components/questions/BalanceQuestion";
import AdditionalBenefitsQuestion from "@/components/questions/AdditionalBenefitsQuestion";
import { Button } from "@/components/ui/button";
import { CreditCard, User } from "lucide-react";
import AuthPage from "@/components/AuthPage";
import { useAuth } from "@/hooks/useAuth";

import { useAIRecommendations } from "@/hooks/useAIRecommendations";
import AIRecommendationsSection from "@/components/AIRecommendationsSection";

const Index = () => {
  const [step, setStep] = useState(1);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [responses, setResponses] = useState<UserResponse>(defaultUserResponses);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const { user, signOut } = useAuth();
  
  const { recommendations, loading, error, generateRecommendations } = useAIRecommendations();
  
  // Total number of steps/questions
  const totalSteps = 12;

  // Update a specific response
  const updateResponse = (field: keyof UserResponse, value: any) => {
    setResponses(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle updating nested objects in responses
  const updateNestedResponse = (
    category: keyof UserResponse, 
    field: string, 
    value: any
  ) => {
    setResponses(prev => ({
      ...prev,
      [category]: {
        ...(prev[category] as Record<string, any>),
        [field]: value
      }
    }));
  };

  // Go to next step
  const handleNext = async () => {
    if (step === 1 && !responses.age) {
      // If user is under 18, skip to recommendations
      setShowQuestionnaire(false);
      setShowRecommendations(true);
      return;
    }

    if (step < totalSteps) {
      setStep(prev => prev + 1);
    } else {
      // Complete the questionnaire and generate AI recommendations
      setShowQuestionnaire(false);
      setShowRecommendations(true);
      console.log('Generating AI recommendations with responses:', responses);
      await generateRecommendations(responses);
    }
  };

  // Go to previous step
  const handlePrev = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  // Start the questionnaire
  const startQuestionnaire = () => {
    setShowQuestionnaire(true);
    setShowRecommendations(false);
    setStep(1);
    setResponses(defaultUserResponses);
  };

  // Determine if user can proceed based on current step validation
  const canProceed = () => {
    switch (step) {
      case 1: // Age
        return true; // Always allow to proceed (under 18 will be handled in handleNext)
      case 2: // Income
        return !!responses.income;
      case 3: // Employment
        return !!responses.employmentType;
      case 4: // Credit Score
        return true; // All options valid including "unknown"
      case 5: // Spending Categories
        return Object.values(responses.spendingCategories).some(val => val);
      case 6: // Rewards Preference
        return !!responses.preferredRewards;
      case 7: // Travel Frequency
        return !!responses.travelFrequency;
      case 8: // Dining Out
        return true; // Boolean field always valid
      case 9: // Co-branded Interest
        return Object.values(responses.cobrandedInterest).some(val => val);
      case 10: // Annual Fee
        return !!responses.annualFee;
      case 11: // Balance
        return true; // Boolean field always valid
      case 12: // Additional Benefits
        return Object.values(responses.additionalBenefits).some(val => val);
      default:
        return true;
    }
  };

  // Get the current question based on step
  const getCurrentQuestion = () => {
    switch (step) {
      case 1:
        return (
          <AgeQuestion 
            value={responses.age} 
            onChange={(value) => updateResponse("age", value)} 
          />
        );
      case 2:
        return (
          <IncomeQuestion 
            value={responses.income} 
            onChange={(value) => updateResponse("income", value)} 
          />
        );
      case 3:
        return (
          <EmploymentQuestion 
            value={responses.employmentType} 
            onChange={(value) => updateResponse("employmentType", value)} 
          />
        );
      case 4:
        return (
          <CreditScoreQuestion 
            value={responses.creditScore} 
            onChange={(value) => updateResponse("creditScore", value)} 
          />
        );
      case 5:
        return (
          <SpendingCategoriesQuestion 
            value={responses.spendingCategories} 
            onChange={(category: string, value: boolean) => 
              updateNestedResponse("spendingCategories", category, value)
            } 
          />
        );
      case 6:
        return (
          <RewardsPreferenceQuestion 
            value={responses.preferredRewards} 
            onChange={(value) => updateResponse("preferredRewards", value)} 
          />
        );
      case 7:
        return (
          <TravelFrequencyQuestion 
            value={responses.travelFrequency} 
            onChange={(value) => updateResponse("travelFrequency", value)} 
          />
        );
      case 8:
        return (
          <DiningQuestion 
            value={responses.diningOut} 
            onChange={(value) => updateResponse("diningOut", value)} 
          />
        );
      case 9:
        return (
          <CobrandedQuestion 
            value={responses.cobrandedInterest}
            onChange={(brand: string, value: boolean) => 
              updateNestedResponse("cobrandedInterest", brand, value)
            } 
          />
        );
      case 10:
        return (
          <AnnualFeeQuestion 
            value={responses.annualFee} 
            onChange={(value) => updateResponse("annualFee", value)} 
          />
        );
      case 11:
        return (
          <BalanceQuestion 
            value={responses.carryBalance} 
            onChange={(value) => updateResponse("carryBalance", value)} 
          />
        );
      case 12:
        return (
          <AdditionalBenefitsQuestion 
            value={responses.additionalBenefits}
            onChange={(benefit: string, value: boolean) => 
              updateNestedResponse("additionalBenefits", benefit, value)
            } 
          />
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  // If user is not authenticated, show auth page
  if (!user) {
    return <AuthPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-navy text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <CreditCard className="mr-2" /> CardWise AI
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{user.email}</span>
            </div>
            <Button 
              onClick={signOut}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col">
        {!showQuestionnaire && !showRecommendations ? (
          /* Landing/Welcome Screen */
          <div className="flex flex-col items-center justify-center flex-grow text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Find Your Perfect Credit Card with AI
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Answer a few questions about your spending habits and preferences, 
              and our AI will analyze real-time market data to recommend the best credit cards for you.
            </p>
            <Button 
              onClick={startQuestionnaire}
              className="bg-blue hover:bg-blue-light text-white font-bold py-3 px-8 rounded-md text-lg"
            >
              Get AI-Powered Recommendations
            </Button>
          </div>
        ) : showQuestionnaire ? (
          /* Questionnaire */
          <div className="max-w-2xl mx-auto w-full">
            <QuestionnaireCard
              currentStep={step}
              totalSteps={totalSteps}
              question={getCurrentQuestion()}
              onNext={handleNext}
              onPrev={handlePrev}
              canProceed={canProceed()}
            />
          </div>
        ) : (
          /* AI Recommendations */
          <div className="w-full max-w-6xl mx-auto">
            <AIRecommendationsSection 
              recommendations={recommendations}
              loading={loading}
              error={error}
            />
            <div className="text-center mt-8">
              <Button 
                onClick={startQuestionnaire}
                variant="outline"
                className="border-blue text-blue hover:bg-blue hover:text-white"
              >
                Start Over
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-navy-light py-4 px-6 text-white text-center">
        <p>© 2023 CardWise AI - AI-powered credit card recommendations</p>
      </footer>
    </div>
  );
};

export default Index;
