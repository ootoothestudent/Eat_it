import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const RecipeCard = (props) => {
    const  recipe  = props.recipe;

    return(
        <div className="card-container">
                {/* change photo */}
            <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="" />
        
            <div className="desc">
                <h2>
                    <Link to={`/show-recipe/${recipe._id}`}>
                        { recipe.dish }
                    </Link>
                </h2>
                <h3>{recipe.type}</h3>
                <h3>{recipe.nutrition}</h3>
                <p>{recipe.description}</p>
            </div>
        </div>
    )
};

export default RecipeCard;