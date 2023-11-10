import { useState } from "react";
import { collection, addDoc, doc, getDocs, writeBatch, deleteDoc } from 'firebase/firestore'
import { db } from "../data/firebase";
import { Product } from '../interfaces/Product';



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

    const updateProduct = (id : string, updatedProduct : Product) => {
        const updatedProducts = [...products];

        const index = updatedProducts.findIndex((product) => product.id === id);

        if (index !== -1) {
            updatedProducts[index] = updatedProduct;
            setProducts(updatedProducts);
        }
    };

    const deleteProduct = async (id : string) => {
        const productDoc = doc(db, "products", id)
        await deleteDoc(productDoc)
        getProducts()
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