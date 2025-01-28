import { CategoryType } from '@/entities/category';
import { categories } from './categories.data';
import { isExpense, isIncome } from '@/shared/lib/is';

export const fetchCategories = async (type: CategoryType) => {
  if (type) {
    if (type === 'inc') {
      return categories.filter((category) => isIncome(category));
    }

    return categories.filter((category) => isExpense(category));
  }

  return categories;
};
