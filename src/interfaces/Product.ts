
export interface Product {
    id: string;
    name: string;
    price: string;
    stock: number;
    category: string;
    deliveryTime: string;
    time?: number;
    images: string[];
    description: Description[];
}