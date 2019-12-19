import React, { useState } from 'react';
import styles from './EditorTemplates.module.scss';
import TemplateCard from '../../TemplateCard';
import { Link } from 'react-router-dom';

const EditorTemplates = () => {
    const arrTemplateNames = [
        'ATemplate1',
        'ATemplate2',
        'DTemplate1',
        'DTemplate2',
        'JTemplate1',
        'JTemplate2',
        'KTemplate1',
        'KTemplate2',
        'LTemplate1',
        'LTemplate2'
    ];

    const [isSelected, setSelected] = useState(null);


    function toggleSelectedState(index) {
        setSelected(index);
    }



    return (
        // Maybe break list of templates into a different component
        // need to fix the back button to redirect to previous route rather than the templates page
        <div className="container-sm">
            <div className={styles.templatesContainer}>
                {
                    arrTemplateNames.map((template, i) => (
                        <TemplateCard i={i} key={i} template={template} isSelected={isSelected} setSelected={setSelected} toggleSelectedState={toggleSelectedState} />
                    ))
                }

            </div>
            <div className="editor-button-container">
                <button><Link to="/editor/info">continue</Link></button>
            </div>
        </div>

    )
}
export default EditorTemplates;