import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/store";

const AddProductModal = () => {
    const [name, setName] = useState('');
    const [material, setMaterial] = useState('');
    const [grade, setGrade] = useState('');
    const dispatch = useDispatch();
  
    const handleAddProduct = () => {
      const newProduct = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        material,
        grade,
        shape: '',
        length: ''
      };
      dispatch(addProduct(newProduct));
      setName('');
      setMaterial('');
      setGrade('');
    };
  
    return (
      <div className="add-product-container">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="text"
          value={material}
          onChange={e => setMaterial(e.target.value)}
          placeholder="Material"
        />
        <input
          type="text"
          value={grade}
          onChange={e => setGrade(e.target.value)}
          placeholder="Grade"
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    );
  };
  
  export default AddProductModal;