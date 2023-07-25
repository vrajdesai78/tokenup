import Layout from "@/components/layout";
import Image from "next/image";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  useContractRead,
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { NFTContractFactoryAddress } from "@/utils/constants";
import NFTContract from "@/utils/ABI/NFTContract.json";
import NFTContractFactory from "@/utils/ABI/NFTContractFactory.json";
import { parseEther } from "viem";

interface Nftdetails {
  creator: string;
  launchPadNftAddress: string;
  nftAddress: string;
  nftPrice: string;
  supply: string;
  uri: string;
}

const MintNFT = () => {
  const { theme, setTheme } = useTheme();

  const { address } = useAccount();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");

  const { query } = useRouter();

  const { data, isError, isLoading } = useContractRead({
    address: NFTContractFactoryAddress,
    abi: NFTContractFactory,
    functionName: "getNFTsWithMetadataCreatedByCreator",
    args: [address],
    onSuccess: (data) => {
      console.log("Succes");
    },
    onError: (error) => {
      console.log("Error", error);
    },
  });

  const { config } = usePrepareContractWrite({
    address: query.NFTAddress as `0x${string}`,
    abi: NFTContract,
    functionName: "nftMint",
  });

  const { write } = useContractWrite(config);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const getNftdata = async () => {
    // get data of specific nft
    Object.values(data as Nftdetails)
      .filter(({ nftAddress }) => nftAddress === query.NFTAddress)
      .forEach(({ uri, price }) => {
        fetch(uri)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setImage(data.image);
            setName(data.name);
            setDescription(data.description);
            setPrice(price);
          });
      });
  };

  useEffect(() => {
    getNftdata();
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
              loader={() => image}
              src={image}
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
              {name}
            </Typography>
            <Typography className="text-lg">{description}</Typography>
            <Stack direction={"row"} alignItems={"center"}>
              <Button
                className="px-5 py-2 bg-[#c3a6ff90] hover:bg-[#b691ff90] mt-3 text-gray-700 rounded-3xl drop-shadow-md dark:bg-[#d1baff] dark:hover:bg-[#cab0ff]"
                onClick={() => {
                  write?.();
                }}
              >
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
