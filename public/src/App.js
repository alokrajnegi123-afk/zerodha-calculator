import React, { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(40);
  const [buyPrice, setBuyPrice] = useState(707.85);
  const [sellPrice, setSellPrice] = useState(710.15);

  const turnover = (buyPrice * quantity) + (sellPrice * quantity);
  const brokerage = Math.min(20, (0.03 / 100) * turnover);
  const stt = (sellPrice * quantity) * 0.025 / 100;
  const exchangeTx = turnover * 0.0000345;
  const gst = (brokerage + exchangeTx) * 0.18;
  const sebi = turnover * 0.000001;
  const stampDuty = (buyPrice * quantity) * 0.00015;
  const totalCharges = brokerage + stt + exchangeTx + gst + sebi + stampDuty;
  const profit = (sellPrice - buyPrice) * quantity - totalCharges;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Zerodha Intraday Calculator</h2>

      <label>Quantity: </label>
      <input type="number" value={quantity} onChange={e => setQuantity(+e.target.value)} /><br /><br />

      <label>Buy Price: </label>
      <input type="number" value={buyPrice} onChange={e => setBuyPrice(+e.target.value)} /><br /><br />

      <label>Sell Price: </label>
      <input type="number" value={sellPrice} onChange={e => setSellPrice(+e.target.value)} /><br /><br />

      <h3>Turnover: ₹{turnover.toFixed(2)}</h3>
      <h3>Brokerage: ₹{brokerage.toFixed(2)}</h3>
      <h3>STT: ₹{stt.toFixed(2)}</h3>
      <h3>Exchange Tx: ₹{exchangeTx.toFixed(2)}</h3>
      <h3>GST: ₹{gst.toFixed(2)}</h3>
      <h3>SEBI: ₹{sebi.toFixed(2)}</h3>
      <h3>Stamp Duty: ₹{stampDuty.toFixed(2)}</h3>
      <h2>Total Charges: ₹{totalCharges.toFixed(2)}</h2>
      <h2 style={{ color: profit >= 0 ? "green" : "red" }}>
        Net P&L: ₹{profit.toFixed(2)}
      </h2>
    </div>
  );
}

export default App;
