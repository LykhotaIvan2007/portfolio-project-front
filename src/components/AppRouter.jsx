import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {loggedRoutes, notLoggedRoutes} from "../routes/routes";
import { AutorizeContext } from "../context/Autorization";
import { useContext } from "react";


const AppRouter = () => {
    const {isAutorized, setIsAutorized} = useContext(AutorizeContext);
  return (
    <Routes>
        {loggedRoutes.map(route => (
            <Route
                key={route.path}
                path={route.path}
                element={
                    isAutorized
                    ? <route.element/>
                    : <Navigate to="/login" replace/>
                }
            />
        ))}

        {notLoggedRoutes.map(route =>(
            <Route
                key={route.path}
                path={route.path}
                element={
                    !isAutorized
                    ? <route.element/>
                    : <Navigate to="/home" replace/>
                }
            />
        ))}
    </Routes>
  );
};

export default AppRouter;