import { IMeta, IRoom } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tagTypes";

const ROOM_URL = "/rooms";

export const roomApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    rooms: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ROOM_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IRoom[], meta: IMeta) => {
        return {
          rooms: response,
          meta,
        };
      },
      providesTags: [tagTypes.room],
    }),
    room: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ROOM_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.room],
    }),
    addRoom: build.mutation({
      query: (data) => ({
        url: ROOM_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.room],
    }),
    updateRoom: build.mutation({
      query: (data) => ({
        url: `${ROOM_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.room],
    }),
    deleteRoom: build.mutation({
      query: (id) => ({
        url: `${ROOM_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.room],
    }),
  }),
});

export const {
  useAddRoomMutation,
  useRoomsQuery,
  useRoomQuery,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
} = roomApi;