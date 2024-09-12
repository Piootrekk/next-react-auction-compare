import {
  CardContent,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema, TLoginSchema } from "@/lib/schema/authSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "@/context/AuthContext";
import ErrorMessage from "../error/formError";

import LoadingSpin from "../loading/LoadingSpin";

const LoginForm = () => {
  const { loginState } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (formData: TLoginSchema) => {
    loginState.execute(formData.email, formData.password);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-14 ">
      <h1 className="sm:text-5xl text-4xl font-extrabold pb-4">Login</h1>
      <Card className="w-[400px]">
        <CardHeader className="text-2xl">
          Login
          <CardDescription>
            <label>to your account if you have one.</label>
          </CardDescription>
          {loginState.error && (
            <ErrorMessage message={loginState.error.message} />
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 gap-2">
              <Input
                type="email"
                placeholder="Type your email"
                {...register("email")}
              />
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>
            <div className="mb-4 gap-2">
              <Input
                type="password"
                placeholder="Type your password"
                {...register("password")}
              />
              {errors.password && (
                <ErrorMessage message={errors.password.message} />
              )}
            </div>
            <Button type="submit" size={"lg"} className="w-full p-2">
              {loginState.isLoading ? <LoadingSpin /> : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
