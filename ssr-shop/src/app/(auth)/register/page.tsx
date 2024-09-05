import { authCheck } from "@/actions/authCheck";
import Register from "@/components/auth/Register";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const { data } = await authCheck();

  if (data.user) {
    redirect("/");
  }

  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
