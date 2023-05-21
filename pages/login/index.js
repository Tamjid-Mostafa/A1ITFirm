import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import Logo from "@components/ui/Logo/Logo";
import Text from "@components/ui/Text";
import hitToast from "@components/ui/Toast/hitToast";
import { AuthContext } from "context/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const Login = () => {
  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [dirty, setDirty] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const { signIn, user } = useContext
  (AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!dirty && !disabled) {
      setDirty(true);
    }
    try {
      setLoading(true);
      setMessage("");
      await signIn(email, password);
      hitToast("success", `Welcome to A1 IT Firm`);
      router.push("/");
    } catch ({ errors }) {
      console.error(errors);
      if (errors) {
        setMessage(errors.map((e) => e.message).join("<br/>"));
      } else {
        setMessage("Unexpected error");
      }
      setDisabled(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSignIn}
        className="w-80 flex flex-col justify-between p-3"
      >
        <div className="flex justify-center ">
          {/* --- Logo Start--- */}

          <Logo />

          {/* --- Logo End--- */}
        </div>
        <div className="flex flex-col space-y-3">
          <Text variant="body" className="text-center">
            Admin Panel
          </Text>
          {message && (
            <div className="text-red-700 border border-red-700 p-3">
              {message}. Did you {` `}
              <a
                className="text-gray-900 inline font-bold hover:underline cursor-pointer"
                onClick={() => router.push("/forgot-password")}
              >
                forgot your password?
              </a>
            </div>
          )}
          <>
            <label htmlFor="email" className="text-gray-300">
              Email
            </label>
            <Input
              type="email"
              placeholder="Enter Email"
              onChange={setEmail}
              className="rounded"
            />
          </>
          <>
            <label
              htmlFor="password"
              className="text-gray-300 flex justify-between items-center"
            >
              <span>Password</span>
              <Link href="/forget-password" className="text-[#293FCC]">Forgot password?</Link>
            </label>
            <Input
              type="password"
              placeholder="Enter Password"
              onChange={setPassword}
              className="rounded"
            />
          </>

          <Button
            onClick={handleSignIn}
            variant="slim"
            type="submit"
            className="border-none rounded"
            loading={loading}
            disabled={disabled}
            style={{
              marginTop: "25px",
            }}
          >
            Log In
          </Button>
          <div className="pt-1 text-center text-sm">
            <span className="text-accent-7">Don&apos;t have an account?</span>
            {` `}
            <a
              className="text-accent-9 font-bold hover:underline cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
