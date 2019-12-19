import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Timeline from "../Timeline";
import Sidebar from "../Sidebar";
import EditorView from "../EditorView";

import { getGithubAccount } from "../../../actions";

const Editor = props => {
  const [editorStatus, setEditorStatus] = useState(0);

  useEffect(() => {
    props.getGithubAccount();
  }, []);

  return (
    <div>
      <Timeline editorStatus={editorStatus} />
      <Sidebar setEditorStatus={setEditorStatus} />
      <EditorView
        setEditorStatus={setEditorStatus}
        editorStatus={editorStatus}
      />
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
)(Editor);
