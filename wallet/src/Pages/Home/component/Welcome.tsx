import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className=" border h-screen flex justify-center items-center">
      <div className="border w-[500px] h-[300px] flex flex-col justify-center items-center">
        <div className="text-3xl">Welcome to Wallet</div>
        <div className="flex gap-x-4 mt-4">
          <Button variant={"secondary"}>Login</Button>
          <Button onClick={() => navigate("/create-wallet")}>
            Create wallet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
