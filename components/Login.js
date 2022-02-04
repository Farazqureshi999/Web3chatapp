import Image from "next/image";
import { useMoralis } from "react-moralis";


function Login({auth}) {

    const {authenticate} = useMoralis();
    return <div className="bg-black relative text-white">

        <div className="flex flex-col absolute z-50 h-5/6 items-center w-full justify-center">
            <Image className="object-cover rounded-full object-top" src="https://links.papareact.com/3pi" width={300} height={300}/> {/* Login Button */}
            <button onClick={()=> authenticate()} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse mt-4">Login to the metaverse</button>
        </div>

        <div className="w-full h-screen">
            <Image src="https://links.papareact.com/55n" objectFit="cover" layout="fill"/> {/* Login Form */}
        </div>
    </div>;
}

export default Login;
