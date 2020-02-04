import React from "react";
import { connect } from "react-redux";

import { logoutGithub } from "../../actions";

const LogoutModal = ({ isAuth, setAuth, ...props }) => {
  const handleLogout = event => {
    event.preventDefault();
    setAuth(false);
    props.logoutGithub();
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logoutGithub: () => {
      dispatch(logoutGithub());
    }
  };
};

export default connect(null, mapDispatchToProps)(LogoutModal);
