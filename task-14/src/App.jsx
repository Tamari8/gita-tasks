import React, { useState, useEffect } from "react";
import LiveTracker from "./LiveTracker";
import "./App.css";

const citiesData = [
  { id: 1, name: "თბილისი", temp: 25, condition: "მზიანი" },
  { id: 2, name: "ბათუმი", temp: 22, condition: "წვიმიანი" },
  { id: 3, name: "ქუთაისი", temp: 24, condition: "ღრუბლიანი" }
];

export default function App() {
  const [activeCity, setActiveCity] = useState(citiesData[0]); 
  const [isLive, setIsLive] = useState(false); 

 
  useEffect(() => {
    console.log("ამინდის აპლიკაცია წარმატებით ჩაიტვირთა!");
  }, []); 


  useEffect(() => {
    document.title = `ამინდი: ${activeCity.name}`;
  }, [activeCity]); 

  return (
    <div className="app-container">
      
      <div className="button-group">
        {citiesData.map((city) => (
          <button
            key={city.id}
            onClick={() => setActiveCity(city)}
            className={activeCity.id === city.id ? "city-btn active" : "city-btn"}
          >
            {city.name}
          </button>
        ))}
      </div>

      <div className="weather-box">
        <h2>{activeCity.name}</h2>
        <p><strong>ტემპერატურა:</strong> {activeCity.temp}°C</p>
        <p><strong>პირობები:</strong> {activeCity.condition}</p>
      </div>

      <button 
        onClick={() => setIsLive(!isLive)}
        className={isLive ? "live-btn active-live" : "live-btn"}
      >
        {isLive ? "გათიშე Live რეჟიმი" : "ჩართე Live რეჟიმი"}
      </button>

      {isLive && <LiveTracker />}
      
    </div>
  );
}