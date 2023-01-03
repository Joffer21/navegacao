import React from "react";
import Menu from "../Components/Layouts/Menu";
import Content from "../Components/Layouts/Content";
import './App.css';

import { BrowserRouter } from "react-router-dom";

const App = props => (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Content />
        </BrowserRouter>
    </div>
)

export default App