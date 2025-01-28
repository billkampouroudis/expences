import { Category } from '@/entities/category';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';

export const categories: Category[] = [
  // Expenses
  {
    id: uuidv4(),
    title: 'Housing',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '🏠',
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: 'Groceries',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '🍎',
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: 'Transportation',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '🚗',
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: 'Healthcare',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '🏥',
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: 'Debts',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '💳',
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: 'Food',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '🍎',
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: 'Other',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '💳',
    transactionsCount: 0,
  },

  // Income
  {
    id: uuidv4(),
    title: 'Paycheck',
    categoryType: 'inc',
    createdAt: DateTime.now().toISO(),
    icon: '💰',
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: 'Gift',
    categoryType: 'inc',
    createdAt: DateTime.now().toISO(),
    icon: '🎁',
    transactionsCount: 0,
  },
];
