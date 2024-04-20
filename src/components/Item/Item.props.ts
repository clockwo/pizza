import { HTMLAttributes } from 'react';

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  price: number;
  rating: number;
}
