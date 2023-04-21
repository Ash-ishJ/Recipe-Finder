import React, { useState } from "react";
import Search from "../Icons/search-icon.svg";
import Logo from "../Icons/hamburger.svg";
import Axios from "axios";
import style from "./HeaderStyle"



const APP_ID = "a192c759";
const APP_KEY = "2d528bd1e99c4205a43e2e38e1ff87d9";

const HeaderComponent = (props) => {
  const [timeoutId, setTimeoutId] = useState("");
  
  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    props.updateRecipeList(response.data.hits);
  };


  const onTextChange = (e) => {
    clearInterval(timeoutId);
    e.persist();
    const timeout = setTimeout(() => fetchRecipe(e.target.value), 600);
    setTimeoutId(timeout);
  };

  return (
    <style.Header>
      <style.AppNameComponent>
        <style.AppIcon src={Logo} alt={`logoIcon`} />
        <span>Recipe Finder</span>
      </style.AppNameComponent>
      <style.SearchComponent>
        <style.SearchIcon src={Search} alt={`searchIcon`} />
        <style.SearchInput
          type="text"
          placeholder="Enter Ingredients"
          onChange={onTextChange}
        />
      </style.SearchComponent>
    </style.Header>
  );
};

export default HeaderComponent;
