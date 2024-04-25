import { User } from './User';

export interface Ranking {
  id: number;
  position: number;
  points: number;
  user: User;
}
