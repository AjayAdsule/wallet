import { EllipsisVertical } from "lucide-react";
import { AccountNetwork } from "./AccountNetwork";
import Accounts from "./Accounts";

/**
 * A component that displays the account information at the top of the page.
 * It has a network indicator on the left, a list of accounts in the middle,
 * and an ellipsis on the right for future expansion.
 */
const AccountUpper = () => {
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
