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

    const formattedPrompt = `Generate mermaid sequence diagram from this text: ${prompt} in JSON format example: { "mermaid": "{mermaid_syntax}"}`;

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0125',
        messages: [{ role: 'user', content: formattedPrompt }],
        // max_tokens: 1000,
        response_format: { "type": "json_object" }
        });

      console.log('OpenAI completion response:', completion);
      console.log('Generated completion:', completion.choices[0].message.content);
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