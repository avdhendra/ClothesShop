
export type TrendProps = {
    img: string;
    name: string;
}

export type Item = {
   id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type TrendingProps = {
  trending:Item[]
}

export type SearchBarProps = {
  onClick: () => void;
}