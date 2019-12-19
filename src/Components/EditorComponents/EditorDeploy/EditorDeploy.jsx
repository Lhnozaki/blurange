import React, { useState } from 'react';
import Payment from '../../Payment';
import { Link } from 'react-router-dom';

const EditorDeploy = () => {
    const [showPay, setShowPay] = useState(false);

    return (
        <div className="container-sm">
            <div>Editor Deploy</div>
            <button onClick={() => setShowPay(!showPay)}>pay</button>
            {showPay && <Payment setShowPay={setShowPay} showPay={showPay} />}

            <div className="editor-button-container">
                <button><Link to="/editor/info">go back</Link></button>
                <button>deploy</button>
            </div>
        </div>
    )
}

export default EditorDeploy;