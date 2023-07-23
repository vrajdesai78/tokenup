import React, { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "./navbar";
import Footer from "./footer";
import PropTypes from "prop-types";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <main className="mx-auto max-w-full min-h-[100vh]">
        <Sidebar />
        <div className="w-full min-h-[100vh] lg:pl-[220px] lg:pr-[60px]">
          <Navbar />
          <div className="pt-[20px] pl-[20px] sm:pl-[30px] md:pl-[220px] lg:pl-0">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};