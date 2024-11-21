import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import CreateWalletPage from "./Pages/CreateWallet";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/create-wallet",
      element: <CreateWalletPage />,
    },
  ]);

  return (
    <div className="  bg-background text-foreground h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
