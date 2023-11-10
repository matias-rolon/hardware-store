import { useState } from "react";
import { collection, addDoc, doc, getDocs, updateDoc, writeBatch } from 'firebase/firestore'
import { db } from "../data/firebase";

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

// interface Props {
//     products: Product[];
//     setProducts:  React.Dispatch<React.SetStateAction<any>>;
// }

export function useProductsBackOffice() {

    const productsCollection = collection(db, "products");

    const [products, setProducts] = useState<Product[]>([])

    const getProducts = async() => {
        const data = await getDocs(productsCollection);
        console.log(data.docs.map( (doc) => ({...doc.data(), id:doc.id})))
        setProducts(data.docs.map( (doc) => ({...doc.data(), id:doc.id})))
    }

    const [searchTerm, setSearchTerm] = useState(''); 

    const handleSearchChange = (e:any) => {
        setSearchTerm(e.target.value.document);
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
        console.log(id)
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    }

    const addProduct = async (newProduct:Product) => { 
        const updatedProducts = [...products];
        updatedProducts.push(newProduct);
        setProducts(updatedProducts);
        await addDoc(productsCollection, newProduct);
    }


    const save = async () => {
        const batch = writeBatch(db);
        products.forEach((product) => {
            const productRef = doc(db, "products", product.id.toString());
            batch.update(productRef, product);
        });

        try {
            await batch.commit();
        } catch (error) {
            alert(`Error updating products in batch ${error}`);
        }
    }

    return {
        products,
        getProducts,
        handleSearchChange,
        filteredProducts,
        updateProduct,
        deleteProduct,
        addProduct,
        searchTerm,
        save
    }
}