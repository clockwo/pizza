import { HTMLAttributes } from 'react';

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  itemId: number;
  name: string;
  description: string;
  price: number;
  rating: number;
}
