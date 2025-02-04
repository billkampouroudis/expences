export type TransactionType = 'inc' | 'exp';

export type Transaction = {
  id: string;
  categoryId: string;
  amount: number;
  datetime: string;
  description: string;
  categoryType: TransactionType;
  createdAt: string;
};
