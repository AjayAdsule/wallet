import { useWeb3Context } from "@/context/WebContext";
import AccountActions from "./AccountActions";

const AccountBalance = () => {
  const { web3State } = useWeb3Context();
  console.log(web3State);
  return (
    <div className=" mt-2 flex justify-center items-center ">
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold">{web3State.balance} ETH</p>
        <AccountActions />
      </div>
    </div>
  );
};

export default AccountBalance;
