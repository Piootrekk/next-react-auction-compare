import { authCheck } from "@/actions/authCheck";
import Login from "@/components/auth/Login";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { data } = await authCheck();

  // if (data.user) {
  //   redirect("/");
  // }

  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
