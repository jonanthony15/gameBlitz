import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import productGames from "../Data/productGames"

const SingleProduct = () =>
{
  const { productId } = useParams();
  const gameItem = productGames.find((game) => game.game_id === productId);
  console.log(gameItem);
  const { game_title, game_price, game_url, console_title, genre_title} = gameItem;

  return (
    <>
    <div className="productSingle">
      <div className="productSingle__left">
        <img src={game_url} alt={game_title} className="productSingle__img" />
      </div>
      <div className="productSingle__right">
        <h1 className="productSingle__title">{game_title}</h1>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <h3 className="productSingle__price">{game_price}</h3>
        <p className="productSingle__desc">
          Gravida arcu ac tortor dignissim convallis aenean. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Pulvinar neque laoreet suspendisse interdum consectetur libero. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros.
        </p>
        <div className="productSingle__detail">
          <p className="productionSingle__detail-p">Console: <b>{console_title}</b></p>
          <p className="productionSingle__detail-p">Genre: <b>{genre_title}</b></p>
          <p className="productionSingle__detail-p">ESRB Rating: <b>Not Yet Rated</b></p>
          <p className="productionSingle__detail-p">SKU: <b>1234567</b></p>
        </div>
        <button className="btn btn__cart">Add to cart</button>
      </div>
      
    </div>
    <div className="productSingle__info">
        <div>
          <h2 className="productSingle__info-heading2">Overview</h2>
          <div>
            <h3 className="productSingle__info-heading3">Description</h3>
            <p className="productSingle__info-p">
              Gravida arcu ac tortor dignissim convallis aenean. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Pulvinar neque laoreet suspendisse interdum consectetur libero. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros.
            </p>
          </div>
          <div>
            <h3 className="productSingle__info-heading3">Features</h3>
          </div>
        </div>
        <div>
          <h2 className="productSingle__info-heading2">Specifications</h2>
          <div>
            <h3 className="productSingle__info-heading3">Key Specs</h3>
            <table>
              <tr>
                <td>Edition</td>
                <td>Standard Edition</td>
              </tr>
              <tr>
                <td>ESRB Rating</td>
                <td>Not Yet Rated</td>
              </tr>
              <tr>
                <td>ESRB Description</td>
                <td>Not Yet Rated</td>
              </tr>
              <tr>
                <td>Compatible Platforms</td>
                <td>{console_title}</td>
              </tr>
              <tr>
                <td>Format</td>
                <td>Physical</td>
              </tr>
            </table>
          </div>
          <div>
            <h3 className="productSingle__info-heading3">General</h3>
            <table>
              <tr>
                <td>Product Name</td>
                <td>{game_title}</td>
              </tr>
              <tr>
                <td>Publisher</td>
                <td>Publisher Name</td>
              </tr>
              <tr>
                <td>Developer</td>
                <td>Developer Name</td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <h2 className="productSingle__info-heading2">Reviews</h2>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;