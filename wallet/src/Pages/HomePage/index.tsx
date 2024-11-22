import PageWrapper from "@/PageWrapper";
import { SecureStorage } from "@/utils/secureStorage ";
import AccountUpper from "./component/AccountUpper";

const HomePage = () => {
  const address = localStorage.getItem("vault_address");
  console.log(SecureStorage.decrypt(JSON.parse(address as string)));

  return (
    <PageWrapper>
      <div className=" h-screen flex justify-center items-center bg-background">
        <div className="border w-[600px] bg-white h-[200px]">
          <AccountUpper />
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
