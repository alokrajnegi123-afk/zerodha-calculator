import React, { useState } from "react";

function ZerodhaCalculator() {
  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  const [qty, setQty] = useState("");
  const [result, setResult] = useState(null);

  function calculate() {
    const buyPrice = Number(buy);
    const sellPrice = Number(sell);
    const quantity = Number(qty);
    const turnover = (buyPrice + sellPrice) * quantity;
    const grossPL = (sellPrice - buyPrice) * quantity;
    const brokerage = Math.min(0.0003 * turnover, 20);
    const stt = 0.00025 * sellPrice * quantity;
    const exch = 0.0000345 * turnover;
    const sebi = 0.00001 * turnover;
    const gst = 0.18 * (brokerage + exch);
    const stamp = 0.00003 * buyPrice * quantity;
    const totalCharges = brokerage + stt + exch + sebi + gst + stamp;
    const netPL = grossPL - totalCharges;
    setResult({
      grossPL, brokerage, stt, exch, sebi, gst, stamp, netPL,
    });
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto", fontFamily: "sans-serif" }}>
      <h2>Zerodha Intraday Calculator</h2>
      <div>
        <label>Buy Price:</label>
        <input value={buy} onChange={e => setBuy(e.target.value)} type="number" />
      </div>
      <div>
        <label>Sell Price:</label>
        <input value={sell} onChange={e => setSell(e.target.value)} type="number" />
      </div>
      <div>
        <label>Quantity:</label>
        <input value={qty} onChange={e => setQty(e.target.value)} type="number" />
      </div>
      <button onClick={calculate}>Calculate</button>
      {result && (
        <div style={{ marginTop: 20 }}>
          <h4>Result:</h4>
          <ul>
            <li>Gross Profit/Loss: ₹{result.grossPL.toFixed(2)}</li>
            <li>Brokerage: ₹{result.brokerage.toFixed(2)}</li>
            <li>STT: ₹{result.stt.toFixed(2)}</li>
            <li>Exchange Charges: ₹{result.exch.toFixed(2)}</li>
            <li>SEBI Charges: ₹{result.sebi.toFixed(2)}</li>
            <li>GST: ₹{result.gst.toFixed(2)}</li>
            <li>Stamp Duty: ₹{result.stamp.toFixed(2)}</li>
            <li><b>Net Profit/Loss: ₹{result.netPL.toFixed(2)}</b></li>
          </ul>
        </div>
      )}
    </div>
  );
}

function App() {
  return <ZerodhaCalculator />;
}

export default App;
