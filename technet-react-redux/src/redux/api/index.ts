import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/api/v1/' }),
  endpoints: () => ({}),
});
