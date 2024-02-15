import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [polygonData, setPolygonData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/polygon.json");
      const data = await response.json();
      setPolygonData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {polygonData ? (
        <div>
          <h1>{polygonData.details.name}</h1>
          <p>{polygonData.details.description}</p>
          <p>{polygonData.details.category}</p>
          <ul>
            {polygonData.urls.map((url, index) => (
              <li key={index}>
                <a href={url}>{url}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
