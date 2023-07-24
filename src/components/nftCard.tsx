import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Modal,
  Link,
} from "@mui/material";
import { BsArrowUpRight } from "react-icons/bs";
import Upload from "./form-elements/upload";
import { useTheme } from "next-themes";

type nftDataProps = {
  name: string;
  description: string;
  image: string;
  price: string;
};

export default function NFTDetails(nftData: nftDataProps) {
  const { name, description, image, price } = nftData;
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          my: 3,
          mx: [0, 2],
          overflow: "hidden",
          bgcolor: theme === "light" ? "white" : "#110a24",
          borderRadius: "10px",
          border: "1px solid black",
          boxShadow:
            theme === "light" ? "6px 6px 0 black" : "6px 6px 0 #69579e",
          width: "350px",
          maxWidth: { sm: "300px", md: "300px", lg: "350px", xl: "400px" },
        }}
      >
        <CardMedia
          component="img"
          alt="NFT"
          height="200"
          image={image}
          title={name}
          sx={{
            borderBottom:
              theme === "light" ? "1px solid black" : "1px solid #937ade",
            maxHeight: "300px",
            objectFit: "fill",
          }}
        />
        <CardContent>
          <Box
            component="div"
            bgcolor={theme === "light" ? "#232324" : "#937ade"}
            display="inline-block"
            px={1.5}
            py={1}
            color="white"
            borderRadius={1}
            mb={2}
          >
            <Typography variant="caption" fontWeight="medium">
              {price} MATIC
            </Typography>
          </Box>
          <Typography
            variant="h5"
            component="h2"
            className="text-gray-800 dark:text-gray-100"
            noWrap
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className="text-gray-600 dark:text-[#a78bfc]"
            noWrap
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions className="border-t dark:border-[#937ade]">
          <Button
            size="small"
            color="primary"
            endIcon={<BsArrowUpRight />}
            className="w-full text-gray-700 dark:text-[#bea8ff]"
            onClick={handleOpen}
          >
            Airdrop
          </Button>
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
                bgcolor: theme === "light" ? "background.paper" : "#110a24",
                border:
                  theme === "light" ? "2px solid #000" : "2px solid #69579e",
                borderRadius: "15px",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="modal-modal-title" variant="h4" component="h2">
                Airdrop 🚀
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
        </CardActions>
      </Card>
    </Box>
  );
}
