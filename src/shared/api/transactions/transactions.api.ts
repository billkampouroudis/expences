import { Transaction } from '@/entities/transaction';
import { isExpense, isIncome } from '@/shared/lib/is';
import { getStorage, setStorage } from '@/shared/lib/storage';
import {
  CreateTransactionDto,
  FetchTransactionsRequestDto,
  FetchTransactionsResponseDto,
  TransactionDto,
} from './transactions.dto';
import { categoryTypes } from '@/entities/category';
import { DateTime } from 'luxon';

export const fetchTransactions = async (
  data: FetchTransactionsRequestDto = {}
): Promise<FetchTransactionsResponseDto> => {
  let transactions: Transaction[] = (await getStorage('transactions')) || [];
  const { categoryType, month, year } = data;
  let totalExpenses = 0;
  let totalIncome = 0;

  if (categoryType || month !== undefined) {
    transactions = transactions?.filter((transaction: Transaction) => {
      let categoryMatch = true;
      if (categoryType) {
        categoryMatch =
          categoryType === categoryTypes.income ? isIncome(transaction) : isExpense(transaction);
      }

      let monthMatch = true;
      if (month !== undefined) {
        monthMatch = DateTime.fromISO(transaction.datetime).month === month;
      }

      let yearMatch = true;
      if (year !== undefined) {
        yearMatch = DateTime.fromISO(transaction.datetime).year === data.year;
      }

      const includeTransaction = categoryMatch && monthMatch && yearMatch;

      if (includeTransaction) {
        if (isIncome(transaction)) {
          totalIncome += transaction.amount;
        } else {
          totalExpenses += transaction.amount;
        }
      }

      return includeTransaction;
    });
  } else {
    transactions?.forEach((transaction) => {
      if (isIncome(transaction)) {
        totalIncome += transaction.amount;
      } else {
        totalExpenses += transaction.amount;
      }
    });
  }

  return {
    transactions: transactions,
    totalExpenses,
    totalIncome,
  };
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
