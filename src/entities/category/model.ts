export type CategoryType = 'inc' | 'exp';

export type Category = {
  id: string;
  title: string;
  categoryType: CategoryType;
  icon: string;
  transactionsCount: number;
  createdAt: string;
};
