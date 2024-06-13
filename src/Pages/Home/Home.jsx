import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
import Hero from "./Hero";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Hero></Hero>
      <Recipes recipes={recipes} />
    </div>
  );
};

export default Home;
