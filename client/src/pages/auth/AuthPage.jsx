import React from "react";
import { PassageAuth } from "@passageidentity/passage-react";
import {
  useRegisterMutation,
  useLoginMutation,
} from "../../slices/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setCredentials } from "../../slices/authSlice";
import backgroundImg from "../../assets/background-image.jpg";

const AuthPage = () => {
  const [register, { isLoading: isRegisterLoading, error: registerError }] =
    useRegisterMutation();
  const [login, { isLoading: isLoginLoading, error: loginError }] =
    useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const from = location.state?.from?.pathname || "/";

  const onSuccess = async (authResult, payload) => {
    try {
      const email = payload.identifier;
      let response;
      if (payload.authType === "login") {
        response = await login({ email }).unwrap();
      } else if (payload.authType === "register") {
        response = await register({ email }).unwrap();
      }
      dispatch(setCredentials({ ...response, email }));

      navigate(from, { replace: true });
    } catch (error) {
      console.error("Failed to authenticate", error);
      toast.error(error?.data?.error || "Authentication failed!");
    }
  };

  return (
    <div
      className="flex items-center flex-col justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <PassageAuth onSuccess={onSuccess} />
      {(isRegisterLoading || isLoginLoading) && <p>Loading...</p>}
      {(registerError || loginError) && (
        <p>Error: {registerError?.message || loginError?.message}</p>
      )}
    </div>
  );
};

export default AuthPage;
