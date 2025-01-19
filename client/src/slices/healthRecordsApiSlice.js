import { HEALTHINFOS_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const healthRecordsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllHealthInfos: builder.query({
      query: () => ({
        url: HEALTHINFOS_URL,
      }),
    }),

    createHealthInfo: builder.mutation({
      query: (body) => ({
        url: HEALTHINFOS_URL,
        method: "POST",
        body,
      }),
    }),

    updateHealthInfo: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `${HEALTHINFOS_URL}/${id}`,
        method: "PUT",
        body,
      }),
    }),

    deleteHealthInfo: builder.mutation({
      query: (id) => ({
        url: `${HEALTHINFOS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllHealthInfosQuery,
  useCreateHealthInfoMutation,
  useUpdateHealthInfoMutation,
  useDeleteHealthInfoMutation,
} = healthRecordsApiSlice;
