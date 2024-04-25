import { User } from './User';

export interface Activity {
  id: number;
  date: string;
  description: string;
  user: User;
}
