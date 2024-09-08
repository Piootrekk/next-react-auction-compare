"use client";
import { login } from "@/actions/login";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardHeader, CardDescription, CardContent } from "../ui/card";
import ErrorMessage from "@/components/error/ErrorMessage";
import { useFormState } from "react-dom";
import PendingSubmit from "../loading/PendingSubmit";

const Login = () => {
  const [error, action] = useFormState(login, undefined, "/");
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
              {error?.zodError?.email && (
                <ErrorMessage message={error.zodError.email} />
              )}
            </div>
            <div className="mb-4 gap-2">
              <Input
                type="password"
                placeholder="Type your password"
                name="password"
              />
              {error?.zodError?.password && (
                <ErrorMessage message={error.zodError.password} />
              )}
            </div>
            <PendingSubmit buttonName="Login" />
            {error?.sbError && (
              <ErrorMessage
                message={error.sbError}
                className="mt-2 text-center"
              />
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default Login;
