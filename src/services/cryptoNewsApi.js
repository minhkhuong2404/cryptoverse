import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewHeaders = {
    "x-bingapis-sdk": "true",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": "a4216d02a0mshefd15c8a1cd69e5p1fba5cjsnb983cdfa43c5",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) =>
                createRequest(
                    `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
                ),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
