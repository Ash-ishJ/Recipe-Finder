import React from "react";
import styled from "styled-components";
import DishComponent from "./DishComponent";
import Hamburger from "../Icons/hamburger.svg";

const DishesList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 30px;
  gap: 40px;
  flex-wrap: wrap;
`;

const Placeholder = styled.img`
  width: 150px;
  height: 150px;
  margin: 200px;
  opacity: 50%;
`;

const DishesListComponent = ({ dishesList }) => {
  return (
    <DishesList>
      {dishesList.length ? (
        dishesList.map((dishObj) => <DishComponent dish={dishObj.recipe} />)
      ) : (
        <Placeholder src={Hamburger} />
      )}
    </DishesList>
  );
};

export default DishesListComponent;
