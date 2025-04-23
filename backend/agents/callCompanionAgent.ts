// backend/agents/callCompanionAgent.ts

import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

interface AgentInput {
    userId: string;
    familyId: string;
    message: string;
}

export const callCompanionAgent = async ({ userId, familyId, message }: AgentInput): Promise<string> => {
    try {
        const systemPrompt = `You are the Companion AI for Ignis Vita. Speak with wisdom, warmth, and purpose. The user is from family ${familyId}.`;

        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: message },
            ],
        });

        return completion.choices[0]?.message?.content?.trim() || 'No response generated.';
    } catch (error) {
        console.error('❌ Error in Companion agent:', error);
        return 'Sorry, there was a problem connecting to the Companion.';
    }
};
