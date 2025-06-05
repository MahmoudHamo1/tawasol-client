import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Spinner from "./Spinner";

const Private = ({
  component: Component,
  users: { isAuthenticated, loading },
}) => {
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : isAuthenticated ? (
        <Fragment>
          <Sidebar></Sidebar>
          <Component></Component>
        </Fragment>
      ) : (
        <Navigate to="/"></Navigate>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps)(Private);
