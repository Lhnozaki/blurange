import React, { useState } from 'react'
import styles from './LoginModal.module.scss';

const LoginModal = ({ setLoginOn, setAuth }) => {

    const [credentials, setCredentials] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        console.log('credentials', credentials);
        setAuth(true);
        setLoginOn(false);
    }

    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }


    return (
        <div className={styles.loginOverlay}>
            <div className={styles.loginModal}>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <label>email</label>
                    <input type="email" name="email" required onChange={handleChange} />
                    <label>password</label>
                    <input type="password" id="pass" name="password"
                        minLength="8" required onChange={handleChange} />
                    <input className={styles.loginBtn} type="submit" value="login" />
                    <button className="alt-btn" onClick={() => setLoginOn(false)}>go back</button>
                </form>
            </div>
        </div>

    )
}


export default LoginModal;