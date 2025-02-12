import { CategoryType } from '@/entities/category';
import { Transaction } from '@/entities/transaction';

export type FetchTransactionsRequestDto = {
  categoryType?: CategoryType;
  month?: number;
  year?: number;
};

export type FetchTransactionsResponseDto = {
  transactions: Transaction[];
  totalExpenses: number;
  totalIncome: number;
};

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
