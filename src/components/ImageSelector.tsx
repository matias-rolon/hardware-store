import { useState } from "react";
import './styles/imageSelector.css'

interface Props {
    images?: string[];
}

export const ImageSelector = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState(images ? images[0] : '');
    
  return (
    <div>
        <div className="contain-imageSelect">
            <img
                src={selectedImage}
                width="100%"
                height="100%"
                className="imageSelect"
            />
        </div>
        <div className="contain-thumbnail">        
            {images?.map((image, index) => (
                <img
                key={index}
                src={image}
                onClick={() => setSelectedImage(image)}
                className="thumbnail"
                />
            ))}
      </div>
    </div>
  );
};
