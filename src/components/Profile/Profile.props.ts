import { HTMLAttributes } from 'react';

export interface ProfileProps extends HTMLAttributes<HTMLDivElement> {
  avatar: string;
  name: string;
  email: string;
}
