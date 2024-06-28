import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Received ${req.method} request at ${new Date().toISOString()}`);

  if (req.method === 'POST') {
    const { prompt } = req.body;
    console.log(`Request body: ${JSON.stringify(req.body)}`);

    if (!prompt) {
      console.log('Prompt is missing in the request body');
      return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 100,
      });

      console.log('OpenAI completion response:', completion);
      return res.status(200).json({ result: completion.choices[0].message.content });
    } catch (error) {
      console.error('Error generating completion:', error);
      return res.status(500).json({ error: 'Error generating completion' });
    }
  } else {
    console.log(`Method ${req.method} not allowed`);
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}