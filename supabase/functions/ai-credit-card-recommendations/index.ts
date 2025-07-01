
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userResponses } = await req.json();
    console.log('Received user responses:', userResponses);

    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    // Create a detailed prompt for OpenAI
    const prompt = `
You are a credit card recommendation expert. Based on the user's profile below, recommend 3-5 credit cards that would be most suitable for them. 

User Profile:
- Age: ${userResponses.age ? '18+' : 'Under 18'}
- Income: ${userResponses.income}
- Employment: ${userResponses.employmentType}
- Credit Score: ${userResponses.creditScore}
- Spending Categories: ${Object.entries(userResponses.spendingCategories).filter(([_, value]) => value).map(([key]) => key).join(', ')}
- Preferred Rewards: ${userResponses.preferredRewards}
- Travel Frequency: ${userResponses.travelFrequency}
- Dining Out: ${userResponses.diningOut ? 'Yes' : 'No'}
- Co-branded Interest: ${Object.entries(userResponses.cobrandedInterest).filter(([_, value]) => value).map(([key]) => key).join(', ')}
- Annual Fee Preference: ${userResponses.annualFee}
- Carry Balance: ${userResponses.carryBalance ? 'Yes' : 'No'}
- Additional Benefits: ${Object.entries(userResponses.additionalBenefits).filter(([_, value]) => value).map(([key]) => key).join(', ')}

Please provide recommendations in the following JSON format:
{
  "recommendations": [
    {
      "id": "unique-card-id",
      "name": "Card Name",
      "issuer": "Bank Name",
      "segment": "entry-level|travel|shopping|dining|fuel|premium",
      "annualFee": 0,
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "rewards": "Description of rewards structure",
      "applicationLink": "https://example.com/apply",
      "reasoning": "Why this card is recommended for the user"
    }
  ]
}

Focus on real, currently available credit cards in India. Consider the user's income level, spending patterns, and preferences. Provide practical recommendations with actual card names and issuers.
`;

    console.log('Calling OpenAI API...');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: 'You are a credit card expert who provides personalized recommendations based on user profiles. Always respond with valid JSON format.' 
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response received');
    
    const aiResponse = data.choices[0].message.content;
    console.log('AI response:', aiResponse);
    
    // Parse the JSON response from OpenAI
    let recommendations;
    try {
      const parsedResponse = JSON.parse(aiResponse);
      recommendations = parsedResponse.recommendations || [];
    } catch (parseError) {
      console.error('Failed to parse OpenAI response as JSON:', parseError);
      // Fallback: try to extract JSON from the response
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        recommendations = JSON.parse(jsonMatch[0]).recommendations || [];
      } else {
        throw new Error('Failed to parse OpenAI response');
      }
    }

    console.log('Parsed recommendations:', recommendations);

    return new Response(JSON.stringify({ recommendations }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-credit-card-recommendations function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      recommendations: [] 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
