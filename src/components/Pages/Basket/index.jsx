import React from 'react';
import {useSelector} from "react-redux";
import BasketTable from "./BasketTable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Basket = () => {
    const {defCurren, allCurren, basket} = useSelector(s => s)
    const total = basket.reduce((acc, el) => {
        return acc + el.quantity * el.price * allCurren[defCurren][0]
    }, 0)
    const exportToExcel = () => {
        // 1. Превращаем JSON в лист
        const worksheet = XLSX.utils.json_to_sheet(basket);

        // 2. Создаем книгу и добавляем лист
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Закуп");

        // 3. Генерируем файл и скачиваем
        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        });

        const file = new Blob([excelBuffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });

        saveAs(file, "Закуп.xlsx");
    };
    const clicks = () => basket.length !== 0 ? false : true;



    return (
        <div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Наименование
                        </th>
                        <th scope="col" className="px-6 py-3">
                            изображение
                        </th>
                        <th scope="col" className="px-6 py-3">
                            колво
                        </th>
                        <th scope="col" className="px-6 py-3">
                            сумма
                        </th>
                        <th scope="col" className="px-6 py-3">
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        basket.map(el => <BasketTable  el={el}/>)
                    }
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-between">
                <div className="py-6">
                    <h1 className="text-xl font-bold">total: <span
                        className="text-xl font-mono">{total}{allCurren[defCurren][1]}</span></h1>
                    <h1 className="text-xl font-bold"> количество : {basket.length}</h1>
                </div>
                <div>
                    <button className="border-2 p-2 rounded-xl text-gray-800 bg-gray-100 shadow-xl/20 " disabled={clicks()} onClick={exportToExcel} >print</button>
                </div>
            </div>
        </div>
    );
};

export default Basket;