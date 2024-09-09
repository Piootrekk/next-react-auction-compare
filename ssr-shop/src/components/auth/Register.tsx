"use client";
import { register } from "../../actions/register";
import { Input } from "../ui/input";
import { Card, CardHeader, CardDescription, CardContent } from "../ui/card";
import PendingSubmit from "../loading/PendingSubmit";
import { useFormState } from "react-dom";
import ErrorMessage from "../error/ErrorMessage";

const Register = () => {
  const [error, action] = useFormState(register, undefined, "/");
  return (
    <div className="flex flex-col items-center justify-center mt-14 ">
      <h1 className="sm:text-5xl text-4xl font-extrabold pb-4">Register</h1>
      <Card className="w-[400px]">
        <CardHeader className="text-2xl">
          Register
          <CardDescription>
            <label>to create an account.</label>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="mb-4">
              <Input type="email" placeholder="Type your email" name="email" />
              {error?.zodError?.email && (
                <ErrorMessage message={error.zodError.email} />
              )}
            </div>
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Type your password"
                name="password"
              />
              {error?.zodError?.password && (
                <ErrorMessage message={error.zodError.password} />
              )}
            </div>
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
              />
              {error?.zodError?.confirmPassword && (
                <ErrorMessage message={error.zodError.confirmPassword} />
              )}
            </div>
            <PendingSubmit buttonName="Register" />
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

export default Register;
