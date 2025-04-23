// backend/api/companion.ts

import express, { Request, Response } from 'express';
import { z } from 'zod';
import { validateUser } from '../utils/validateUser';
import { callCompanionAgent } from '../agents/callCompanionAgent';

const router = express.Router();

// Define input schema using Zod
const CompanionRequestSchema = z.object({
    userId: z.string(),
    familyId: z.string(),
    message: z.string(),
});

// POST /api/companion
router.post('/companion', async (req: Request, res: Response) => {
    try {
        const input = CompanionRequestSchema.parse(req.body);

        const isValid = await validateUser(input.userId, input.familyId);
        if (!isValid) return res.status(403).json({ error: 'Unauthorized' });

        const response = await callCompanionAgent({
            userId: input.userId,
            familyId: input.familyId,
            message: input.message,
        });

        return res.status(200).json({ response });
    } catch (error) {
        console.error('❌ Companion API error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;