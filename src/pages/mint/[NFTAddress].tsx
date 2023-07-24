import Layout from "@/components/layout";
import Image from "next/image";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContractRead } from "wagmi";
import { NFTContractFactoryAddress } from "@/utils/constants";
import NFTContract from "@/utils/ABI/NFTContract.json"

const MintNFT = () => {
  const { theme, setTheme } = useTheme();

  const { query } = useRouter();

  useEffect(() => {
    console.log(query.NFTAddress);
  }, [query]);

  return (
    <Layout>
      <div className="flex mx-auto mt-14 ml-10 justify-center items-center z-0">
        <Box
          sx={{
            role: "group",
            p: 4,
            maxWidth: "400px",
            width: "100%",
            bgcolor: theme === "light" ? "white" : "#110a24",
            boxShadow: 2,
            borderRadius: "xl",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            borderRadius={"lg"}
            mt={-12}
            position={"relative"}
            height={"300px"}
            overflow="hidden"
          >
            <Image
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              src="/preview.png"
              alt="#"
            />
            <Box
              height="100%"
              width="100%"
              position="absolute"
              top={0}
              left={0}
              className="backdrop-blur-lg"
              zIndex={-1}
            />
          </Box>
          <Stack pt={2} alignItems={"center"}>
            <Typography
              className="text-xl"
              fontWeight={700}
              textTransform={"uppercase"}
            >
              Brand
            </Typography>
            <Typography className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              culpa id exercitationem
            </Typography>
            <Stack direction={"row"} alignItems={"center"}>
              <Button className="px-5 py-2 bg-[#c3a6ff90] hover:bg-[#b691ff90] mt-3 text-gray-700 rounded-3xl drop-shadow-md dark:bg-[#d1baff] dark:hover:bg-[#cab0ff]">
                Mint
              </Button>
            </Stack>
          </Stack>
        </Box>
      </div>
    </Layout>
  );
};

export default MintNFT;
