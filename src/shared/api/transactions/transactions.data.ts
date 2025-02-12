import { v4 as uuidv4 } from 'uuid';
import { Transaction } from '@/entities/transaction';
import { DateTime } from 'luxon';
import { categoryTypes } from '@/entities/category';
import { expenseCategoryTitles } from '@/entities/category';

export const transactions: Transaction[] = [
  {
    id: uuidv4(),
    categoryTitle: expenseCategoryTitles.housing,
    amount: 420.0,
    datetime: DateTime.now().minus({ months: 2 }).toISO(),
    description: 'Housing',
    categoryType: categoryTypes.expense,
    createdAt: DateTime.now().toISO(),
  },
  {
    id: uuidv4(),
    categoryTitle: expenseCategoryTitles.groceries,
    amount: 300,
    datetime: DateTime.now().minus({ months: 1 }).toISO(),
    description: 'Groceries',
    categoryType: categoryTypes.expense,
    createdAt: DateTime.now().toISO(),
  },
  {
    id: uuidv4(),
    categoryTitle: expenseCategoryTitles.transportation,
    amount: 30.5,
    datetime: DateTime.now().minus({ days: 1 }).toISO(),
    description: 'Transportation',
    categoryType: categoryTypes.expense,
    createdAt: DateTime.now().toISO(),
  },
  {
    id: uuidv4(),
    categoryTitle: expenseCategoryTitles.healthcare,
    amount: 50,
    datetime: DateTime.now().minus({ months: 2 }).toISO(),
    description: 'Healthcare',
    categoryType: categoryTypes.expense,
    createdAt: DateTime.now().toISO(),
  },
  {
    id: uuidv4(),
    categoryTitle: expenseCategoryTitles.healthcare,
    amount: 1500,
    datetime: DateTime.now().toISO(),
    description: 'Salary',
    categoryType: categoryTypes.income,
    createdAt: DateTime.now().toISO(),
  },
];
