import { Category } from '@/entities/category';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';

export const categoryIds = {
  housing: uuidv4(),
  groceries: uuidv4(),
  transportation: uuidv4(),
  healthcare: uuidv4(),
  debts: uuidv4(),
  other: uuidv4(),
  paycheck: uuidv4(),
  gift: uuidv4(),
};

export const categories: Category[] = [
  // Expenses
  {
    id: categoryIds.housing,
    title: 'Housing',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '🏠',
    transactionsCount: 0,
  },
  {
    id: categoryIds.groceries,
    title: 'Groceries',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '🍎',
    transactionsCount: 0,
  },
  {
    id: categoryIds.transportation,
    title: 'Transportation',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '🚗',
    transactionsCount: 0,
  },
  {
    id: categoryIds.healthcare,
    title: 'Healthcare',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '🏥',
    transactionsCount: 0,
  },
  {
    id: categoryIds.debts,
    title: 'Debts',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '💳',
    transactionsCount: 0,
  },
  {
    id: categoryIds.other,
    title: 'Food',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '🍎',
    transactionsCount: 0,
  },
  {
    id: categoryIds.other,
    title: 'Other',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
    icon: '💳',
    transactionsCount: 0,
  },

  // Income
  {
    id: categoryIds.paycheck,
    title: 'Paycheck',
    categoryType: 'inc',
    createdAt: DateTime.now().toISO(),
    icon: '💰',
    transactionsCount: 0,
  },
  {
    id: categoryIds.gift,
    title: 'Gift',
    categoryType: 'inc',
    createdAt: DateTime.now().toISO(),
    icon: '🎁',
    transactionsCount: 0,
  },
];
