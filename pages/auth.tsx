import Input from "@/components/Input";
import axios from "axios";
import { useCallback, useState } from "react";
import { signIn } from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";



const Auth = () => {
    const [email, setEmail] = useState("");
    const [name, setname] = useState("");
    const [password, setPassword] = useState("");

    const [varient, setVarient] = useState("login");
    const toggleVarient = useCallback(() => {
        setVarient((current) => current === "login" ? "register" : "login");
    }, [])

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email, name, password
            })
        } catch (error) {
            console.log(error)
        }
    }, [email, name, password])


    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email, password, redirect: true, callbackUrl: '/profiles'
            })
        } catch (error) {
            console.log(error)
        }
    }, [email, password])

    return (
        <div id="bgimage" className={`"bg-cover h-full w-full relative bg-no-repeat bg-center bg-fixed"`}>
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5 ">
                    <img src="/images/logo.png" alt="logo" className="h-16" />
                </nav>
                <div className="flex justify-center items-center ">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md  w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">{varient === "login" ? 'Sign In' : "Create Account"}</h2>
                        <div className="flex flex-col gap-4 ">
                            {varient === "register" &&

                                <Input id={"name"} onChange={(event: any) => { setname(event.target.value) }} value={name} label={"name"} />
                            }
                            <Input id={"email"} onChange={(event: any) => { setEmail(event.target.value) }} value={email} label={"Email"} />
                            <Input id={"password"} onChange={(event: any) => { setPassword(event.target.value) }} value={password} label={"Password"} type={"password"} />
                        </div>
                        <button onClick={varient === "login" ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">{varient === "login" ? 'Login' : "Sign Up"}</button>
                        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                            <div onClick={() => signIn('google', { callbackUrl: '/' })} className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition">
                                <FcGoogle size={30} />
                            </div>
                            <div onClick={() => signIn('github', { callbackUrl: '/' })} className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition">
                                <FaGithub size={30} />
                            </div>
                        </div>
                        <p className="text-neutral-500 mt-12">
                            {varient === "login" ? 'First time using netflix?' : "Already Have an Account?"}
                            <span onClick={toggleVarient} className="cursor-pointer text-white ml-1 hover:underline">{varient === "login" ? 'Create Account' : "Login "}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;