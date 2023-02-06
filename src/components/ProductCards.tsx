/* eslint-disable @next/next/no-img-element */
import { Deal } from '@/types';
import { getWordStr } from '@/utils/words';
import Link from 'next/link';
import { FaMapMarker, FaStar } from 'react-icons/fa';

export default function ProductCards({ deal }: { deal: Deal }) {
  return (
    <>
      <div className="source-sans-pro w-full">
        <Link
          href={`/deals/${deal.id}`}
          className="c-card block overflow-hidden rounded-lg bg-pureWhite shadow-md hover:shadow-xl dark:bg-darkCard dark:shadow-md dark:hover:shadow-sm hover:dark:shadow-white"
        >
          <div className="relative overflow-hidden pb-48">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://loremflickr.com/320/240"
              alt=""
            ></img>
          </div>
          <div className="p-4">
            <span className="flex w-fit space-x-1 rounded-full bg-lightSixty px-3 py-2 text-xs font-semibold uppercase leading-none tracking-wide text-pureWhite">
              <span>
                <FaMapMarker color="bg-lightSky" />
              </span>
              <span>{deal.location}</span>
            </span>
            <h2 className="mt-2 mb-2 font-bold dark:text-pureWhite">
              {deal.name}
            </h2>
            <p className="text-sm dark:text-pureWhite">
              {getWordStr(deal.description, 8)}...
            </p>
          </div>
          <div className="border-t border-b p-4 text-xs text-gray-700 dark:border-darker">
            <div className="mb-1 flex items-center">
              <div className="flex items-center">
                <div>
                  <FaStar color="#ff8447" />
                </div>
                <div>
                  <p className="ml-2 text-sm font-bold text-lightSixty dark:text-pureWhite">
                    {deal.rating}
                  </p>
                </div>
                <div>
                  <span className="bg mx-1.5 h-1 w-1 rounded-full bg-lightSixty"></span>
                </div>
                <div className="text-sm font-medium text-lightSixty underline hover:no-underline">
                  {deal.totalRating} reviews
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
