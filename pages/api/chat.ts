import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  reply: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // 在这里集成AI模型，例如OpenAI的API
    // 下面是一个假设的AI回复
    const aiReply = `您说的是: ${message}`;

    res.status(200).json({ reply: aiReply });
  } else {
    res.status(405).json({ reply: 'Method Not Allowed' });
  }
}