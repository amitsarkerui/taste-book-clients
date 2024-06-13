import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipeCard = ({ recipe }) => {
  console.log("RecipesCard Page", recipe);
  return (
    <div className="p-6 border border-gray-300">
      <img
        className="h-[200px] w-full object-cover "
        src={recipe.image}
        alt=""
      />
      <h2 className="text-2xl font-bold my-4 text-gray-700">{recipe?.title}</h2>
      <p>{recipe?.description}</p>
      <hr className="my-3" />
      <div className="flex justify-between">
        <span className="flex items-center gap-3">
          <img
            className="h-10 w-10 object-cover rounded-full"
            src={recipe?.author?.profilePicture}
            alt=""
          />
          <p>{recipe?.author?.name}</p>
        </span>
        <span className="flex items-center gap-1">
          <Rating style={{ maxWidth: 120 }} value={recipe?.rating} readOnly />
          <p>({recipe?.rating})</p>
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
