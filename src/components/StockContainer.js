import React, { useEffect, useState } from "react";
import Stock from "./Stock";
import PortfolioContainer from "./PortfolioContainer";

function StockContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortOption, setSortOption] = useState("name");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  const handleBuyStock = (stock) => {
    setPortfolio([...portfolio, stock]);
  };

  const handleSellStock = (stock) => {
    setPortfolio(portfolio.filter((item) => item.id !== stock.id));
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const sortedStocks = [...stocks]
    .filter(stock => !filterType || stock.type === filterType)
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "price") {
        return a.price - b.price;
      }
      return 0;
    });

  return (
    <div className="row">
      <div className="col-8">
        <h2>Stocks</h2>
        <select onChange={handleSortChange}>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
        <select onChange={handleFilterChange}>
          <option value="">Filter by Type</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
        </select>
        {sortedStocks.map((stock) => (
          <Stock key={stock.id} stock={stock} onBuyStock={handleBuyStock} />
        ))}
      </div>
      <div className="col-4">
        <PortfolioContainer portfolio={portfolio} onSellStock={handleSellStock} />
      </div>
    </div>
  );
}

export default StockContainer;
