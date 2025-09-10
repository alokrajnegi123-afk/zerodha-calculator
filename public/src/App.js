import React, { useState } from "react";

function App() {
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const qty = parseInt(quantity);

    if (isNaN(buy) || isNaN(sell) || isNaN(qty)) {
      alert("Please enter valid numbers");
      return;
    }

    const turnover = (buy + sell) * qty;
    const brokerage = Math.min(20, 0.03 / 100 * turnover);
    const stt = (sell * qty) * 0.025 / 100;
    const exchangeTx = turnover * 0.00345 / 100;
    const gst = (brokerage + exchangeTx) * 18 / 100;
    const sebi = turnover * 0.0001 / 100;
    const stampDuty = (buy * qty) * 0.003 / 100;

    const totalCharges = brokerage + stt + exchangeTx + gst + sebi + stampDuty;
    const profit = (sell - buy) * qty - totalCharges;

    setResult({
      turnover: turnover.toFixed(2),
      charges: totalCharges.toFixed(2),
      profit: profit.toFixed(2),
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Zerodha Intraday Calculator</h2>
      <input
        type="number"
        placeholder="Buy Price"
        value={buyPrice}
        onChange={(e) => setBuyPrice(e.target.value)}
      />
      <br /><br />
      <input
        type="number"
        placeholder="Sell Price"
        value={sellPrice}
        onChange={(e) => setSellPrice(e.target.value)}
      />
      <br /><br />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <br /><br />
      <button onClick={calculate}>Calculate</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <p><b>Turnover:</b> ₹{result.turnover}</p>
          <p><b>Total Charges:</b> ₹{result.charges}</p>
          <p><b>Net P&L:</b> ₹{result.profit}</p>
        </div>
      )}
    </div>
  );
}

export default App;
