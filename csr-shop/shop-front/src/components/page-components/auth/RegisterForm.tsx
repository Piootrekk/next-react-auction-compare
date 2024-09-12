import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { signUpSchema, TSignUpSchema } from "@/lib/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ErrorMessage from "../error/formError";
import LoadingSpin from "../loading/LoadingSpin";

const RegisterForm = () => {
  const { registerState } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (formData: TSignUpSchema) => {
    registerState.execute(formData.email, formData.password);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-14 ">
      <h1 className="sm:text-5xl text-4xl font-extrabold pb-4">Register</h1>
      <Card className="w-[400px]">
        <CardHeader className="text-2xl">
          Register
          <CardDescription>
            <label>to create an account.</label>
          </CardDescription>
          {registerState.error && (
            <ErrorMessage message={registerState.error.message} />
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
            <div className="mb-4 gap-2">
              <Input
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <ErrorMessage message={errors.confirmPassword.message} />
              )}
            </div>
            <Button type="submit" size={"lg"} className="w-full p-2">
              {registerState.isLoading ? <LoadingSpin /> : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
