import React, { useEffect } from "react";
import "./style.css";
import { RootContainer } from "./styled";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/home/home";
import Navbar from "../components/navbar/navbar";
import Login from "../pages/login";
import NavigateHome from "../components/NavigateHome/navigateHome";
import Products from "../components/products";

const Root = () => {
  useEffect(() => {
    if (localStorage.getItem("login") !== "true") {
      nav("/login");
    }
  }, []);

  const nav = useNavigate();
  if (localStorage.getItem("login") !== "true") {
    return (
      <RootContainer>
        <Login></Login>
      </RootContainer>
    );
  }
  return (
    <RootContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </RootContainer>
  );
};

export default Root;

[{ name: "Mahsulotlar" }, { name: "Hisobotlar" }];
