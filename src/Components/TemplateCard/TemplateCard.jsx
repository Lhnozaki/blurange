import React from "react";
import { Link } from "react-router-dom";
import styles from "./TemplateCard.module.scss";

const TemplateCard = ({
  template,
  i,
  isSelected,
  userInfo,
  toggleSelectedState,
  setUserInfo,
  links,
  pictures
}) => {
  function renderSelectedState(index) {
    return isSelected === index
      ? { borderWidth: "2px", borderColor: "rgba(178, 190, 195, 0.7" }
      : { borderWidth: "1px", borderColor: "rgba(178, 190, 195, 0.4)" };
  }

  function selectTemplate() {
    toggleSelectedState(i);
    // switch this to hit the redux store and update userInfo rather than a local function
    // setUserInfo({ ...userInfo, template: template });
  }

  return (
    <div
      className="card"
      id={styles.templateCard}
      style={renderSelectedState(i)}
      onClick={() => selectTemplate()}
    >
      <div className={styles.imageContainer}>
        <Link to={links[i]}>
          <img src={pictures[i]} alt="" />
        </Link>
      </div>
      <h3 className="color-blue">
        template <span>{i + 1}</span>
      </h3>
    </div>
  );
};

export default TemplateCard;
