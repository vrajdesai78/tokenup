import Head from "next/head";
import Grid from "@mui/material/Grid";
import NFT from "@/components/nftCard";
import Layout from "@/components/layout";

const productData = [
  {
    index: 1,
    name: "NFT Membership",
    description:
      "Monetize your community memberships to grant access and benefits. Specially designed for DAOs and guilds.",
    image: "/tokenup.png",
    price: "0.1",
  },
  {
    index: 1,
    name: "NFT Membership",
    description:
      "Monetize your community memberships to grant access and benefits. Specially designed for DAOs and guilds.",
    image: "/nft.png",
    price: "0.1",
  },
  {
    index: 1,
    name: "NFT Membership",
    description:
      "Monetize your community memberships to grant access and benefits. Specially designed for DAOs and guilds.",
    image: "/tokenup.png",
    price: "0.1",
  },
  {
    index: 1,
    name: "NFT Membership",
    description:
      "Monetize your community memberships to grant access and benefits. Specially designed for DAOs and guilds.",
    image: "/nft.png",
    price: "0.1",
  },
];

export default function Products() {
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
        {productData.map((products, index) => (
          <NFT {...products} key={index} />
        ))}
      </Grid>
    </Layout>
  );
}
