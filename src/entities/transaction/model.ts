import { CategoryTitle, CategoryType } from '../category/model';

export type Transaction = {
  id: string;
  categoryTitle: CategoryTitle;
  amount: number;
  datetime: string;
  description: string;
  categoryType: CategoryType;
  createdAt: string;
};
