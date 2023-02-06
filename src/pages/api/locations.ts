// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { deals } from '@/data';
import { LocationResponse } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LocationResponse>
) {
  const uniqueLocations = new Set(deals.map(deal => deal.location));
  return res.status(200).json({
    locations: Array.from(uniqueLocations),
  });
}
