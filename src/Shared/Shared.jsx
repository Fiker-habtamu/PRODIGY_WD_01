import React from 'react'
import Header from '../Components/Header/Header';
import { Outlet } from "react-router-dom";


const Shared = () => {
  return (
    <>
    <Header/>
      <Outlet />
    </>
  );
}

export default Shared
