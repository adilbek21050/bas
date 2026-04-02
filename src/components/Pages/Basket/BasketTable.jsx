import React from 'react';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, decBas, delBas} from "../../lib";


const BasketTable = ({el}) => {
    const {defCurren, allCurren} = useSelector(s => s)
    const dispatch = useDispatch()

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {el.title}
            </th>
            <td className="px-6 py-4">
                <img src={el.image} width={50} alt=""/>
            </td>
            <td className="px-6 py-10 flex text-xl">
                <button onClick={() => dispatch(decBas(el))}><AiOutlineMinusCircle/></button>
                <p className="mx-2">{el.quantity}</p>
                <button onClick={() => dispatch(addToBasket(el))}><AiOutlinePlusCircle/></button>
            </td>
            <td className="px-6 py-4">
                {el.price * el.quantity * allCurren[defCurren][0]}
            </td>
            <td className="px-6 py-4 text-right">
                <button onClick={() => dispatch(delBas(el))}
                        className="text-red-700 ml-4 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                    delete
                </button>

            </td>
        </tr>
    );
};

export default BasketTable;