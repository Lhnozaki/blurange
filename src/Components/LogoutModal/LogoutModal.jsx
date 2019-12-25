import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logoutGithub } from "../../actions";

const LogoutModal = (...props) => {
  useEffect(() => {
    props.logoutGithub();
  }, []);

  return (
    <>
      <div>
        <button
          onClick={handleLogout => {
            props.logoutGithub();
          }}
        >
          Logout
        </button>
      </div>
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

export default connect(
  null,
  mapDispatchToProps
)(LogoutModal);
