import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateMnemonic } from "bip39";
import { useState } from "react";

/**
 * Generates a BIP39 mnemonic seed phrase and displays it in a grid.
 * When the phrase is generated, a "Next" button is displayed.
 * The phrase is not displayed until the button is clicked.
 * @returns A JSX.Element
 */
const Seed = () => {
  const [mnemonic, setMnemonic] = useState("");

  /**
   * Generates a BIP39 mnemonic seed phrase
   */
  async function generateMnemonicPhrase() {
    const mn = await generateMnemonic();
    setMnemonic(mn);
  }

  /**
   * Whether the mnemonic phrase has been generated
   */
  const isMnemonicGenerated = mnemonic.length > 0;

  return (
    <div>
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
        <Button className="" onClick={generateMnemonicPhrase}>
          {isMnemonicGenerated ? "Next" : " Reveal Secret Recovery Phrase"}
        </Button>
      </div>
    </div>
  );
};

export default Seed;
