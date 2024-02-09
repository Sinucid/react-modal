import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Content } from '../../models'

export const contentApi = createApi({
  reducerPath: 'contentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getContent: builder.query<Content, string>({
      query: () => `content`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContentQuery } = contentApi