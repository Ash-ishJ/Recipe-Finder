import React, { useState } from "react";
import style from "./DishCompStyle";
import "./PopupStyle.css";

const DishComponent = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <div className="overlay">
          <div className="popup">
            <div className="content">
              <h3>Ingredients</h3>
              <ul>
                {props.dish.ingredients.map((ingredientObj) => (
                  <li>{ingredientObj.text}</li>
                ))}
              </ul>
            </div>
            <div className="buttons">
              <style.SeeMoreText
                className="more"
                onClick={() => window.open(props.dish.url)}
              >
                See More
              </style.SeeMoreText>
              <style.IngredientText
                className="close"
                onClick={() => setShow(false)}
              >
                Close
              </style.IngredientText>
            </div>
          </div>
        </div>
      )}

      <style.DishContainer>
        <style.CoverImage src={props.dish.image} />
        <style.DishName>{props.dish.label}</style.DishName>
        <style.IngredientText onClick={() => setShow(true)}>
          Ingredients
        </style.IngredientText>
        <style.SeeMoreText onClick={() => window.open(props.dish.url)}>
          See Complete Recipe
        </style.SeeMoreText>
      </style.DishContainer>
    </>
  );
};

export default DishComponent;
