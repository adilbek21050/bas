import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
    const {favorite} = useSelector(state => state)


    return (
        <div className="flex flex-wrap justify-center">
            {
                favorite.map(el => <ProductCard el={el}/>)
            }
        </div>
    );
};

export default Favorite;