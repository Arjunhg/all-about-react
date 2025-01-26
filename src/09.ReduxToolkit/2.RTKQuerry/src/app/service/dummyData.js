import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({

    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) => ({
        getAllProduct: builder.query({ //get date .query() , post data .mutation()
            query: () => '/products',
        }),

        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),

        addNewProduct: builder.mutation({
            query: ({id, updatedProduct}) => ({
                url: `/products/${id}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: updatedProduct
            })
        }),

        updateProduct: builder.mutation({
            query: ({ id, updatedProduct }) => ({
              url: `/products/${id}`,
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: updatedProduct,
            }),
        }),

        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const {
    useGetAllProductQuery,
    useGetProductByIdQuery,
    useAddNewProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productApi;

// `use${GetAllProduct}Query`
// `use${GetAllProduct}Mutation`
