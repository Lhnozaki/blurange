import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { animated, useSpring } from "react-spring";
import styles from "./OAuthModal.module.scss";

const OAuthModal = ({ showOAuth, setShowOAuth, ...props }) => {
  const fade = useSpring({
    opacity: showOAuth ? "1" : "0",
    transform: showOAuth ? "translateY(0)" : "translateY(-40px)",
    pointerEvents: showOAuth ? "all" : "none"
  });

  const OAuthRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(props);
      OAuthRef.current.innerHTML = props.githubURL ? props.githubURL : "None";
    }, 1000);
  }, []);

  return (
    <animated.div className={styles.oauthModal} ref={OAuthRef} style={fade}>
      Loading
    </animated.div>
  );
};

const mapStateToProps = state => {
  return {
    githubURL: state
  };
};

export default connect(mapStateToProps, null)(OAuthModal);
