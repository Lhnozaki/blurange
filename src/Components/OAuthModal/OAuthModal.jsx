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

<<<<<<< HEAD
  useEffect(() => {
    setTimeout(() => {
      console.log(props);
      OAuthRef.current.innerHTML = props.githubURL ? props.githubURL : "None";
=======
  const githubAuthURL = `https://github.com/login/oauth/authorize?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fauth%2Fgithub%2Fcallback&scope=repo&client_id=f58bc8b0116e9bac9dd2`;

  const iframe = `<iframe src=${githubAuthURL} />`;

  useEffect(() => {
    setTimeout(() => {
      console.log(props);
      OAuthRef.current.innerHTML = iframe;
>>>>>>> 6136120797f53df174fa606dc23f44a711391eeb
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
