import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import NavBar from "./NavBar";
import Top from "./Top";
import Users from "./Users";
import UserDetail from "./UserDetail";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Top />} />
                <Route exact path="/users" element={<Users />} />
                <Route exact path="/users/:id" element={<UserDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
