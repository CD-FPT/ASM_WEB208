export interface IProduct {
    // id: number;
    _id?: string | number;
    name: string | null | undefined;
    description: string | null | undefined;
    price: number | null | undefined;
    image?: string | null | undefined;
    categoryId?: string | null | undefined
}
