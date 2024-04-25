

export interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: string;
  company: string;
  isAdmin?: boolean;
  category?: string;
  pointsReward?: number | string;
  startDate?: Date;
  endDate?: Date;
  isUrgent: Boolean;
}
