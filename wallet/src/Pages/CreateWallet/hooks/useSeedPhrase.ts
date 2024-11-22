import { SecureStorage } from "@/utils/secureStorage ";
import { generateMnemonic, mnemonicToSeed } from "bip39";
import { Wallet } from "ethers";
import { HDNodeWallet } from "ethers";
import { useState } from "react";
import { NavigateFunction } from "react-router-dom";
export default function useSeedPhrase() {
  const [mnemonic, setMnemonic] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [addresses, setAddresses] = useState<string[]>([]);

  /**
   * Generates a BIP39 mnemonic seed phrase using the `bip39` library
   * @returns A promise that resolves with the generated mnemonic
   */
  async function generateMnemonicPhrase(): Promise<void> {
    const mn = await generateMnemonic();
    setMnemonic(mn);
  }

  /**
   * Encrypts the mnemonic phrase using the `SecureStorage` class and saves it
   * to local storage under the key "vault"
   */
  async function saveMnemonic(next: NavigateFunction) {
    console.log(mnemonic);
    const encryptedMnemonic = SecureStorage.encrypt(mnemonic);
    localStorage.setItem("vault", JSON.stringify(encryptedMnemonic));
    await generateAddress();
    next("/home");
  }

  /**
   * Generates a new Ethereum address using the current mnemonic seed phrase
   * and derivation path. Increments the index for the next address generation.
   * Updates the addresses state with the newly generated address.
   */
  async function generateAddress() {
    const seed = await mnemonicToSeed(mnemonic);
    const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    const privateKey = child.privateKey;
    const wallet = new Wallet(privateKey);
    setCurrentIndex(currentIndex + 1);
    const encryptedAddress = SecureStorage.encrypt(
      JSON.stringify([...addresses, wallet.address])
    );

    localStorage.setItem("vault_address", JSON.stringify(encryptedAddress));
    setAddresses([...addresses, wallet.address]);
  }
  /**
   * Whether the mnemonic phrase has been generated
   */
  const isMnemonicGenerated = mnemonic.length > 0;

  return {
    isMnemonicGenerated,
    generateMnemonicPhrase,
    saveMnemonic,
    addresses,
    mnemonic,
  };
}
