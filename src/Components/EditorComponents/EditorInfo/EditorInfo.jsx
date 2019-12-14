import React from 'react';
import styles from './EditorInfo.module.scss';
import TextInput from '../../Inputs/TextInput';
import TextareaInput from '../../Inputs/TextareaInput';

const EditorInfo = ({ setEditorStatus, handleChange, userInfo, currentVal, setUserInfo }) => {
    function handleSubmit(e) {
        e.preventDefault();
        setEditorStatus(2)
        console.log('user info', userInfo)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className="auto-grid grid-gap-md">
                    <TextInput type="text" title="first" name="firstName" value="hi" placeholder="first name" handleChange={handleChange} userInfo={userInfo} setUserInfo={setUserInfo} />
                    <TextInput type="text" title="last" name="lastName" value="yo" placeholder="last name" handleChange={handleChange} userInfo={userInfo} setUserInfo={setUserInfo} />

                </div>
                <button className={styles.continueBtn}>continue</button>
            </form>
        </div>
    )
}
export default EditorInfo;
