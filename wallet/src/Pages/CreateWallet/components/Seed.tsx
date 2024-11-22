import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSeedPhrase from "../hooks/useSeedPhrase";
import { useNavigate } from "react-router-dom";

/**
 * Generates a BIP39 mnemonic seed phrase and displays it in a grid.
 * When the phrase is generated, a "Next" button is displayed.
 * The phrase is not displayed until the button is clicked.
 * @returns A JSX.Element
 */
const SeedPhraseGenerator: React.FC = () => {
  const navigate = useNavigate();
  const {
    generateMnemonicPhrase,
    isMnemonicGenerated,
    saveMnemonic,
    mnemonic,
  } = useSeedPhrase();

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
          onClick={
            isMnemonicGenerated
              ? () => saveMnemonic(navigate)
              : generateMnemonicPhrase
          }
        >
          {isMnemonicGenerated ? "Next" : " Reveal Secret Recovery Phrase"}
        </Button>
      </div>
    </div>
  );
};

export default SeedPhraseGenerator;
