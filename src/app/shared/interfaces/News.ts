import { Badge } from './Badge';
import { User } from './User';

export interface News {
  id: string;
  title: string;
  content: string;
  badges: Badge[];
  image: string;
  isNew: boolean;
  author: User;
}
