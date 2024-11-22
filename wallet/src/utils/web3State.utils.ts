import { ethers } from "ethers";
import { SecureStorage } from "./secureStorage ";

export default async function getWeb3State() {
  try {
    const address = localStorage.getItem("vault_address");
    const walletAddress = JSON.parse(
      SecureStorage.decrypt(JSON.parse(address as string))
    );
    const provider = new ethers.JsonRpcProvider(import.meta.env.VITE_RPC_URL);
    const balance = await provider.getBalance(walletAddress[0]);

    return {
      balance: ethers.formatEther(balance),
      walletAddress,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(errorMessage);
  }
}
