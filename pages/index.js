import Head from 'next/head'
import {useMoralis} from 'react-moralis';
import Login from '../components/Login'
import Header from '../components/Header'
import Messages from '../components/Messages'

export default function Home() {
    const {authenticate, isAuthenticated, user, logout} = useMoralis();

    if (!isAuthenticated) 
        return <Login auth={authenticate}/>

    return (
        <div className="h-screen overlay-y-scroll bg-gradient-to-b from-black to-fuchsia-500 overflow-hidden " > 
            <Head>
                <title>Web 3.0 Chat app</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
                <div className="max-w-screen-2xl mx-auto">
                    <Header/>
                    <Messages />
                </div>
            
            <button className="" onClick={logout}>Logout</button>

        </div>
    )
}
