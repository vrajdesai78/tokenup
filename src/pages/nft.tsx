import React, { HtmlHTMLAttributes, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Layout from "@/components/layout";
import Input from "@/components/form-elements/input";
import Upload from "@/components/form-elements/upload";
import MCheckbox from "@/components/form-elements/checkbox";
import { NFTContractFactoryAddress } from "@/utils/constants";
import NFTContractFactory from "@/utils/ABI/NFTContractFactory.json";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
// @ts-ignore
import { Web3Storage } from "web3.storage";

const NFTMembership = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSupply, setIsSupply] = useState(false);
  const [supply, setSupply] = useState("0");
  const [price, setPrice] = useState("");

  const { address } = useAccount();

  const callContract = async (metaDataUrl: string) => {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      NFTContractFactoryAddress,
      NFTContractFactory,
      signer
    );
    contract
      .createNFT(metaDataUrl, supply, isSupply, price, address)
      .then(async (tx: string) => {
        {
          if(tx) {
            console.log("Completed");
          }
        }
      });
  };

  const uploadMetadata = async () => {
    var metadata = {
      name: name,
      description: description,
      image: imageUrl,
    };
    console.log(metadata);
    const client = new Web3Storage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkxZTRjOEMwNTJiMzkzNEQ3Nzc5NWM3QWQ3MkQ0MTFhMGQyMWUxODIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzE2ODYwNTU1NjIsIm5hbWUiOiJNYXRpYy1Qcm9maWxlIn0.zDWjIoqZUCnPXtvWXjm_ZbvPN2ZZHTfcK7JHdM2S7hk",
    });
    client
      .put([new File([JSON.stringify(metadata)], "metadata.json")])
      .then(async (cid: string) => {
        console.log(cid);
        await callContract(`https://${cid}.ipfs.w3s.link/metadata.json`);
      });
  };

  return (
    <Layout>
      <Head>
        <title>Create NFT</title>
        <meta name="description" content="tokenup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col space-y-8 justify-center items-center max-w-[800px] mx-auto pb-32 pl-[60px] lg:pl-0">
        <div className="flex items-center w-[90%] md:w-full bg-gradient-to-r from-[#c45cfc] to-[#7b4fc9] rounded-[30px] overflow-hidden shadow-lg">
          <div className="hidden md:flex mx-auto justify-center ml-5">
            <Image src="/nft.png" width="150" height="150" alt="Icon" />
          </div>
          <div className="px-10 py-8 text-white text-right">
            <div className="font-bold text-xl mb-2">NFT Memberships</div>
            <div className="font-bold text-md mb-2">
              Monetize your community memberships to grant access and benefits.
              Specially designed for DAOs and guilds.
            </div>
          </div>
        </div>
        <form className="flex flex-col space-y-3 w-[90%] md:max-w-[600px] mx-auto">
          <Image
            className="mx-auto rounded-xl"
            src={image !== "" ? image : "/preview.png"}
            alt="preview"
            width={200}
            height={200}
          />
          <div className="mx-auto w-[40%]">
            <Upload
              id="image"
              name="image"
              type="file"
              onChange={(e: any) => {
                const image = URL.createObjectURL(e.target.files[0]);
                setImage(image);
                const files = e.target.files;
                const client = new Web3Storage({
                  token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkxZTRjOEMwNTJiMzkzNEQ3Nzc5NWM3QWQ3MkQ0MTFhMGQyMWUxODIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzE2ODYwNTU1NjIsIm5hbWUiOiJNYXRpYy1Qcm9maWxlIn0.zDWjIoqZUCnPXtvWXjm_ZbvPN2ZZHTfcK7JHdM2S7hk",
                });
                client.put(files).then((cid: any) => {
                  console.log(cid);
                  setImageUrl(`https://${cid}.ipfs.w3s.link/${files[0].name}`);
                });
              }}
            />
          </div>

          <Input
            id="name"
            name="name"
            label="Name"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            value={name}
            helper="This Can Be Your DAO Name or Special Access Collection"
          />
          <Input
            id="description"
            name="description"
            label="Description"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
            value={description}
            helper="Write Something About This NFT or Features"
          />
          <MCheckbox
            name="supply"
            label="Set Max Supply"
            checked={isSupply}
            onChange={() => {
              setIsSupply(!isSupply);
            }}
          />
          {isSupply && (
            <Input
              id="supply"
              name="supply"
              label="Max Supply"
              type="number"
              value={supply}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSupply(e.target.value)
              }
              helper="Recommended Max Supply - 10 Million Tokens."
            />
          )}
          <Input
            id="price"
            name="price"
            label="Price"
            type="number"
            value={price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(e.target.value)
            }
            helper="Recommend initial NFT Price - 2 BIT, No 'ETH' Symbol Required."
          />
          <button
            onClick={async (e) => {
              e.preventDefault();
              await uploadMetadata();
            }}
            className="w-[100px] mx-auto text-[#ffffff] items-center justify-center bg-violet-500 hover:bg-violet-600 focus:ring-1 focus:outline-none focus:ring-[#cfcfcf] font-medium rounded-xl text-sm px-5 py-2.5 text-center shadow-none dark:bg-violet-500 dark:hover:bg-violet-600 dark:text-gray-100"
          >
            Create
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default NFTMembership;
