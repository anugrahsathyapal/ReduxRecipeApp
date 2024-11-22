import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const View = () => {
  const { id } = useParams(); 
  const { allRecipes } = useSelector((state) => state.recipeReducer); 
  const recipe = allRecipes.find((r) => r.id === parseInt(id));

  

  return (
    <>
      <div style={{ marginTop: '50px' }} className="container  ">
        <div className='bg-danger text-white p-5 rounded-5 shadow'>
        <h1 className="mb-3 text-center fw-bold pb-5">{recipe.name}</h1>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="img-fluid rounded-5 shadow "
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <div className="col-md-6 mt-4">
               
                <p className='fw-bold'>Cuisine:recipe.cuisine</p>
                <p className='fw-bold'>Difficulty:{recipe.difficulty}</p>
                <p className='fw-bold'>Prep Time: {recipe.prepTimeMinutes} minutes</p>
                <p className='fw-bold'> Cook Time:   {recipe.cookTimeMinutes} minutes</p>
                <p className='fw-bold'> Servings:   {recipe.servings}</p>
                <p className='fw-bold'> Calories per Serving:   {recipe.caloriesPerServing} kcal</p>
                <p className='fw-bold'> Rating:   {recipe.rating} ({recipe.reviewCount} reviews)</p>
                <p className='fw-bold'> Meal Type:   {recipe.mealType.join(', ')}</p>
                <p className='fw-bold'> Tags:   {recipe.tags.join(', ')}</p>
              </div>
            </div>
            <div className='row pt-5'>
                <div className="col-md-6 mt-5">
                  <h3 className='fw-bold'>Ingredients</h3>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6 mt-5">
                  <h3 className='fw-bold'>Instructions</h3>
                  <ol>
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default View;
