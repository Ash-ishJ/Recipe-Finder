import styled from "styled-components";

const DishContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 3px 10px 0 #1b1b32;
  width: 300px;
  background-color: white;
  border-radius: 4px;
`;

const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

const DishName = styled.span`
  font-size: 18;
  font-weight: bold;
  color: #1b1b32;
  margin: 10px;
`;

const IngredientText = styled.span`
  font-size: 18;
  border: solid 1px green;
  background-color: green;
  color: white;
  cursor: pointer;
  padding: 10px 15px;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 12px;
  border: none;
  transform: translate(0%);
  transition: 0.3s ease-out;
  &:hover {
    background-color: #016101;
  }
`;

const SeeMoreText = styled(IngredientText)`
  background-color: #eb3300;
  &:hover {
    background-color: #841c00;
  }
`;

const DishCompStyle = {
  DishContainer,
  CoverImage,
  DishName,
  IngredientText,
  SeeMoreText,
};

export default DishCompStyle