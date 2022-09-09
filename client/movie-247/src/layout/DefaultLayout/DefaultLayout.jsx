import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

DefaultLayout.propTypes = {};

function DefaultLayout(props) {
  return (
    <div className="grid">
      <Header />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
