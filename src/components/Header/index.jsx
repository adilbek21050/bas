import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {handleChange} from "../lib";
import img from "../photo/photo_5307944421372401161_x (1).jpg"




const Header = () => {
    const dispatch = useDispatch()
    const {defCurren} = useSelector(state => state)


    return (
        <div>
            <div className="container">
                <div className="flex justify-between text-xl py-5">
                    <NavLink to={"/"}>
                        <img width={150} src={img} alt=""/>
                    </NavLink>
                    <div className="flex justify-between w-[400px]">
                        <NavLink to={"/"}>
                            product
                        </NavLink>
                        <NavLink to={"/basket"}>
                            basket
                        </NavLink>
                        <NavLink to={"/favorite"}>
                            favorite
                        </NavLink>
                        <NavLink to={"/print"}>
                            Print
                        </NavLink>
                    </div>
                    <div>
                        <select onChange={(e)=> dispatch(handleChange(e))}>
                            <option value="kg" selected={defCurren === "kg"}>kg</option>
                            <option value="ru" selected={defCurren === "ru"}>ru</option>
                            <option value="usa" selected={defCurren === "usa"}>usa</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;