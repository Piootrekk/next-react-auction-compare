"use client";
import { login } from "@/actions/login";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardHeader, CardDescription, CardContent } from "../ui/card";
import ErrorMessage from "@/components/error/ErrorMessage";
import { useFormState } from "react-dom";
import PendingSubmit from "../loading/PendingSubmit";

const Login = () => {
  const [error, action, isPending] = useFormState(login, undefined, "/");
  return (
    <div className="flex flex-col items-center justify-center mt-14 ">
      <h1 className="sm:text-5xl text-4xl font-extrabold pb-4">Login</h1>
      <Card className="w-[400px]">
        <CardHeader className="text-2xl">
          Login
          <CardDescription>
            <label>to your account if you have one.</label>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="mb-4 gap-2">
              <Input type="email" placeholder="Type your email" name="email" />
              {error?.zodError?.emailError && (
                <ErrorMessage message={error.zodError.emailError.message} />
              )}
            </div>
            <div className="mb-4 gap-2">
              <Input
                type="password"
                placeholder="Type your password"
                name="password"
              />
              {error?.zodError?.passwordError && (
                <ErrorMessage message={error.zodError.passwordError.message} />
              )}
            </div>
            <PendingSubmit buttonName="Login" />
            {error?.sbError && (
              <ErrorMessage
                message={error.sbError}
                className="mt-2 text-center"
              />
            )}
            {isPending && <p>PENDING</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default Login;
