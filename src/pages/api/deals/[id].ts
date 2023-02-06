// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { deals } from '@/data';
import { Deal } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Deal | { message: string }>
) {
  const id = req.query.id as string;
  const dealById = deals.find(deal => deal.id.toString() === id);
  if (!dealById) return res.status(404).json({ message: 'Deal not found' });
  return res.status(200).json(dealById as Deal);
}
