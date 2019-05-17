import React, { Component} from 'react'
import { NavLink } from "react-router-dom"

const navBar = () => {
    return (
        <div className="nav">
            <div className="wrapNavBar">
                <ul className="navBar">
                    <li>
                        <NavLink to="/" exact={true} activeClassName="navActive">Shopping</NavLink>
                    </li>
                    <li>
                        <NavLink to="/calculate" activeClassName="navActive">Calculate</NavLink>
                    </li>
                    <li>
                        <NavLink to="/todoApp" activeClassName="navActive">TodoList</NavLink>
                    </li>
                    <li>
                        <NavLink to="/clockApp" activeClassName="navActive">Clock</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gameApp" activeClassName="navActive">Game</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default navBar