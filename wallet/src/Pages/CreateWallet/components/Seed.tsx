import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateMnemonic } from "bip39";
import { useState } from "react";

const Seed = () => {
  const [mnemonic, setMnemonic] = useState("");

  async function generateMnemonicPhrase() {
    const mn = await generateMnemonic();
    setMnemonic(mn);
  }
  console.log(mnemonic.split(" ").length);
  return (
    <div>
      <div
        className={`border h-[200px] w-[450px] p-2 mt-6  flex justify-center  items-center ${
          mnemonic.length > 0 ? "" : "bg-foreground"
        }`}
      >
        {mnemonic.length > 0 ? (
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
          {mnemonic.length > 0 ? "Next" : " Reveal Secret Recovery Phrase"}
        </Button>
      </div>
    </div>
  );
};

export default Seed;
