import { v4 as uuidv4 } from 'uuid';
import {
  Category,
  categoryTypes,
  expenseCategoryTitles,
  incomeCategoryTitles,
} from '@/entities/category';
import { DateTime } from 'luxon';

export const categories: Category[] = [
  // Expenses
  {
    id: uuidv4(),
    title: expenseCategoryTitles.housing,
    categoryType: categoryTypes.expense,
    createdAt: DateTime.now().toISO(),
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: expenseCategoryTitles.groceries,
    categoryType: categoryTypes.expense,
    createdAt: DateTime.now().toISO(),
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: expenseCategoryTitles.transportation,
    categoryType: categoryTypes.expense,
    createdAt: DateTime.now().toISO(),
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: expenseCategoryTitles.healthcare,
    categoryType: categoryTypes.expense,
    createdAt: DateTime.now().toISO(),
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: expenseCategoryTitles.debts,
    categoryType: categoryTypes.expense,
    createdAt: DateTime.now().toISO(),
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: expenseCategoryTitles.other,
    categoryType: categoryTypes.expense,
    createdAt: DateTime.now().toISO(),
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: expenseCategoryTitles.other,
    categoryType: categoryTypes.expense,
    createdAt: DateTime.now().toISO(),
    transactionsCount: 0,
  },

  // Income
  {
    id: uuidv4(),
    title: incomeCategoryTitles.paycheck,
    categoryType: categoryTypes.income,
    createdAt: DateTime.now().toISO(),
    transactionsCount: 0,
  },
  {
    id: uuidv4(),
    title: incomeCategoryTitles.gift,
    categoryType: categoryTypes.income,
    createdAt: DateTime.now().toISO(),
    transactionsCount: 0,
  },
];
