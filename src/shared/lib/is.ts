import { Category } from '@/entities/category';
import { Transaction } from '@/entities/transaction';

export const isExpense = (item: Category | Transaction) => item.categoryType === 'exp';
export const isIncome = (item: Category | Transaction) => item.categoryType === 'inc';
