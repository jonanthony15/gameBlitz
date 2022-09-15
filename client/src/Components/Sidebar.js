import React, { useState, useEffect } from "react";
import './Sidebar.scss';
import axios from "axios";
import {prices, products} from '../Data/products';

const Sidebar = ({ genres, consoles }) => {
  // const [consoles, setConsoles] = useState([]);
  // const [genres, setGenres] = useState([]);
  const [showConsole, setshowConsole] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showGenre, setShowGenre] = useState(true);
  const [userinfo, setUserInfo] = useState(
    {
      gens: [],
      response: [],
    }
  );

  // useEffect(() =>
  // {
  //   axios.get('http://localhost:3001/api/console').then((response) =>
  //   {
  //     setConsoles(response.data);
  //   });

  //   axios.get('http://localhost:3001/api/genre').then((response) =>
  //   {
  //     setGenres(response.data);
  //   })
  // }, []);

  const handleChange = (e) =>
  {
    const {value, checked} = e.target;
    const {gens} = userinfo;

    console.log(`${value}`);

    // if(checked)
    // {
    //   setUserInfo(
    //     {
    //       gens: [...gens, value],
    //       response: [...gens, value],
    //     }
    //   );
    // }
    // else
    // {
    //   setUserInfo(
    //     {
    //       gens: gens.filter((e) => e !== value),
    //       response: gens.filter((e) => e !== value),
    //     }
    //   );
    // }
  }

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
                const {console_id, console_title} = console;
                return (
                  <div key={console.id}>
                    {showConsole && <input type="checkbox" name={console_title} value={console_title} className="sidebar__category-choice" id="sidebarCheck"/>}
                    {showConsole && <label for={console_title}>{console_title}</label>}
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
              {genres.map((genre) =>
              {
                const {genre_id, genre_title} = genre;
                return(
                  <div key={genre_id}>
                    { showGenre && 
                      <input 
                        type="checkbox" 
                        name='genre' 
                        value={genre_title} 
                        className="sidebar__category-choice"
                        onChange={handleChange}
                      />
                    }
                    { showGenre && <label htmlFor="genre">{genre_title}</label>}
                  </div>
                );
              })}
          </div>
          <div className="sidebar__category">
            <p className="sidebar__category-title">ESRB</p>
            <div>
              <input type="checkbox" name="everyone" value="everyone" className="sidebar__category-choice" />
              <label htmlFor="everyone">Everyone</label>
            </div>
            <div>
              <input type="checkbox" name="everyoneTen" value="everyoneTen" className="sidebar__category-choice" />
              <label htmlFor="everyoneTen">Everyone 10+</label>
            </div>
            <div>
              <input type="checkbox" name="teen" value="teen" className="sidebar__category-choice" />
              <label htmlFor="teen">Teen 13+</label>
            </div>
            <div>
              <input type="checkbox" name="mature" value="mature" className="sidebar__category-choice" />
              <label htmlFor="mature">Mature</label>
            </div>
            <div>
              <input type="checkbox" name="pending" value="pending" className="sidebar__category-choice" />
              <label htmlFor="pending">Rating Pending</label>
            </div>
            
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Sidebar