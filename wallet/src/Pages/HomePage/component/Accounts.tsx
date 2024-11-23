import { useWeb3Context } from "@/context/WebContext";
import React from "react";

const Accounts: React.FC = () => {
  const { web3State } = useWeb3Context();

  const formatAddress = (address: string | null) => {
    return `${address?.slice(0, 6)}...${address?.slice(-6)}`;
  };

  return (
    <div className=" flex flex-col  items-center justify-center gap-y-1">
      <div>Account 1</div>
      <div className="text-sm">{formatAddress(web3State.account) ?? 0}</div>
    </div>
  );
};

export default Accounts;
