import { CategoryModel } from "./category.model";

export interface BudgetModel {
    _id?: string;
    name?: string,
    category?: CategoryModel,
    amount?: number;
    photoURL?: string;
    userId?: string;

}