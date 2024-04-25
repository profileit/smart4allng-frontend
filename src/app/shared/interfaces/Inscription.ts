import { User } from './User';

export interface Inscription {
  id: number;
  user: User;
  challengeType: string;
  category: string;
  startDate: string;
  comments: string;
}
