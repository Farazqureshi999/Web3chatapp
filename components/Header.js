import Image from 'next/image';
import React from 'react';
import {useMoralis} from 'react-moralis';
import Avatar from '../components/Avatar'
import ChangeUserName from '../components/ChangeUserName'

function Header() {
    const {user} = useMoralis();
    return <div className="text-pink-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-pink-700 border-b-2"> 
        <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
            <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                <Image
                    objectFit='cover'
                    className="rounded-full"
                    layout="fill"
                    src="https://links.papareact.com/3pi"/>
            </div>
            <div className="text-left lg:text-center col-span-4">
                <div
                    className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
                    <Avatar logoutOnPress/>
                </div>
                {/* Welcome Message */}
                <h1 className="text-3xl font-bold">Welcome to the FQ Universe</h1>
                <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
                {/* Change Username */}
                <ChangeUserName/>
            </div>
        </div>
    </div>;
}

export default Header;
