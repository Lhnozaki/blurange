import React from 'react';
import styles from './EditorTemplates.module.scss';
import TemplateCard from '../../TemplateCard';

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

    return (
        // Maybe break list of templates into a different component
        // need to fix the back button to redirect to previous route rather than the templates page
        <div className={styles.templatesContainer}>
            {
                arrTemplateNames.map((template, idx) => (
                    <TemplateCard template={template} idx={idx} key={idx} />
                ))
            }
        </div>
    )
}
export default EditorTemplates;