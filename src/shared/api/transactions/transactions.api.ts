import { Transaction } from '@/entities/transaction';
import { isExpense, isIncome } from '@/shared/lib/is';
import { getStorage, setStorage } from '@/shared/lib/storage';
import { CategoryTypeDto } from '../categories';
import { CreateTransactionDto, TransactionDto } from './transactions.dto';

export const fetchTransactions = async (categoryType: CategoryTypeDto) => {
  const transactions = await getStorage('transactions');

  if (categoryType) {
    if (categoryType === 'inc') {
      return transactions.filter((transaction: Transaction) => isIncome(transaction));
    }
    if (categoryType === 'exp') {
      return transactions.filter((transaction: Transaction) => isExpense(transaction));
    }
  }

  return transactions;
};

export const createTransaction = async (transaction: CreateTransactionDto) => {
  const transactions = await getStorage('transactions');
  transactions.push(transaction);
  await setStorage('transactions', transactions);

  return transactions;
};

export const updateTransaction = async (transaction: TransactionDto) => {
  const transactions = await getStorage('transactions');
  const updatedTransactions = transactions.map((t: Transaction) =>
    t.id === transaction.id ? transaction : t
  );
  await setStorage('transactions', updatedTransactions);

  return updatedTransactions;
};

export const deleteTransaction = async (transactionId: string) => {
  const transactions = await getStorage('transactions');
  const updatedTransactions = transactions.filter((t: Transaction) => t.id !== transactionId);
  await setStorage('transactions', updatedTransactions);

  return updatedTransactions;
};
