import { useState } from "react";

interface Description {
    name: string;
    details: string;
    [key: string]: string;
}

export interface Product {
    id: number;
    name: string;
    price: string;
    stock: number;
    category: string;
    deliveryTime: string;
    time?: number;
    images: string[];
    description: Description[];
}

interface Props {
    products: Product[];
    setProducts:  React.Dispatch<React.SetStateAction<any>>;
}

export function useProductsBackOffice({products, setProducts}:Props) {
    const [searchTerm, setSearchTerm] = useState(''); 

    const handleSearchChange = (e:any) => {
        setSearchTerm(e.target.value);
    };
    
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const updateProduct = (id : number, updatedProduct : Product) => {
        const updatedProducts = [...products];

        const index = updatedProducts.findIndex((product) => product.id === id);

        if (index !== -1) {
            updatedProducts[index] = updatedProduct;
            setProducts(updatedProducts);
        }
    };

    const deleteProduct = (id : number) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    }

    const addProduct = (newProduct:Product) => { 
        const updatedProducts = [...products];
        updatedProducts.push(newProduct);
        setProducts(updatedProducts);
    }


    const save = () => {
        console.log(products);
    }

    return {
        handleSearchChange,
        filteredProducts,
        updateProduct,
        deleteProduct,
        addProduct,
        searchTerm,
        save
    }
}