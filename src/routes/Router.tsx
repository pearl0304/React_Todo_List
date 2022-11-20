import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// COMPONENTS
import {SignUp} from "../pages/signUp";
import {Login} from "../pages/login"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<SignUp/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}