import { CategoryType } from '@/entities/category';
import { Transaction } from '@/entities/transaction';
import { isExpense, isIncome } from '@/shared/lib/is';
import { getStorage } from '@/shared/lib/storage';

export const fetchTransactions = async (type: CategoryType) => {
  const transactions = await getStorage('transactions');

  if (type) {
    if (type === 'inc') {
      return transactions.filter((transaction: Transaction) => isIncome(transaction));
    }
    if (type === 'exp') {
      return transactions.filter((transaction: Transaction) => isExpense(transaction));
    }
  }

  return transactions;
};
