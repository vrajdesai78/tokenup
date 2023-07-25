import Head from "next/head";
import Grid from "@mui/material/Grid";
import NFT from "@/components/nftCard";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { NFTContractFactoryAddress } from "@/utils/constants";
import NFTContractFactory from "@/utils/ABI/NFTContractFactory.json";
import { useAccount, useContractRead } from "wagmi";
import NFTDetails from "@/components/nftCard";

export default function Products() {
  const [parsedData, setParsedData] = useState([]);

  const [productData, setProductData] = useState([{}]);
  const { address } = useAccount();

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

  const fetchData = async () => {
    let nfts = [];
    for (let nft of data as any) {
      const response = await fetch(nft.uri);
      const pd = await response.json();
      nfts.push({
        name: pd.name,
        description: pd.description,
        image: pd.image,
        price: parseFloat(nft.nftPrice),
        nftAddress: nft.nftAddress,
      });
    }
    setProductData(nfts);
    console.log(nfts);
  };

  useEffect(() => {
    if (data) {
      console.log("data", data)
      fetchData()
    }
  }, [data]);
  return (
    <Layout>
      <Head>
        <title>Explore</title>
        <meta name="description" content="Explore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        columns={{ base: 1, md: 3, xl: 3 }}
        columnSpacing={"2"}
        mx={"auto"}
        container
      >
        {/* {productData.map((products, index) => (
          <NFTDetails {...products} key={index} />
        ))} */}
         {productData.map((products, index) => (
          <NFTDetails name={""} description={""} image={""} price={""} address={""} {...products} key={index} />
        ))}
      </Grid>
    </Layout>
  );
}
