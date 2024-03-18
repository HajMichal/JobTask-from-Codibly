import { useState } from "react";
import { ProductsType } from "../store/useStore";
import { Box, Modal } from "@mui/joy";

export const TableRow = (props: { product: ProductsType }) => {
  const [open, setOpen] = useState(false);
  const { id, color, name, year, pantone_value } = props.product;

  return (
    <>
      <tr
        key={id}
        style={{ backgroundColor: color }}
        className="hover:opacity-80"
        // this !open state is fast bug fix because without it the modal is uncloseable
        onClick={() => !open && setOpen(true)}
      >
        <td>{id}</td>
        <td className="font-semibold">{name}</td>
        <td>{year}</td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-[95%] border-2 border-black shadow-2xl p-2">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold tracking-wide">
                {id}. {name}
              </p>
              <p style={{ backgroundColor: color }} className="p-1 rounded-md">
                ({color})
              </p>
            </div>
            <p className="mt-4">ID: {id}</p>
            <p>Year: {year}</p>
            <p>Pantone Value: {pantone_value}</p>
          </Box>
        </Modal>
      </tr>
    </>
  );
};
