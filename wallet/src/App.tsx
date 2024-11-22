import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateWalletPage from "./Pages/CreateWallet";
import WelcomePage from "./Pages/welcome";
import HomePage from "./Pages/HomePage";
import Web3Provider from "./context/WebContext";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <WelcomePage /> },
    {
      path: "/create-wallet",
      element: <CreateWalletPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);

  return (
    <div className="  bg-background text-foreground h-screen">
      <Web3Provider>
        <RouterProvider router={router} />
      </Web3Provider>
    </div>
  );
}

export default App;
