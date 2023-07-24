import React, { useState } from "react";
import { Box, Button, Typography, Modal, Link } from "@mui/material";
import { FiCopy } from "react-icons/fi";
import Upload from "./form-elements/upload";
import { useTheme } from "next-themes";

type tableProps = {
  headers: string[];
  data: any[];
};

const Table = ({ headers, data }: tableProps) => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <table className="min-w-full divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          {headers.map((header) => {
            return (
              <>
                <th
                  scope="col"
                  className="capitalize px-4 py-3.5 text-md font-medium text-left rtl:text-right text-gray-600 dark:text-gray-300"
                >
                  {header}
                </th>
              </>
            );
          })}
        </tr>
      </thead>
      <tbody className="capitalize divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        {data.map((i) => {
          return (
            <>
              <tr>
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                  <div className="font-medium text-gray-600 dark:text-white ">
                    {i.name}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-left">
                  <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                    {i.totalSupply}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <div className="text-gray-700 dark:text-gray-200">
                    {i.totalMinted}
                  </div>
                </td>
                <td className="px-1 py-4 text-sm whitespace-nowrap flex flex-row items-center space-x-3">
                  <button
                    className="bg-gradient-to-r from-[#f9b92a] to-[#dc9519] text-gray-600 dark:text-gray-700 font-medium py-2 px-4 rounded-full inline-flex items-center"
                    onClick={handleOpen}
                  >
                    Airdrop
                  </button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute" as "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor:
                          theme === "light" ? "background.paper" : "#110a24",
                        border:
                          theme === "light"
                            ? "2px solid #000"
                            : "2px solid #69579e",
                        borderRadius: "15px",
                        boxShadow: 24,
                        p: 4,
                      }}
                    >
                      <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                      >
                        AIRDROP 🚀
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                        className="text-gray-600 dark:text-gray-200"
                      >
                        Please upload the recipient list in this{" "}
                        <Link
                          underline="none"
                          href=""
                          className="text-[#a13bf7] dark:text-[#f8c851]"
                        >
                          format
                        </Link>
                      </Typography>
                      <div className="flex flex-row space-x-3 items-center justify-center mt-2 mx-auto">
                        <Upload
                          id="image"
                          name="image"
                          type="file"
                          onChange={() => {}}
                        />
                        <Button className="text-white rounded-lg bg-gradient-to-r from-[#f9b92a] to-[#dc9519]">
                          Send
                        </Button>
                      </div>
                    </Box>
                  </Modal>
                  <FiCopy size={20} className="hover:text-[#937ade]" />
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
