import React, { useEffect } from "react";
import { PassageAuth } from "@passageidentity/passage-react";
import {
  useRegisterMutation,
  useLoginMutation,
} from "../../slices/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setCredentials } from "../../slices/authSlice";
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
      dispatch(setCredentials(response));

      navigate(from, { replace: true });
    } catch (error) {
      console.error("Failed to authenticate", error);
      toast.error(error?.data?.error || "Authentication failed!");
    }
  };

  return (
    <>
      <PassageAuth onSuccess={onSuccess} />
      {(isRegisterLoading || isLoginLoading) && <p>Loading...</p>}
      {(registerError || loginError) && (
        <p>Error: {registerError?.message || loginError?.message}</p>
      )}
    </>
  );
};

export default AuthPage;
