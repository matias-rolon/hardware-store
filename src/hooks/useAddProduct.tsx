import {useState} from "react";

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

interface Description {
    name: string;
    details: string;
    [key: string]: string;
}

interface Props {
    addProduct: (newProduct : Product) => void;
    products: Product[]
}


export function useAddDescription({addProduct, products} : Props) {

    const [maxId, setMaxId] = useState(Math.max(...products.map((product) => product.id)) + 1);

    const getMaxId = () => {
      setMaxId(maxId + 1);
      return maxId;
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [product, setProduct] = useState({
        id: maxId,
        name: '',
        price: "",
        stock: 0,
        category: '',
        deliveryTime: '',
        time: 0,
        images: [""],
        description: [
            {
                name: "",
                details: ""
            },

        ]
    })

    const [showInput, setShowInput] = useState(product.deliveryTime === 'dias-recibida');


    const handleInputChange = ({target} : any, value : string) => {
        if (value == 'deliveryTime') {
            setShowInput(target.value == 'dias-recibida');
        }
        const updatedProduct = {
            ...product,
            [value]: target.value
        };
        setProduct(updatedProduct);
    };

    const handleTimeChange = ({target} : any) => {
        const updatedProduct = {
            ...product,
            time: target.value
        };
        setProduct(updatedProduct);
    }

    const handelAdd = () => {
        const updatedProduct = {
            ...product,
            id: getMaxId() + 1
        };
        setProduct(updatedProduct);
        addProduct(product)
        handleClose();
    }

    const onUpdateDescription = (updateDescription : Description[]) => {
        const updatedProduct = {
            ...product,
            description: updateDescription
        };
        setProduct(updatedProduct);
    }

    const onUpdateImages = (updatedImages : string[]) => {
        const updatedProduct = {
            ...product,
            images: updatedImages
        };
        setProduct(updatedProduct);
    };


    return {
        show,
        showInput,
        product,
        onUpdateDescription,
        onUpdateImages,
        handleClose,
        handleShow,
        handelAdd,
        handleInputChange,
        handleTimeChange
    }

}
