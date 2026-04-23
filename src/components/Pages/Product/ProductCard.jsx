import React from 'react';
import {MdOutlineFavorite} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addToBasket, addToFav} from "../../lib";

const ProductCard = ({el}) => {
    const {basket,favorite,defCurren,allCurren} = useSelector(s => s)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const fount = basket.some(some => some.id === el.id)
    const found = favorite.some(some => some.id === el.id)


    return (
        <div>
            <div className="w-[260px] m-10">
                <img onDoubleClick={() => dispatch(addToFav(el))} src={el.image} width={250} alt=""/>
                <h2>{el.title}</h2>
                <h1>{el.price * allCurren[defCurren][0]} {allCurren[defCurren][1]}</h1>
                <div className="flex justify-between">
                    <button onClick={()=> dispatch(addToFav(el))}>
                        <MdOutlineFavorite className={`text-2xl ${found ? "text-red-600" : ""}`}/>
                    </button>
                    {
                        fount ? <button onClick={() => navigate("/basket")} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                         <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                               open basket
                         </span>
                            </button>
                            :
                        <button onClick={() => dispatch(addToBasket(el))}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                </svg>
                                Buy now
                            </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;