import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateHome = () => {
  const nav = useNavigate("");
  return nav("/");
};

export default NavigateHome;
