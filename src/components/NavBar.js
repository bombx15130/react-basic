import React, { Component} from 'react'
import { Link } from "react-router-dom"

const navBar = () => {
    return (
        <div className="wrapNavBar">
            <ul className="navBar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/calculate">Calculate</Link>
                </li>
                <li>
                    <Link to="/todoList">TodoList</Link>
                </li>
            </ul>
        </div>
    )
}

export default navBar