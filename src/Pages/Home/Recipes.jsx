import React from "react";
import RecipeCard from "../../components/RecipeCard";

const Recipes = ({ recipes }) => {
  //   console.log("Recipes Page", recipes);
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {recipes.map((singleRecipe) => (
          <RecipeCard key={singleRecipe.id} recipe={singleRecipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
