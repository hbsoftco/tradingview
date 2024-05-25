import { RouterProvider } from "react-router-dom";
import router from "./pages/Routes";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
