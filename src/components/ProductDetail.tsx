/* eslint-disable @next/next/no-img-element */
import { Deal } from '@/types';
import Link from 'next/link';
import { FaMapMarker, FaStar } from 'react-icons/fa';
import { AnimatePresence, motion as m } from 'framer-motion';

export default function ProductDetail({ deal }: { deal: Deal }) {
  return (
    <AnimatePresence>
      <>
        <m.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          className="grid place-items-center bg-productGray dark:bg-darker"
        >
          <div className="flex w-full flex-col justify-between py-4 md:w-3/4 md:flex-row lg:w-1/2 lg:flex-row">
            <div className="w-full px-4">
              <img
                className="inset-0 h-full w-full rounded-lg object-cover"
                src="https://loremflickr.com/320/240"
                alt=""
              ></img>
            </div>
            <div className="source-sans-pro w-full px-4">
              <div className="c-card flex rounded-lg bg-pureWhite shadow-md hover:shadow-xl dark:bg-darkCard">
                <div>
                  <div className="p-4">
                    <span className="flex w-fit space-x-1 rounded-full bg-lightSixty px-3 py-2 text-xs font-semibold uppercase leading-none tracking-wide text-pureWhite">
                      <span>
                        <FaMapMarker color="bg-lightSky" />
                      </span>
                      <span>{deal.location}</span>
                    </span>
                    <h2 className="mt-2 mb-2 font-bold dark:text-white">
                      {deal.name}
                    </h2>
                    <p className="text-sm leading-relaxed dark:text-white">
                      {deal.description}
                    </p>
                  </div>
                  <div className="border-t border-b p-4 text-xs text-gray-700 dark:border-darker">
                    <div className="mb-1 flex items-center">
                      <div className="flex items-center">
                        <div>
                          <FaStar color="#ff8447" />
                        </div>
                        <div>
                          <p className="ml-2 text-sm font-bold text-lightSixty">
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
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </>
    </AnimatePresence>
  );
}
