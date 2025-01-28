import { CategoryType } from '../category/model';

export type CreateTransaction = {
  title: string;
  categoryId: string;
  amount: number;
  datetime: string;
  categoryType: CategoryType;
};

export type UpdateTransaction = Partial<CreateTransaction>;

export type Transaction = CreateTransaction & {
  id: string;
  createdAt: string;
};
