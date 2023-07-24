import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { BsArrowUpRight } from "react-icons/bs";
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
            px={2}
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
            //   onClick={handleViewMore}
          >
            View more
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
