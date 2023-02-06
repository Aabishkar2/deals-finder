import ProductCards from '@/components/ProductCards';
import { Deal } from '@/types';
import { AnimatePresence, motion as m } from 'framer-motion';

export default function Products({ deals }: { deals: Deal[] }) {
  return (
    <>
      <AnimatePresence>
        <m.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          className="h-full w-full bg-productGray pb-6 dark:bg-darker"
        >
          <div className="mx-auto lg:w-3/4">
            <div className="flex justify-between px-3 pt-4 dark:text-white">
              <div className="source-sans-pro">
                Listing &nbsp;
                <span className="font-bold leading-relaxed text-lightSixty">
                  {deals.length} &nbsp;
                </span>
                Items
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 px-3 md:grid-cols-2 lg:grid-cols-3">
              {deals.map((deal, index) => (
                <ProductCards key={index} deal={deal} />
              ))}
            </div>
          </div>
        </m.div>
      </AnimatePresence>
    </>
  );
}
