import { CategoryModel } from "./category.model";
import { WalletModel } from "./wallet.model";

export interface TransactionsModel {
    _id?: string;
    category?: CategoryModel;
    amount?: string;
    date?: string;
    notes?: string,
    type?: string,
    attachment?: {
        type: string;
        url: string;
    },
    recurrent?: boolean,
    nextRecurrentDate?: string,
    reccurentInterval?: string,
    recurrentEndDate?: string,
    wallet?: WalletModel,
    userId?: string
}