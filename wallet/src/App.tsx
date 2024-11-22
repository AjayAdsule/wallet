import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateWalletPage from "./Pages/CreateWallet";
import WelcomePage from "./Pages/welcome";
import HomePage from "./Pages/HomePage";

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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
