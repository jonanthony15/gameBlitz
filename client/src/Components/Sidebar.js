import React, { useState} from "react";
import './Sidebar.scss';
import {consoles, prices, genres, products} from '../Data/products';

const Sidebar = () => {
  const [showConsole, setshowConsole] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showGenre, setShowGenre] = useState(true);

  // const ch = document.getElementById("sidebarCheck");

  return (
    <React.Fragment>
      <section className="section__sidebar">
        <div className="sidebar">
          <h1 className="sidebar__heading">Categories</h1>
          <div className="sidebar__category">
            <p className="sidebar__category-title" onClick={()=> setshowConsole(!showConsole)}>Console</p>
            {/* <span><i class="fas fa-angle-down"></i></span> */}
              {consoles.map((console, index) =>
              {
                const {id, name} = console;
                return (
                  <div key={id}>
                    {showConsole && <input type="checkbox" name={name} value={name} className="sidebar__category-choice" id="sidebarCheck"/>}
                    {showConsole && <label for={name}>{name}</label>}
                  </div>
                );
              })}
          </div>
          <div className="sidebar__category">
            <p className="sidebar__category-title" onClick={() => setShowPrice(!showPrice)}>Price</p>
            {prices.map((price, index) => 
            {
              const {id, amount} = price;
              return (
                <div key={id}>
                  {showPrice && <input type="checkbox" name={`price-${index}`} value={`price-${index}`} className="sidebar__category-choice" />}
                  {showPrice && <label for={`price-${price}`} >{amount}</label>}
                </div>
              );
            })}
          </div>
          <div className="sidebar__category" >
            <p className="sidebar__category-title" onClick={() => setShowGenre(!showGenre)}>Genre</p>
              {genres.map((genre, index) =>
              {
                const {id, name} = genre;
                return(
                  <div key={id}>
                    { showGenre && <input type="checkbox" name={'genre' + index} value={'genre' + index} className="sidebar__category-choice"/>}
                    { showGenre && <label for={'genre' + index}>{name}</label>}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Sidebar