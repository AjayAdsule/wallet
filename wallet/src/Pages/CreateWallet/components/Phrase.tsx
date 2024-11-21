import SeedPhraseGenerator from "./Seed";

const Phrase = () => {
  return (
    <div className="border p-2 w-[600px]  flex flex-col items-center">
      <div className="text-center flex justify-center w-[400px] p-2">
        <h4 className="text-2xl">Write down your Secret Recovery Phrase</h4>
      </div>
      <div className="mt-2 w-[500px] p-2">
        <p>
          Write down this 12-word Secret Recovery Phrase and save it in a place
          that you trust and only you can access.
        </p>
      </div>
      <div className="mt-2 w-[450px]">
        <p className="text-md font-semibold">Tips:</p>
        <ul className="list-none pl-0 mt-2">
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:font-bold">
            Write down and store in multiple secret places
          </li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:font-bold">
            Store in a safe deposit box
          </li>
        </ul>
      </div>
      <SeedPhraseGenerator />
    </div>
  );
};

export default Phrase;
