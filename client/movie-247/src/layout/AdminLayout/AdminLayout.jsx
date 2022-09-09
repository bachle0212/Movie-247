import React from "react";
import PropTypes from "prop-types";
import AdminDashboard from "../../components/AdminDashboard/DashboardLayout";

AdminLayout.propTypes = {};

function AdminLayout(props) {
  return (
    <div className="grid">
      <div className="container">{props.children}</div>
    </div>
  );
}

export default AdminLayout;
