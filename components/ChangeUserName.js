import React from 'react';
import {useMoralis} from 'react-moralis';

function ChangeUserName() {
    const {setUserData, isUserUpdating, userError, user} = useMoralis();

    const setUserName = () => {
        const username = prompt(`Enter your new username (current: ${user.getUsername()})`)

        if (!username) 
            return;
        
        setUserData({username})
    }

    return <div className="text-sm absolute top-5 right-5">
        <button onClick={setUserName} className="hover:text-pink-700">Change Your Username</button>
    </div>;
}

export default ChangeUserName;
