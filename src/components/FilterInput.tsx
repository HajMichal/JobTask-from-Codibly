import { Input } from "@mui/joy";
import { useStore } from "../store/useStore";

export const FilterInput = () => {
  const { setProductId, productId } = useStore();

  return (
    <Input
      type="number"
      variant="outlined"
      placeholder="Type number..."
      className="mt-5 mb-10 w-[90%]"
      onChange={(e) => setProductId(e.target.valueAsNumber)}
      defaultValue={productId ? productId.toString() : ""}
    />
  );
};
