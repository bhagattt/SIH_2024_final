import React, { useState, useEffect } from "react";
import "./nasa.css";
import Navbar from "../components/Navbar";
import axios from "axios";

const apiKey = "slDWi3ZHNbZWkOTaLo6Sebgheuz1JB6uLnL1jM8h";
const endpoint = "https://api.nasa.gov/planetary/apod";

function Nasa() {
  const [apodData, setApodData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint, {
          params: {
            api_key: apiKey,
          },
        });
        setApodData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  const { url, title, explanation } = apodData;

  return (
    <div>
      <Navbar />
      <div id="apod-container" style={{ backgroundImage: `url(${url})` }}>
        <div id="apod-title">
          <h2>{title}</h2>
        </div>
        <div id="apod-description">
          <p>{explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default Nasa;
