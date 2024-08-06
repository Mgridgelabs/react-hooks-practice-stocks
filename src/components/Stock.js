import React from "react";

function Stock({ stock, onBuyStock, onSellStock, isInPortfolio }) {
  const handleClick = () => {
    if (isInPortfolio && onSellStock) {
      onSellStock(stock);
    } else if (!isInPortfolio && onBuyStock) {
      onBuyStock(stock);
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.price}</p>
      </div>
    </div>
  );
}

export default Stock;

