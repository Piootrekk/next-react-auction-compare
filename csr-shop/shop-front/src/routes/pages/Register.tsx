import RegisterForm from "@/components/page-components/auth/RegisterForm";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { isAuthorized } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized) {
      navigate("/", { replace: true });
    }
  }, []);
  return <RegisterForm />;
};

export default Register;
