import React from "react";
import StockContainer from "./StockContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
