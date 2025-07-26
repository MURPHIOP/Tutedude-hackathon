import { useState, useEffect } from 'react';

export const usePriceTracker = (productId) => {
  const [currentPrice, setCurrentPrice] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setLoading(false);
      return;
    }

    const fetchPriceData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Mock API call for price data
        const response = await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (productId === 'product-1') {
              resolve({
                currentPrice: 35, // Current price in ₹
                historical: [
                  { date: '2025-07-20', price: 32 },
                  { date: '2025-07-21', price: 33 },
                  { date: '2025-07-22', price: 31 },
                  { date: '2025-07-23', price: 34 },
                  { date: '2025-07-24', price: 35 },
                  { date: '2025-07-25', price: 35 },
                ],
              });
            } else if (productId === 'product-2') {
              resolve({
                currentPrice: 18,
                historical: [
                  { date: '2025-07-20', price: 20 },
                  { date: '2025-07-21', price: 19 },
                  { date: '2025-07-22', price: 18 },
                  { date: '2025-07-23', price: 19 },
                  { date: '2025-07-24', price: 18 },
                  { date: '2025-07-25', price: 18 },
                ],
              });
            } else {
              reject(new Error("Product not found for price tracking."));
            }
          }, 800);
        });

        setCurrentPrice(response.currentPrice);
        setHistoricalData(response.historical);
      } catch (err) {
        console.error("Error fetching price data:", err);
        setError(err.message || "Failed to fetch price data.");
        setCurrentPrice(null);
        setHistoricalData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPriceData();
  }, [productId]);

  return { currentPrice, historicalData, loading, error };
};