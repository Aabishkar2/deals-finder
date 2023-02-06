// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { deals } from '@/data';
import { Deal } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Deal[]>
) {
  let allDeals = deals;
  const { search, location } = req.query;
  if (search) {
    allDeals = allDeals.filter(deal =>
      deal.name.toLowerCase().includes(search.toString().toLowerCase())
    );
  }
  if (location && location !== 'All') {
    allDeals = allDeals.filter(deal => deal.location === location.toString());
  }
  return res.status(200).json(allDeals);
}
