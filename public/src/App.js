import React, { useState } from "react";

// Use your image URL here (place it in /public and use "/yourfile.jpg" or provide a direct link)
const BACKGROUND_IMG = "/manga-one-piece-wallpaper-preview.jpg"; // If placed in public/

function ZerodhaCalculator() {
  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  const [qty, setQty] = useState("");
  const [result, setResult] = useState(null);

  function calculate() {
    const buyPrice = Number(buy);
    const sellPrice = Number(sell);
    const quantity = Number(qty);
    if (!buyPrice || !sellPrice || !quantity) {
      setResult(null);
      return;
    }
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
      grossPL, brokerage, stt, exch, sebi, gst, stamp, netPL
    });
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${BACKGROUND_IMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Bebas Neue', 'Montserrat', Arial, sans-serif",
        letterSpacing: 1.2,
        color: "#fff",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400;700&family=Montserrat:wght@600&display=swap" rel="stylesheet"/>
      {/* Glass/Card */}
      <div style={{
        background: "rgba(30, 34, 47, 0.62)",
        borderRadius: "24px",
        boxShadow: "0 12px 48px rgba(0,0,0,0.38)",
        padding: "36px 32px",
        maxWidth: 430,
        backdropFilter: "blur(7px)",
        border: "1.5px solid rgba(255,255,255,0.16)"
      }}>
        <h2 style={{
          textAlign: "center",
          fontFamily: "'Bebas Neue', Arial",
          fontSize: "2.4em",
          color: "#fffbe9",
          marginBottom: 20,
          textShadow: "0 3px 15px #222"
        }}>
          Zerodha Intraday Calculator
        </h2>
        <div style={{ marginBottom: 18 }}>
          <label style={{fontWeight:'bold', fontSize:"1.15em", color:'#ffdb70', marginRight:8}}>Buy Price:</label>
          <input 
            value={buy}
            onChange={e => setBuy(e.target.value)}
            type="number"
            style={{
              border: "none",
              borderRadius: "8px",
              padding: "7px 15px",
              outline: "none",
              width: "75%",
              marginTop: "3px",
              background: "rgba(255,255,255,0.2)",
              color: "#fffbfa",
              fontWeight: "bold",
              fontSize: "1em",
              boxShadow: "0 2px 8px rgba(30,34,47,0.13)"
            }}
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{fontWeight:'bold', fontSize:"1.15em", color:'#ffdb70', marginRight:8}}>Sell Price:</label>
          <input 
            value={sell}
            onChange={e => setSell(e.target.value)}
            type="number"
            style={{
              border: "none",
              borderRadius: "8px",
              padding: "7px 15px",
              outline: "none",
              width: "75%",
              marginTop: "3px",
              background: "rgba(255,255,255,0.2)",
              color: "#fffbfa",
              fontWeight: "bold",
              fontSize: "1em",
              boxShadow: "0 2px 8px rgba(30,34,47,0.13)"
            }}
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{fontWeight:'bold', fontSize:"1.15em", color:'#ffdb70', marginRight:8}}>Quantity:</label>
          <input
            value={qty}
            onChange={e => setQty(e.target.value)}
            type="number"
            style={{
              border: "none",
              borderRadius: "8px",
              padding: "7px 15px",
              outline: "none",
              width: "75%",
              marginTop: "3px",
              background: "rgba(255,255,255,0.2)",
              color: "#fffbfa",
              fontWeight: "bold",
              fontSize: "1em",
              boxShadow: "0 2px 8px rgba(30,34,47,0.13)"
            }}
          />
        </div>
        <button
          onClick={calculate}
          style={{
            width: "100%",
            marginTop: "2px",
            padding: "12px 0",
            borderRadius: "10px",
            background: "linear-gradient(90deg, #ffdb70 60%, #ff5f54 100%)",
            color: "#222",
            fontWeight: "bold",
            border: "none",
            fontSize: "1.2em",
            letterSpacing: "1px",
            cursor: "pointer",
            boxShadow: "0 3px 18px #2226"
          }}
        >
          Calculate
        </button>
        {result && (
          <div style={{ marginTop: 32 }}>
            <h4 style={{
              fontFamily:"'Montserrat', Arial",
              color:"#fffbe9",
              fontWeight:"bold",
              fontSize:"1.45em",
              marginBottom: "14px",
              textShadow:"0 2px 20px #252223"
            }}>Result:</h4>
            <ul style={{ fontSize:"1.13em", color:"#eeeef9", marginLeft: "14px" }}>
              <li><b>Gross Profit/L
