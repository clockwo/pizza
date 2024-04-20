import { HTMLAttributes, ReactNode } from 'react';

export interface ItemListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
