import { useState } from "react";
import { Product } from "../interfaces/Product";

export function useProductBackOffice(product: Product, onUpdateProduct: (id: string, updatedProduct: Product) => void) {
  const [showInput, setShowInput] = useState(product.deliveryTime === 'dias-recibida');

  const handleInputChange = ({target} : any, value : string) => {
      if(value == 'deliveryTime'){
        setShowInput(target.value == 'dias-recibida');
      }

      const updatedProduct = {
          ...product,
          [value]: target.value
      };
      onUpdateProduct(product.id, updatedProduct);
  };

  const handleTimeChange = ({target} : any) => {
      const updatedProduct = {
          ...product,
          time: target.value
      };
      onUpdateProduct(product.id, updatedProduct);
  }

  const handleUpdateImages = (updatedImages : string[]) => { // Actualiza el array de imágenes en el producto
      const updatedProduct = {
          ...product,
          images: updatedImages
      };
      onUpdateProduct(product.id, updatedProduct);
  };

  const handleUpdateDescriptions = (updateDescription : Description[]) => {
      const updatedProduct = {
          ...product,
          description: updateDescription
      };
      onUpdateProduct(product.id, updatedProduct);
  };

  
    return {
      showInput,
      handleInputChange,
      handleTimeChange,
      handleUpdateImages,
      handleUpdateDescriptions,
    };
  }