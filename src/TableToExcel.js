import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function TableToExcel() {
    // Данные как в вашей таблице
    const data = [
        { Товар: "Яблоко", Остаток: 25, Цена: 50 },
        { Товар: "Банан", Остаток: 40, Цена: 30 },
        { Товар: "Апельсин", Остаток: 15, Цена: 70 },
    ];

    const exportToExcel = () => {
        // 1. Превращаем JSON в лист
        const worksheet = XLSX.utils.json_to_sheet(data);

        // 2. Создаем книгу и добавляем лист
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Товары");

        // 3. Генерируем файл и скачиваем
        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        });

        const file = new Blob([excelBuffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });

        saveAs(file, "Товары.xlsx");
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Склад товаров</h2>

            <table border="1" cellPadding="10">
                <thead>
                <tr>
                    <th>Товар</th>
                    <th>Остаток</th>
                    <th>Цена</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.Товар}</td>
                        <td>{item.Остаток}</td>
                        <td>{item.Цена}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <br />

            <button onClick={exportToExcel}>
                Скачать Excel
            </button>
        </div>
    );
}