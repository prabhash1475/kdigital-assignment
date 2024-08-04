import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../Redux/store";
// import { setFilter } from "./store";

const Filter = () => {
    const dispatch = useDispatch();
  
    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      dispatch(setFilter({ [name]: value }));
    };
  
    return (
      <div className="filter-container">
        <select name="product" onChange={handleFilterChange}>
          <option value="">Select Product</option>
          <option value="Pipes">Pipes</option>
          <option value="Sheets">Sheets</option>
          <option value="Rods">Rods</option>
        </select>
        <select name="material" onChange={handleFilterChange}>
          <option value="">Select Material</option>
          <option value="Stainless Steel">Stainless Steel</option>
          <option value="Aluminium">Aluminium</option>
          <option value="Copper">Copper</option>
          <option value="Brass">Brass</option>
        </select>
      </div>
    );
  };
  
  export default Filter;