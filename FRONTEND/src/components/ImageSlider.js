import React, { useState, useEffect } from "react";
import axios from "axios";

const apiKey = "slDWi3ZHNbZWkOTaLo6Sebgheuz1JB6uLnL1jM8h";
const endpoint = "https://api.nasa.gov/planetary/apod";

function ImageSlider() {
  const [apodData, setApodData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your time is limited, don't waste it living someone else's life.",
    "You are never too old to set another goal or to dream a new dream.",
  ];

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [quotes.length]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  const { url } = apodData;

  return (
    <div>
      <div
        id="apod-container"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
          maxHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div id="apod-description">
          <p
            style={{
              fontStyle: "italic",
              fontSize: "2.5rem",
              color: "#ffffff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              textAlign: "center",
              maxWidth: "80%",
              margin: "0 auto",
              background: "none",
              padding: "0",
            }}
          >
            "{quotes[quoteIndex]}"
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
