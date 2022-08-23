import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import {Contacts} from "./pages/Contacts";
import {Route, Routes} from 'react-router-dom'
import {Login} from "./pages/Login";
import {HomePage} from "./pages/HomePage";
import {Layout} from "./shared/core/Layout";


function App() {
    return (
        <div className="App">
            <CssBaseline/>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="contacts" element={<Contacts/>}/>
                    </Route>
                </Routes>
        </div>
    );
}

export default App;
