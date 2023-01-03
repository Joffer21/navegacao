import React from "react";
import './Content.css';
import { Routes, Route } from "react-router-dom";

import Home from "../../Views/Examples/Home";
import Param from "../../Views/Examples/Param";
import About from "../../Views/Examples/About";
import NotFound from "../../Views/Examples/NotFound";

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/Param/:id" element={<Param />} />
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
)

export default Content