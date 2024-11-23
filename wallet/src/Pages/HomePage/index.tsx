import PageWrapper from "@/PageWrapper";
import AccountUpper from "./component/AccountUpper";
import AccountBalance from "./component/AccountBalance";

const HomePage = () => {
  return (
    <PageWrapper>
      <div className=" h-screen flex justify-center items-center bg-background">
        <div className="border w-[600px] bg-muted  h-[200px] ">
          <AccountUpper />
          <AccountBalance />
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
