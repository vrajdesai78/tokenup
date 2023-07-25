import React, { useState } from "react";
import { Box, Button, Typography, Modal, Link } from "@mui/material";
import { FiCopy } from "react-icons/fi";
import Upload from "./form-elements/upload";
import { useTheme } from "next-themes";
import AirdropModal from "./AirdropModal";

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
                  <AirdropModal open={open} onClose={handleClose} />
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
