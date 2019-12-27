import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./EditorTemplates.module.scss";
import TemplateCard from "../../TemplateCard";
import { Link } from "react-router-dom";
import img1 from "./Temp1.png";
import img2 from "./Temp2.png";
import img3 from "./Temp3.png";

import { getGithubAccount } from "../../../actions";

const EditorTemplates = props => {
  const arrTemplateNames = ["ATemplate1", "ATemplate2", "DTemplate1"];

  const links = [
    "/Templates/ATemplate1",
    "/Templates/ATemplate2",
    "/Templates/JTemplate1"
  ];

  const pictures = [img1, img2, img3];

  const [isSelected, setSelected] = useState(null);

  function toggleSelectedState(index) {
    setSelected(index);
  }

  useEffect(() => {
    props.getGithubAccount();
  }, []);

  return (
    // Maybe break list of templates into a different component
    // need to fix the back button to redirect to previous route rather than the templates page
    <div className="container-sm" id={styles.editorTemplates}>
      <h2 className="editor-title">Pick a template</h2>
      <div className={styles.templatesContainer}>
        {arrTemplateNames.map((template, i) => (
          <TemplateCard
            i={i}
            key={i}
            template={template}
            isSelected={isSelected}
            setSelected={setSelected}
            toggleSelectedState={toggleSelectedState}
            links={links}
            pictures={pictures}
          />
        ))}
      </div>
      <div className="editor-button-container">
        <button>
          <Link to="/editor/info">continue</Link>
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    getGithubAccount: () => {
      return dispatch(getGithubAccount());
    }
  };
};

export default connect(null, mapDispatchToProps)(EditorTemplates);
