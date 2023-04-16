import Button from "@components/ui/Button"
import { useUI } from "@components/ui/context"
import Input from "@components/ui/Input"
import { AuthContext } from "context/AuthProvider"
import Image from "next/image"
import { useContext, useState } from "react"



const LoginView = () => {
    // Form State
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [dirty, setDirty] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const { setModalView, closeModal } = useUI()

    const { createUser } = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault()
        setLoading(true);
        setError("");
        createUser()
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            });
    };
    const [value, setValue] = useState()

    return (
        <form
            className="w-80 flex flex-col justify-between p-3"
        >
            <div className="flex justify-center pb-12 ">
                {/* --- Logo Start--- */}

                <Image
                    src="/logo.png"
                    alt="Face2"
                    width={80}
                    height={100}
                    className=""
                    priority
                />

                {/* --- Logo End--- */}
            </div>
            <div className="flex flex-col space-y-3">
                {/* {message && ( */}
                <div className="text-red border border-red p-3">
                    {message}. Did you {` `}
                    <a
                        className="text-accent-9 inline font-bold hover:underline cursor-pointer"
                        onClick={() => setModalView('FORGOT_VIEW')}
                    >
                        forgot your password?
                    </a>
                </div>
                {/* )} */}
                <Input type="email" placeholder="Email" onChange={setEmail} />
                <Input type="password" placeholder="Password" onChange={setPassword} />
                <Button
                    variant="slim"
                    type="submit"
                    className="bg-accent-9"
                    loading={loading}
                    disabled={disabled}
                >
                    Log In
                </Button>
                <div className="pt-1 text-center text-sm">
                    <span className="text-accent-7">Don&apos;t have an account?</span>
                    {` `}
                    <a
                        className="text-accent-9 font-bold hover:underline cursor-pointer"
                        onClick={() => setModalView('SIGNUP_VIEW')}
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </form>
    )
}

export default LoginView
