import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const filter = useSelector((state) => state.products.filter);

  const filteredProducts = products.filter((product) => {
    return (
      (filter.product ? product.name.includes(filter.product) : false) &&
      (filter.material ? product.material.includes(filter.material) : true)
    );
  });

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
