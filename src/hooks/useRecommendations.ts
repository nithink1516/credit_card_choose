
import { useMemo } from "react";
import { UserResponse, CreditCard, CardSegment } from "@/types";
import { creditCards } from "@/data/creditCards";

// Function to generate recommendations based on user responses
export const useRecommendations = (responses: UserResponse) => {
  const recommendations = useMemo(() => {
    // Initialize empty recommendations
    const result: Record<CardSegment, CreditCard[]> = {
      "entry-level": [],
      "travel": [],
      "shopping": [],
      "dining": [],
      "fuel": [],
      "premium": [],
    };

    // If user is under 18, return empty recommendations
    if (!responses.age) {
      return result;
    }

    // Filter cards based on annual fee preference
    let filteredCards = [...creditCards];
    if (responses.annualFee === "no") {
      filteredCards = filteredCards.filter(card => card.annualFee === 0);
    }

    // Consider income level for premium cards
    const isPremiumEligible = ["50k-100k", "above100k"].includes(responses.income);
    if (!isPremiumEligible) {
      filteredCards = filteredCards.filter(card => card.segment !== "premium");
    }

    // Consider spending categories
    if (responses.spendingCategories.travel || responses.travelFrequency === "international") {
      const travelCards = filteredCards.filter(card => card.segment === "travel");
      result.travel = travelCards;
    }

    if (responses.spendingCategories.shopping) {
      const shoppingCards = filteredCards.filter(card => card.segment === "shopping");
      // Add Amazon card if user is interested in Amazon co-branded card
      if (responses.cobrandedInterest.amazon) {
        const amazonCard = filteredCards.find(card => card.id === "amazon-pay-icici");
        if (amazonCard && !shoppingCards.find(card => card.id === amazonCard.id)) {
          shoppingCards.push(amazonCard);
        }
      }
      // Add Tata Neu card if user is interested in Tata co-branded card
      if (responses.cobrandedInterest.tata) {
        const tataCard = filteredCards.find(card => card.id === "tata-neu-infinity");
        if (tataCard && !shoppingCards.find(card => card.id === tataCard.id)) {
          shoppingCards.push(tataCard);
        }
      }
      result.shopping = shoppingCards;
    }

    if (responses.spendingCategories.dining || responses.diningOut) {
      const diningCards = filteredCards.filter(card => card.segment === "dining");
      result.dining = diningCards;
    }

    if (responses.spendingCategories.fuel || responses.additionalBenefits.fuelSurcharge) {
      const fuelCards = filteredCards.filter(card => card.segment === "fuel");
      result.fuel = fuelCards;
    }

    // Always include entry-level cards as fallback
    const entryLevelCards = filteredCards.filter(card => card.segment === "entry-level");
    result["entry-level"] = entryLevelCards;

    // Add premium cards if eligible and willing to pay annual fee
    if (isPremiumEligible && responses.annualFee === "yes") {
      const premiumCards = filteredCards.filter(card => card.segment === "premium");
      result.premium = premiumCards;
    }

    return result;
  }, [responses]);

  return recommendations;
};
