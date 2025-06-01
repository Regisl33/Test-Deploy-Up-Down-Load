import api from "../../app/api/api";
import FileType from "../../../../types/FileType";

const filesSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllFiles: builder.query({
      query: () => "/allFiles",
      transformResponse: (res: FileType[]) => {
        let allFiles = res;
        return allFiles;
      },
    }),
    getFilesById: builder.query({
      query: (id) => `/download/:${id}`,
      transformResponse: (res: FileType) => {
        let file = res;
        return file;
      },
    }),
    postNewFile: builder.mutation({
      query: (file: FileType) => ({
        url: "/upload",
        method: "PATCH",
        body: file,
      }),
    }),
  }),
});

export const {
  useGetAllFilesQuery,
  useGetFilesByIdQuery,
  usePostNewFileMutation,
} = filesSlice;
