import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import ProductDetail from '@/components/ProductDetail';
import { GetServerSideProps } from 'next';
import { Deal as DealType, LocationResponse } from '@/types';
import config from '@/config';
import Search from '@/components/Search';

export default function Deal({
  deal,
  locations,
}: {
  deal: DealType;
  locations: LocationResponse;
}) {
  return (
    <>
      <Head>
        <title>Deals</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search locations={locations.locations} />
      <ProductDetail deal={deal} />
      <Footer />
    </>
  );
}

// Use SSR because e-commerce product detail page will need strong SEO
export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const id = params?.id as string;
  const url = config.url(req);
  const dealRes = await fetch(`${url}/api/deals/${id}`);

  if ((await dealRes.status) === 404) {
    return {
      notFound: true,
    };
  }
  const deal = (await dealRes.json()) as DealType;
  const locationsRes = await fetch(`${url}/api/locations`);
  const locations = (await locationsRes.json()) as LocationResponse;

  return {
    props: {
      deal,
      locations,
      notFound: false,
    },
  };
};
