"use client";
import { useEffect } from "react";

const LoadBootstrapJS = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
};

export default LoadBootstrapJS;
