export type Deal = {
  id: number;
  name: string;
  description: string;
  location: string;
  price: number;
  image: string;
  rating: number;
  totalRating: number;
  category: string;
};

export type SearchedInputProps = {
  deal?: string;
  location?: string;
};

export type LocationResponse = {
  locations: string[];
};
