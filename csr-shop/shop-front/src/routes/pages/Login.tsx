import LoginForm from "@/components/page-components/auth/LoginForm";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuthorized } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized) {
      navigate("/", { replace: true });
    }
  }, []);
  return <LoginForm />;
};

export default Login;
