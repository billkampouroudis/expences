import { CategoryType } from '@/entities/category';

export type CategoryTypeDto = CategoryType;
export type CreateCategoryDto = {
  title: string;
  categoryType: CategoryType;
  icon: string;
};

export type CategoryDto = CreateCategoryDto & {
  id: string;
  createdAt: string;
};

export type UpdateCategoryDto = Partial<CategoryDto>;
