import React, { useState } from 'react';
import Payment from '../../Payment';

const EditorDeploy = () => {
    const [showPay, setShowPay] = useState(false);

    return (
        <div>
            <div>Editor Deploy</div>
            <button onClick={() => setShowPay(!showPay)}>pay</button>
            {showPay && <Payment setShowPay={setShowPay} showPay={showPay} />}
        </div>
    )
}

export default EditorDeploy;