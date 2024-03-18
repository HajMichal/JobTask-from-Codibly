import axios from "axios";

interface GetProductsType {
  page: number;
  id?: number;
}

export const getProducts = async ({ page, id }: GetProductsType) => {
  const response = await axios.get(
    `https://reqres.in/api/products?page=${page}&id=${id ? id : ""}&per_page=5`
  );

  return Array.isArray(response?.data.data)
    ? response
    : { ...response, data: { data: [response?.data.data] } };
};
