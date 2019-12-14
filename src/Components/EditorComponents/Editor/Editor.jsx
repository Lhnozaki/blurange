import React, { useState } from 'react';
import Timeline from '../Timeline';
import Sidebar from '../Sidebar';
import EditorView from '../EditorView';


const Editor = () => {
    const [editorStatus, setEditorStatus] = useState(0);

    return (
        <div>
            <Timeline editorStatus={editorStatus} />
            <Sidebar setEditorStatus={setEditorStatus} />
            <EditorView setEditorStatus={setEditorStatus} editorStatus={editorStatus} />
        </div>
    )
}

export default Editor;