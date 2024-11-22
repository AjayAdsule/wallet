import { SecureStorage } from "@/utils/secureStorage ";
import React from "react";

const Accounts: React.FC = () => {
  const storageAddress = localStorage.getItem("vault_address");
  const address = SecureStorage.decrypt(JSON.parse(storageAddress as string));

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  };
  const firstAddress = formatAddress(JSON.parse(address)[0]);
  return (
    <div className=" flex flex-col  items-center justify-center gap-y-1">
      <div>Account 1</div>
      <div className="text-sm">{firstAddress}</div>
    </div>
  );
};

export default Accounts;
