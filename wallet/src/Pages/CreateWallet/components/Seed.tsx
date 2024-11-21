import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SecureStorage } from "@/utils/secureStorage ";
import { generateMnemonic } from "bip39";
import { useState } from "react";

/**
 * Generates a BIP39 mnemonic seed phrase and displays it in a grid.
 * When the phrase is generated, a "Next" button is displayed.
 * The phrase is not displayed until the button is clicked.
 * @returns A JSX.Element
 */
const SeedPhraseGenerator: React.FC = () => {
  const [mnemonic, setMnemonic] = useState<string>("");

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
  function saveMnemonic() {
    const encryptedMnemonic = SecureStorage.encrypt(mnemonic);
    localStorage.setItem("vault", encryptedMnemonic);
  }

  /**
   * Whether the mnemonic phrase has been generated
   */
  const isMnemonicGenerated = mnemonic.length > 0;

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={`border h-[200px] w-[450px] p-2 mt-6  flex justify-center  items-center ${
          isMnemonicGenerated ? "" : "bg-foreground"
        }`}
      >
        {isMnemonicGenerated ? (
          <div className="grid grid-cols-4 gap-2">
            {mnemonic.split(" ")?.map((item, index) => (
              <Input value={item} key={index} readOnly />
            ))}
          </div>
        ) : (
          <div>
            <p className="text-background">Make Sure nobody is looking</p>
          </div>
        )}
      </div>
      <div className="flex mt-4  justify-center">
        <Button
          className=""
          onClick={isMnemonicGenerated ? saveMnemonic : generateMnemonicPhrase}
        >
          {isMnemonicGenerated ? "Next" : " Reveal Secret Recovery Phrase"}
        </Button>
      </div>
    </div>
  );
};

export default SeedPhraseGenerator;
