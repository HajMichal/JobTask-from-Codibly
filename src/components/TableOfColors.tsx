import { Table } from "@mui/joy";
import { useEffect } from "react";
import { getProducts } from "../fetchData/getProducts";
import { useQuery } from "@tanstack/react-query";
import { LoadingButton } from "@mui/lab";
import toast, { Toaster } from "react-hot-toast";
import { ProductsType, useStore } from "../store/useStore";
import { TableRow } from "./TableRow";
import { useDebounce } from "../hooks/useDebounce";

export const TableOfColors = () => {
  const { setProducts, page, productId } = useStore();
  const {
    data: productsData,
    isError,
    error,
    isLoading,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts({ page: page, id: productId }),
  });

  const products: ProductsType[] = productsData?.data.data;
  const debouncedProdId = useDebounce(productId, 600);

  useEffect(() => {
    window.history.pushState(
      {},
      "",
      `?page=${page}&id=${debouncedProdId ? debouncedProdId : ""}`
    );
    refetch();
  }, [page, refetch, debouncedProdId]);

  useEffect(() => {
    if (isSuccess) {
      setProducts(products);
    }

    if (error) toast.error("Unexpected response: " + error.message);
  }, [isError, error, isSuccess, setProducts, products]);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center mb-2">
          <LoadingButton loading />
        </div>
      )}
      <Table>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>ID</th>
            <th style={{ width: "60%" }}>Name</th>
            <th style={{ width: "20%" }}>Year</th>
          </tr>
        </thead>
        <tbody className="cursor-pointer">
          {isSuccess &&
            products.map((product: ProductsType) => (
              <TableRow product={product} key={product.id} />
            ))}
        </tbody>
      </Table>
      <Toaster />
    </>
  );
};
