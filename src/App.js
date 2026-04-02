import './App.css';
import {Route, Routes} from "react-router-dom";
import Product from "./components/Pages/Product";
import Basket from "./components/Pages/Basket";
import Favorite from "./components/Pages/Favorite";
import Print from "./components/Pages/Print";
import TableToExcel from "./TableToExcel";

function App() {
    return (
        <>
            <div className="App">
                <div className="container">
                    <Routes>
                        <Route path={"/"} element={<Product/>}/>
                        <Route path={"/basket"} element={<Basket/>}/>
                        <Route path={"/favorite"} element={<Favorite/>}/>
                        <Route path={"/print"} element={<Print/>}/>
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
