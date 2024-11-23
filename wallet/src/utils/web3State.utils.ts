import { ethers } from "ethers";
import { SecureStorage } from "./secureStorage ";

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",
];

/**
 * Retrieves the Web3 state from local storage and the Ethereum blockchain.
 *
 * @returns {Promise<Web3State>}
 * @throws {Error}
 */
export default async function getWeb3State() {
  try {
    const address = localStorage.getItem("vault_address");
    const walletAddress = JSON.parse(
      SecureStorage.decrypt(JSON.parse(address as string))
    );
    const privateKey = localStorage.getItem("vault_privateKey");
    const key = SecureStorage.decrypt(JSON.parse(privateKey as string));
    const provider = new ethers.JsonRpcProvider(import.meta.env.VITE_RPC_URL);
    const balance = await provider.getBalance(walletAddress[0]);
    const signer = new ethers.Wallet(key, provider);

    return {
      balance: ethers.formatEther(balance),
      walletAddress,
      signer,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(errorMessage);
  }
}
