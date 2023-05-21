import { Info } from "@components/icons";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import Logo from "@components/ui/Logo/Logo";
import Text from "@components/ui/Text";
import hitToast from "@components/ui/Toast/hitToast";
import { AuthContext } from "context/AuthProvider";
import { validate } from "email-validator";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";


const Signup = () => {
  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [dirty, setDirty] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const { signUpUser, user } = useContext(AuthContext);
  // console.log(user)

  const handleSignup = async (e) => {
    e.preventDefault();
    // console.log(email, password)

    if (!dirty && !disabled) {
      setDirty(true);
      handleValidation();
      return;
    }
    try {
      setLoading(true);
      setMessage("");
      await signUpUser(email, password);
      hitToast("success", `Hi! ${firstName}, Welcome to A1 IT Firm`);
      router.push("");
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

  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password);

    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword);
    }
  }, [email, password, dirty]);

  useEffect(() => {
    handleValidation();
  }, [handleValidation]);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSignup}
        className="w-80 flex flex-col justify-between p-3"
      >
        <div className="flex justify-center">
          {/* --- Logo Start--- */}
          <Logo />
          {/* --- Logo End--- */}
        </div>
        <div className="flex flex-col space-y-4">
          <Text variant="body" className="text-center">
            Admin Panel
          </Text>
          {message && (
            <div
              className="text-red border border-red p-3"
              dangerouslySetInnerHTML={{
                __html: message,
              }}
            ></div>
          )}
          <>
            <label htmlFor="first name" className="text-gray-300">
              First Name
            </label>
            <Input placeholder="First Name" onChange={setFirstName} />
          </>
          <>
            <label htmlFor="last name" className="text-gray-300">
              Last Name
            </label>
            <Input placeholder="Last Name" onChange={setLastName} />
          </>
          <>
            <label htmlFor="email" className="text-gray-300">
              Email
            </label>
            <Input type="email" placeholder="Email" onChange={setEmail} />
          </>
          <>
            <label htmlFor="email" className="text-gray-300">
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter Password"
              onChange={setPassword}
              className="rounded"
            />
          </>
          <span className={`${!dirty ? "text-accent-8" : "text-red"}`}>
            <span className="inline-block align-middle ">
              <Info width="15" height="15" />
            </span>{" "}
            <span className="leading-6 text-sm">
              <strong>Info</strong>: Passwords must be longer than 7 chars and
              include numbers.{" "}
            </span>
          </span>
          <div className="pt-2 w-full flex flex-col">
            <Button
              onClick={handleSignup}
              variant="slim"
              type="submit"
              className="border-none rounded"
              loading={loading}
              disabled={disabled}
            >
              Sign Up
            </Button>
          </div>

          <span className="pt-1 text-center text-sm">
            <span className="text-accent-7">Do you have an account?</span>
            {` `}
            <a
              className="text-accent-9 font-bold hover:underline cursor-pointer"
              onClick={() => router.push("login")}
            >
              Log In
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
