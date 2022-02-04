import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import Login from '../components/Login'


export default function Home() {
  const { authenticate, isAuthenticated, user,logout } = useMoralis();

    if (!isAuthenticated) 
        return <Login auth={authenticate}/>

    return (
        <div className="h-screen">
            <Head>
                <title>Web 3.0 Chat app</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1>Welcome {user?.get("username")}</h1>
            <button className="" onClick={logout}>Logout</button>

        </div>
    )
}
