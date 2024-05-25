import { createBrowserRouter } from "react-router-dom";
import TradingViewGlobal from "./TradingView";
import TradingViewToman from "./TradingViewToman";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TradingViewGlobal />,
  },
  {
    path: "/tradingview-toman",
    element: <TradingViewToman />,
  },
]);

export default router;
