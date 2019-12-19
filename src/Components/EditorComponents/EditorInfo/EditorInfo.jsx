import React, { useState } from 'react';
import styles from './EditorInfo.module.scss';
import TextInput from '../../Inputs/TextInput';
import TextareaInput from '../../Inputs/TextareaInput';
import { Link } from 'react-router-dom';

const EditorInfo = ({ handleChange }) => {
    const [userInfo, setUserInfo] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        console.log('user info', userInfo)
    }

    return (
        <div className="container-sm">
            <div className={styles.infoCta}>
                <h3>Fill in info or</h3>
                <button>login with linkedin</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="auto-grid grid-gap-md">
                    <TextInput type="text" title="first" name="firstName" value="hi" placeholder="first name" handleChange={handleChange} userInfo={userInfo} setUserInfo={setUserInfo} />
                    <TextInput type="text" title="last" name="lastName" value="yo" placeholder="last name" handleChange={handleChange} userInfo={userInfo} setUserInfo={setUserInfo} />
                    <TextareaInput title="about" name="about" value="tell us about yourself" handleChange={handleChange} userInfo={userInfo} setUserInfo={setUserInfo} />
                </div>
                <div className="editor-button-container">
                    <button><Link to="/editor/templates">go back</Link></button>
                    <button><Link to="/editor/deploy">continue</Link></button>
                </div>

            </form>
        </div>
    )
}
export default EditorInfo;
