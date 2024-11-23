import { useWeb3Context } from "@/context/WebContext";

const AccountBalance = () => {
  const { web3State } = useWeb3Context();
  console.log(web3State);
  return (
    <div className=" mt-2 flex justify-center">
      <div className="text-xl font-bold">{web3State.balance} ETH</div>
    </div>
  );
};

export default AccountBalance;
