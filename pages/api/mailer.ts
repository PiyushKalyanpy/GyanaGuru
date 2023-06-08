// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import sendWelcomeMail from '@/lib/mail';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        console.log(req.body);
        await sendWelcomeMail(req.body.email);
      res.status(200).json({ message: 'POST request received' });
    } else {
      // Handle other HTTP methods if needed
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }

export default handler