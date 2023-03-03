import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { logout } from "../Redux/actions/actions";
import { selectPostUserLogout } from "../Redux/selectors/loginSelector";

// This is to react router 6 - TO protect the route in UI
const PrivateRoutes = () => {
  const auth = localStorage.getItem("jwt");
  const dispatch = useAppDispatch();
  const Logout = useAppSelector(selectPostUserLogout);

  // Add Logout button after user login
  const UserLogout = () => {
    dispatch(logout());
    // If logout, redirect to Login page
    if (Logout.success) {
      return <Navigate to="/Login" />;
    }
  };

  return (
    <>
      <div className="logoutButton">
        <button onClick={UserLogout}>Logout</button>
      </div>
      {auth ? <Outlet /> : <Navigate to="/Login" />}
    </>
  );
};

export default PrivateRoutes;
