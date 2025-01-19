import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/constants";
import { logout } from "./authSlice";
import { toast } from "react-hot-toast";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.userInfo?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const userInfo = api.getState().auth?.userInfo;
  if (result.error && result.error.status === 401) {
    if (userInfo && userInfo.token) {
      toast.error("Session expired. Please login again.");
      api.dispatch(logout());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "ChatLog", "HealthInfo"],
  endpoints: (builder) => ({}),
  keepUnusedDataFor: 5,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
});
