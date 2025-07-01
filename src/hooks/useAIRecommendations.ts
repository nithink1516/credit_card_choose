
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { UserResponse } from "@/types";

export interface AIRecommendation {
  id: string;
  name: string;
  issuer: string;
  segment: string;
  annualFee: number;
  features: string[];
  rewards: string;
  applicationLink: string;
  reasoning?: string;
}

export const useAIRecommendations = () => {
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateRecommendations = async (userResponses: UserResponse) => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Calling AI recommendations function with:', userResponses);
      
      const { data, error: functionError } = await supabase.functions.invoke(
        'ai-credit-card-recommendations',
        {
          body: { userResponses }
        }
      );

      if (functionError) {
        throw new Error(functionError.message);
      }

      console.log('AI recommendations response:', data);
      setRecommendations(data.recommendations || []);
      
    } catch (err) {
      console.error('Error generating AI recommendations:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate recommendations');
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    recommendations,
    loading,
    error,
    generateRecommendations
  };
};
