import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./EditorTemplates.module.scss";
import TemplateCard from "../../TemplateCard";
import { Link } from "react-router-dom";

import { getGithubAccount } from "../../../actions";

const EditorTemplates = props => {
  const arrTemplateNames = ["Aewis", "Andrip", "Dewis"];

  const links = [
    "https://andrew2.nocan.design",
    "https://andrew.nocan.design",
    "https://dewis.nocan.design"
  ];

  const [isSelected, setSelected] = useState(null);

  function toggleSelectedState(index) {
    setSelected(index);
  }

  useEffect(() => {
    props.getGithubAccount();
  }, []);

  return (
    <div className="container-lg" id={styles.editorTemplates}>
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

export default connect(
  null,
  mapDispatchToProps
)(EditorTemplates);
