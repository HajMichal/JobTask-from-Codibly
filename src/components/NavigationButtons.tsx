import { Button } from "@mui/joy";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useStore } from "../store/useStore";

export const NavigationButtons = () => {
  const { products, setPage, page } = useStore();

  return (
    <div className="flex justify-center gap-14 pt-5">
      <Button
        variant="solid"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        <NavigateBefore />
      </Button>
      <Button
        variant="solid"
        onClick={() => setPage(page + 1)}
        disabled={products && products.length !== 5}
      >
        <NavigateNext />
      </Button>
    </div>
  );
};
