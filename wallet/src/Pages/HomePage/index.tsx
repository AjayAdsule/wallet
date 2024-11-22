import PageWrapper from "@/PageWrapper";
import AccountUpper from "./component/AccountUpper";

const HomePage = () => {
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
