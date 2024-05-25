import { useState } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const TradingViewGlobal = () => {
  const [theme] = useState<"light" | "dark">("dark");
  const [hideToolbar] = useState(false);
  const market = "BTCUSD";

  return (
    <div className="h-screen">
      <AdvancedRealTimeChart
        autosize={true}
        theme={theme}
        symbol={`${market}`}
        // symbol={`GATEIO:${market}`}
        interval="60"
        timezone="Asia/Tehran"
        style="1"
        // locale="fa_IR"
        enable_publishing={false}
        withdateranges={true}
        hide_side_toolbar={hideToolbar}
        allow_symbol_change={false}
      />
    </div>
  );
};

export default TradingViewGlobal;
