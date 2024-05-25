import css from "./Layout.module.css";
import React from "react";
export const Layout = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
