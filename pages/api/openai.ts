import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const completion = await openai.completions.create({
          model: 'text-davinci-003',
          prompt,
        max_tokens: 100,
      });

      return res.status(200).json({ result: completion.choices[0].text });
    } catch (error) {
      return res.status(500).json({ error: 'Error generating completion' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}