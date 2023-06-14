export type RootStackParamList = {
  Products: {userId: string};
  ProductDetails: {userId: string};
};

export type TIcon = {
  type: string;
  name: string;
  size?: number;
  color?: string;
  style?: Object;
};

export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: TRating;
};

export type TRating = {
  rate: number;
  count: number;
};

export type TPalette = {
  brandTint: string;
  black: string;
  white: string;
  danger: string;
  paperBackground: string;
};
