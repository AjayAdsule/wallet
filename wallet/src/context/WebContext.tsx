import React, { createContext, useContext, useState } from "react";

interface Web3State {
  account: string | null;
  chainId: number | null;
  isConnected: boolean;
}

const initialState: Web3State = {
  account: null,
  chainId: null,
  isConnected: false,
};

const Web3Context = createContext<
  | {
      web3State: Web3State;
      setWeb3State: React.Dispatch<React.SetStateAction<Web3State>>;
    }
  | undefined
>(undefined);

// Provider component that wraps the children with the Web3Context Provider
/**
 * @property {Web3State} web3State - The current state of the Web3 connection
 * @property {(state: Web3State) => void} setWeb3State - A function to update the web3State
 */

const Web3Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // State to store the Web3 connection state
  const [web3State, setWeb3State] = useState<Web3State>(initialState);

  // The value that is passed to the Web3Context Provider
  const value = {
    web3State,
    setWeb3State,
  };

  // Return the Web3Context Provider with the given value and children
  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};

// Custom hook for using the context
/**
 * A custom hook to access the Web3 context
 *
 * This hook must be used within the Web3Provider component
 *
 * @returns {Web3State & {setWeb3State: React.Dispatch<React.SetStateAction<Web3State>>}} The current state of the Web3 connection
 */
export const useWeb3Context = () => {
  const context = useContext(Web3Context);

  if (context === undefined) {
    throw new Error(
      "Make sure you have wrapped your app with the Web3Provider component."
    );
  }

  return context;
};

export default Web3Provider;
