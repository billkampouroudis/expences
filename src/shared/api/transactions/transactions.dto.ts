import { CategoryType } from '@/entities/category';

export type CreateTransactionDto = {
  title: string;
  categoryId: string;
  amount: number;
  datetime: string;
  categoryType: CategoryType;
};

export type TransactionDto = CreateTransactionDto & {
  id: string;
  createdAt: string;
};

export type UpdateTransactionDto = Partial<TransactionDto>;
