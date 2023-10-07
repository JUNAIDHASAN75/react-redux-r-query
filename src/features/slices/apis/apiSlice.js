








import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath:'apiSlice',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    endpoints: (builder)=>({
        getApi: builder.query({
            query:()=>'/coffees'
        })
    })
})
export const { useGetApiQuery } =apiSlice