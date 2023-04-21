import React, { useState } from "react";
import style from "./DishCompStyle";

// dialog
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const DishComponent = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);

  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <tr>
                <th>Ingredients</th>
              </tr>
            </thead>
            <tbody>
              {props.dish.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <style.IngredientText onClick={() => window.open(props.dish.url)}>
            See More
          </style.IngredientText>
          <style.SeeMoreText onClick={() => setShow(false)}>
            {"Close"}
          </style.SeeMoreText>
        </DialogActions>
      </Dialog>
      {/* DIalog box ended */}

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
