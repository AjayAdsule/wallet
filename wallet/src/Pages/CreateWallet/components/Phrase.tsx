const Phrase = () => {
  return (
    <div className="border p-2 w-[600px] h-[400px] flex flex-col items-center">
      <div className="text-center flex justify-center w-[400px] p-2">
        <h4 className="text-2xl">Write down your Secret Recovery Phrase</h4>
      </div>
      <div className="mt-2 w-[500px] p-2">
        <p>
          Write down this 12-word Secret Recovery Phrase and save it in a place
          that you trust and only you can access.
        </p>
      </div>
    </div>
  );
};

export default Phrase;
