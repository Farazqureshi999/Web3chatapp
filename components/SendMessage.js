import React, { useState } from 'react';
import { useMoralis } from 'react-moralis';

function SendMessage({endOfMessageRef}) {
    const {user,Moralis} = useMoralis();
    const [message,setMessage] = useState('');
    

    const sendMessage = (e) =>{
        e.preventDefault();

        if(!message) return;

        const Message = Moralis.Object.extend("Messages");
        const messages = new Message();

        messages.save({
            message:message,
            username:user.getUsername(),
            etherAddress:user.get('ethAddress'),
        }).then((message) =>{
            console.log(message);
        }).catch(err => console.log(err));

        endOfMessageRef.current.scrollIntoView({behavior:'smooth'});

        setMessage(" ");

    }
  return <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-5 max-w-2xl w-11/12 shadow-xl rounded-full border-4 border-blue-400">
      <input value={message} onChange={(e)=> {setMessage(e.target.value)}} type="text" className="outline-none bg-transparent text-white placeholder-gray-500 " placeholder={`Enter a Message ${user.getUsername()}`}/>
      <button onClick={sendMessage} className="font-bold text-pink-500">Send</button>
  </form>;
}

export default SendMessage;
