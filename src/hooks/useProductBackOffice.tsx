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
    state: string;
    images: string[];
    description: Description[];
  }

export function useProductBackOffice(product: Product, onUpdateProduct: (id: number, updatedProduct: Product) => void) {
    const [mostrarInput, setMostrarInput] = useState(product.deliveryTime === 'dias-recibida');
  
    const handleInputChange = (value: any, targetValue: string) => {
      setMostrarInput(targetValue === 'dias-recibida');
  
      const updatedProduct = {
        ...product,
        [value]: targetValue,
      };
      onUpdateProduct(product.id, updatedProduct);
    };
  
    const handleTimeChange = (time: any) => {
      const updatedProduct = {
        ...product,
        time,
      };
      onUpdateProduct(product.id, updatedProduct);
    }
  
    const handleUpdateImages = (updatedImages: string[]) => {
      const updatedProduct = {
        ...product,
        images: updatedImages,
      };
      onUpdateProduct(product.id, updatedProduct);
    };
  
    const handleUpdateDescriptions = (updatedDescription: Description[]) => {
      const updatedProduct = {
        ...product,
        description: updatedDescription,
      };
      onUpdateProduct(product.id, updatedProduct);
    };
  
    return {
      mostrarInput,
      handleInputChange,
      handleTimeChange,
      handleUpdateImages,
      handleUpdateDescriptions,
    };
  }