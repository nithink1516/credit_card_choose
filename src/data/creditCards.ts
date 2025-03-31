
import { CreditCard } from '../types';

export const creditCards: CreditCard[] = [
  // Entry-Level Cards
  {
    id: "sbi-cashback",
    name: "SBI Cashback Credit Card",
    issuer: "SBI Card",
    segment: "entry-level",
    annualFee: 999,
    features: [
      "Low annual fee (waived on spending threshold)",
      "1% cashback on all online spends",
      "5% cashback on SBI partners"
    ],
    rewards: "Up to 5% cashback on select categories",
    applicationLink: "https://www.sbicard.com/en/personal/credit-cards/cashback-card.page"
  },
  {
    id: "amazon-pay-icici",
    name: "Amazon Pay ICICI Credit Card",
    issuer: "ICICI Bank",
    segment: "entry-level",
    annualFee: 0,
    features: [
      "Lifetime free card",
      "5% cashback for Prime members on Amazon",
      "3% cashback for non-Prime members on Amazon",
      "2% cashback on Amazon partner merchants"
    ],
    rewards: "Up to 5% cashback on Amazon purchases",
    applicationLink: "https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Amazon-Pay-Credit-Card.page"
  },
  
  // Travel Cards
  {
    id: "axis-atlas",
    name: "Axis Bank Atlas Credit Card",
    issuer: "Axis Bank",
    segment: "travel",
    annualFee: 3000,
    features: [
      "6 complimentary domestic lounge access per year",
      "2 complimentary international lounge access per year",
      "Hotel discounts and privileges",
      "10x reward points on travel bookings"
    ],
    rewards: "Air miles conversion, hotel discounts, lounge access",
    applicationLink: "https://www.axisbank.com/retail/cards/credit-card"
  },
  {
    id: "amex-platinum-travel",
    name: "American Express Platinum Travel Credit Card",
    issuer: "American Express",
    segment: "travel",
    annualFee: 5000,
    features: [
      "8 complimentary domestic lounge access per year",
      "4X Membership Rewards Points on all purchases",
      "Travel and dining benefits",
      "Emergency card replacement worldwide"
    ],
    rewards: "Membership rewards points, lounge access, travel insurance",
    applicationLink: "https://www.americanexpress.com/in/credit-cards/platinum-travel/"
  },
  
  // Shopping Cards
  {
    id: "hdfc-regalia-gold",
    name: "HDFC Regalia Gold Credit Card",
    issuer: "HDFC Bank",
    segment: "shopping",
    annualFee: 2500,
    features: [
      "10,000 welcome points",
      "4x rewards on weekend dining",
      "E-commerce protection on online purchases",
      "1% fuel surcharge waiver"
    ],
    rewards: "Shopping benefits and e-commerce purchase protection",
    applicationLink: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/regalia-gold-credit-card"
  },
  {
    id: "tata-neu-infinity",
    name: "Tata Neu Infinity HDFC Bank Credit Card",
    issuer: "HDFC Bank",
    segment: "shopping",
    annualFee: 2500,
    features: [
      "5% NeuCoins on Tata Neu app and partner brands",
      "1.5% NeuCoins on all other spends",
      "Welcome benefits worth ₹5,000",
      "Complimentary domestic lounge access"
    ],
    rewards: "NeuCoins for Tata brand purchases and all other spending",
    applicationLink: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/tata-neu-infinity-credit-card"
  },
  
  // Dining & Entertainment Cards
  {
    id: "icici-coral",
    name: "ICICI Coral Credit Card",
    issuer: "ICICI Bank",
    segment: "dining",
    annualFee: 500,
    features: [
      "2 movie tickets worth ₹500 every month on BookMyShow",
      "4 PAYBACK points per ₹100 spent on dining, groceries",
      "2 PAYBACK points per ₹100 on other categories",
      "PAYBACK points can be redeemed for various products and services"
    ],
    rewards: "Free movie tickets, dining discounts",
    applicationLink: "https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/coral-credit-card.page"
  },
  {
    id: "hdfc-millennia",
    name: "HDFC Millennia Credit Card",
    issuer: "HDFC Bank",
    segment: "dining",
    annualFee: 1000,
    features: [
      "5% cashback on Amazon, Flipkart, Swiggy, Zomato",
      "2.5% cashback on all online spends",
      "1% cashback on offline spends",
      "Entertainment benefits like 1+1 movie tickets"
    ],
    rewards: "Dining discounts and entertainment perks",
    applicationLink: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/millennia"
  },
  
  // Fuel Cards
  {
    id: "bpcl-sbi-card",
    name: "BPCL SBI Credit Card",
    issuer: "SBI Card",
    segment: "fuel",
    annualFee: 499,
    features: [
      "25X reward points on every ₹100 spent at BPCL outlets",
      "1% fuel surcharge waiver at BPCL outlets",
      "5X reward points on groceries, movies, and departmental stores",
      "Welcome gift of 2000 reward points on card activation"
    ],
    rewards: "Fuel surcharge waivers and cashback on fuel purchases",
    applicationLink: "https://www.sbicard.com/en/personal/credit-cards/shopping/bpcl-sbi-card.page"
  },
  {
    id: "indianoil-rbl-card",
    name: "IndianOil RBL Bank XTRA Credit Card",
    issuer: "RBL Bank",
    segment: "fuel",
    annualFee: 500,
    features: [
      "5% cashback on fuel spends at IndianOil outlets",
      "1% fuel surcharge waiver",
      "2X reward points on grocery and bill payments",
      "1 reward point per ₹100 on other spends"
    ],
    rewards: "Fuel cashback and surcharge waiver benefits",
    applicationLink: "https://www.rblbank.com/credit-card/indianoil"
  },
  
  // Premium Cards
  {
    id: "hdfc-infinia",
    name: "HDFC Infinia Credit Card",
    issuer: "HDFC Bank",
    segment: "premium",
    annualFee: 10000,
    features: [
      "Premium metal card design",
      "5X rewards on all spends",
      "10X rewards on partner merchants",
      "Unlimited airport lounge access worldwide",
      "Golf privileges across 15 courses in India",
      "Concierge services"
    ],
    rewards: "High reward rates and premium lifestyle benefits",
    applicationLink: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/infinia"
  },
  {
    id: "axis-reserve",
    name: "Axis Bank Reserve Credit Card",
    issuer: "Axis Bank",
    segment: "premium",
    annualFee: 50000,
    features: [
      "Super-premium metal card",
      "8 complimentary VIP airport services annually",
      "Unlimited domestic and international lounge access",
      "Personal concierge services",
      "Golf privileges at top courses"
    ],
    rewards: "Luxury benefits and high-value rewards",
    applicationLink: "https://www.axisbank.com/retail/cards/credit-card/reserve"
  }
];

// Get cards by segment
export const getCardsBySegment = (segment: string) => {
  return creditCards.filter(card => card.segment === segment);
};
