import { configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { polygonMumbai } from "wagmi/chains";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'

const { publicClient } = configureChains(
    [polygonMumbai],
    [w3mProvider({ projectId: "33e28c5d43009b3668cccf62984e6dbe" })],
);

export const config = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId: "33e28c5d43009b3668cccf62984e6dbe", chains: [polygonMumbai]}),
    publicClient, 
});

export const ethereumClient = new EthereumClient(config, [polygonMumbai])