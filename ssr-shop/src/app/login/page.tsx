import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { login } from "@/actions/login";

const Login = () => {
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
          <form>
            <div className="mb-4">
              <Input type="email" placeholder="Type your email" name="email" />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Type your password"
                name="password"
              />
            </div>
            <Button type="submit" className="w-full p-2" formAction={login}>
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
