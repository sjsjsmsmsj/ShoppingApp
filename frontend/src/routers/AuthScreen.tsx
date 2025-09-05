import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../screens/auth/Login.tsx';
import Signup from '../screens/auth/Signup.tsx';

const AuthScreen = () => {
    return (
        <div className="container-fluid">
            <div className="row">

                {/* Cột bên trái chỉ hiện trên màn hình lớn */}
                <div className="col-4 d-none d-lg-block">
                    <img src="/logo192.png" alt="logo" className="img-fluid" />
                </div>

                {/* Cột bên phải chứa phần Login / Signup */}
                <div className="col-8 content-center">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/sign-up" element={<Signup />} />
                        </Routes>
                    </BrowserRouter>
                </div>

            </div>
        </div>
    );
};

export default AuthScreen;
