import React, { useState } from "react";
import { Box, Button, Typography, Modal, Link } from "@mui/material";
import Upload from "./form-elements/upload";
import { useTheme } from "next-themes";

type AirdropModalProps = {
  open: boolean;
  onClose: () => void;
};

const AirdropModal = ({ open, onClose }: AirdropModalProps) => {
  const { theme } = useTheme();

  return (
    <Modal
      open={open}
      onClose={onClose}
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
          bgcolor: theme === "light" ? "background.paper" : "#110a24",
          border: theme === "light" ? "2px solid #000" : "2px solid #69579e",
          borderRadius: "15px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h5" component="h2">
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
            accept="application/JSON"
            onChange={(e: any) => {
              const file = e.target.files[0];
              console.log(file);
              const reader = new FileReader();
              reader.onload = (e: any) => {
                console.log("Inside");
                const addressList = e.target.result;
                console.log("List", addressList);
                console.log("List", JSON.parse(addressList as string));
              };
            }}
          />
          <Button className="text-white rounded-lg bg-gradient-to-r from-[#f9b92a] to-[#dc9519]">
            Send
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AirdropModal;
