import React, { useState } from "react";
import HeaderComponent from "./Components/HeaderComponent";
import DishesListComponent from "./Components/DishesListComponent";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: white;
`;

function App() {
  const [recipeList, updateRecipeList] = useState([]);

  return (
    <Container>
      <HeaderComponent updateRecipeList={updateRecipeList} />
      <DishesListComponent dishesList={recipeList} />
    </Container> 
  );
}

export default App;
