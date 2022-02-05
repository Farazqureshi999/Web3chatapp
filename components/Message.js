import React from 'react';
import {useMoralis} from 'react-moralis';
import Avatar from './Avatar';

function Message({message}) {
    const {user} = useMoralis();

    const isUserMessage = message.get('ethAddress') !== user.get("ethAddress");
    return <div
        className={`flex items-end  relative ${isUserMessage && "justify-end"}`}>
            <div className={`relative h-8 w-8 ${isUserMessage && "order-last"}`}>
                <Avatar />
            </div>
        <div
            className={`flex mb-4  p-3 rounded-lg ${isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-400"}`}>
            <p>{message.get('message')}</p>
        </div>
    </div>;
}

export default Message;
