"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import type { ReactNode } from "react";

const walletConnectProjectId = "";

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet, optimism, arbitrum, base, polygon, sepolia],
    transports: {
      [mainnet.id]: http(process.env.NEXT_PUBLIC_MAINNET_RPC_URL ?? ""),
      [optimism.id]: http(process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL ?? ""),
      [arbitrum.id]: http(process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL ?? ""),
      [base.id]: http(process.env.NEXT_PUBLIC_BASE_RPC_URL ?? ""),
      [polygon.id]: http(process.env.NEXT_PUBLIC_POLYGON_RPC_URL ?? ""),
      [sepolia.id]: http(process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL ?? ""),
    },

    // Required API Keys
    walletConnectProjectId,

    // Required App Info
    appName: "Next Bleu Starter",
    // Optional App Info
    appDescription: "Template for web3 next projects",
    appUrl: "http://localhost:3000",
    appIcon: "https://cdn-icons-png.flaticon.com/128/4064/4064205.png",
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
