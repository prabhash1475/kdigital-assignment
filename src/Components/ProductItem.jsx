import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../Redux/store";

const ProductItem = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [shape, setShape] = useState(product.shape);
  const [length, setLength] = useState(product.length);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateProduct({ id: product.id, shape, length }));
    setIsEditing(false);
  };

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Material: {product.material}</p>
      <p>Grade: {product.grade}</p>
      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            value={shape}
            onChange={(e) => setShape(e.target.value)}
            placeholder="Shape"
          />
          <input
            type="text"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="Length"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <button onClick={() => setIsEditing(true)}>Quick Edit</button>
      )}
    </div>
  );
};

export default ProductItem;
