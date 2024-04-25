import { UserRankingCategories } from './UserRankingCategories';

export interface UserRankingCard {
    name: string;
    totalPoints: string;
    categories: UserRankingCategories[];
}