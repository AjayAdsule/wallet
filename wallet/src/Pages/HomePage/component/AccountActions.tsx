import { Button } from "@/components/ui/button";
import { ArrowLeftRight, QrCode, Send, SquareActivity } from "lucide-react";

const AccountActions = () => {
  return (
    <div className="mt-2 flex gap-x-2">
      <div className="flex flex-col items-center">
        <Button className="rounded-full">
          <SquareActivity size={18} />
        </Button>
        <label htmlFor="Sell" className="text-xs mt-1">
          Buy & sell
        </label>
      </div>
      <div className="flex flex-col items-center">
        <Button className="rounded-full">
          <ArrowLeftRight />
        </Button>
        <label htmlFor="Swap" className="text-xs mt-1">
          Swap
        </label>
      </div>
      <div className="flex flex-col items-center">
        <Button className="rounded-full">
          <Send />
        </Button>
        <label htmlFor="Send" className="text-xs mt-1">
          Send
        </label>
      </div>
      <div className="flex flex-col items-center">
        <Button className="rounded-full">
          <QrCode />
        </Button>
        <label htmlFor="Receive" className="text-xs mt-1">
          Receive
        </label>
      </div>
    </div>
  );
};

export default AccountActions;
