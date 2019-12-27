import React from 'react';
import styles from './TemplateCard.module.scss';

const TemplateCard = ({ i, isSelected, toggleSelectedState, links }) => {

    function renderSelectedState(index) {
        return isSelected === index ? { borderWidth: '2px', borderColor: 'rgba(178, 190, 195, 0.7' } : { borderWidth: '1px', borderColor: 'rgba(178, 190, 195, 0.4)' }
    }

    function selectTemplate() {
        toggleSelectedState(i)
    }


    return (

        <div className="card" id={styles.templateCard} style={renderSelectedState(i)} onClick={() => selectTemplate()}>
            <div className={styles.imageContainer}>
                <a href={links[i]} alt="image" target="_blank">
                    <img src="https://images.unsplash.com/photo-1558981420-bf351ce8e3ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                </a>
            </div>
            <h3 className="color-blue">
                template <span>{i + 1}</span>
            </h3>
        </div>

    )
}

export default TemplateCard;