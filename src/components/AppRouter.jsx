import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {loggedRoutes, notLoggedRoutes} from "../routes/routes";
import { AutorizeContext } from "../context/Autorization";
import { useContext } from "react";


const AppRouter = () => {
  const { isAutorized } = useContext(AutorizeContext);

  return (
    <Routes>
      {loggedRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={
            isAutorized
              ? <route.element />
              : <Navigate to="/login" replace />
          }
        />
      ))}

      {notLoggedRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={
            !isAutorized
              ? <route.element />
              : <Navigate to="/home" replace />
          }
        />
      ))}

      <Route
        path="*"
        element={
          isAutorized
            ? <Navigate to="/home" replace />
            : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
};

export default AppRouter;