import React, { useState } from "react";
import menuData from "./Data";
import Categories from "./Categories";
import Items from "./Items";

const uniqueCategories = ["all", ...new Set(menuData.map((item) => (item.category)))]

function App() {

  const [itemsList, setItemsList] = useState(menuData);

  const filterCategory = (category) => {
    if (category === "all"){
      return(setItemsList(menuData))
    }
    else {
      const newItemList = menuData.filter((item) => item.category === category);
      return(setItemsList(newItemList));
    }
  }



  return (
    <div className="container">
      <h2>Our Menu</h2>
      <Categories filterCategory={filterCategory} uniqueCategories={uniqueCategories}/>
      <Items itemsList={itemsList}/>
    </div>
  );
}

export default App;
