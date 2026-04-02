import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "./ProductCard";

const Product = () => {
    const {product} = useSelector(s => s)

    return (
        <div className="flex flex-wrap justify-between">
            {
                product.map(el => <ProductCard el={el}/>)
            }
        </div>
    );
};

export default Product;