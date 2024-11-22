import { EllipsisVertical } from "lucide-react";
import { AccountNetwork } from "./AccountNetwork";
import Accounts from "./Accounts";
import { useWeb3Context } from "@/context/WebContext";

const AccountUpper = () => {
  const { web3State } = useWeb3Context();
  console.log(web3State);
  return (
    <div className="h-[60px] border flex justify-between items-center">
      <div className="flex-1 flex justify-start">
        <AccountNetwork />
      </div>
      <div className="flex-1 flex justify-center">
        <Accounts />
      </div>
      <div className="flex-1 flex justify-end">
        <EllipsisVertical size={18} />
      </div>
    </div>
  );
};

export default AccountUpper;
