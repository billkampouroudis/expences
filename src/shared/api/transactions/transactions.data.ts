import { v4 as uuidv4 } from 'uuid';
import { Transaction } from '@/entities/transaction';
import { DateTime } from 'luxon';
import { categoryIds } from '../categories/categories.data';

export const transactions: Transaction[] = [
  {
    id: uuidv4(),
    categoryId: categoryIds.housing,
    amount: 420.0,
    datetime: DateTime.now().toISO(),
    description: 'Housing',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
  },
  {
    id: uuidv4(),
    categoryId: categoryIds.groceries,
    amount: 300,
    datetime: DateTime.now().toISO(),
    description: 'Groceries',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
  },
  {
    id: uuidv4(),
    categoryId: categoryIds.transportation,
    amount: 30.5,
    datetime: DateTime.now().toISO(),
    description: 'Transportation',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
  },
  {
    id: uuidv4(),
    categoryId: categoryIds.healthcare,
    amount: 50,
    datetime: DateTime.now().toISO(),
    description: 'Healthcare',
    categoryType: 'exp',
    createdAt: DateTime.now().toISO(),
  },
];
