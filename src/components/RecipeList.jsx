function RecipeList({ recipes }) {
  return (
    <div className="grid">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <img src={recipe.image} alt={recipe.name} />

          <div className="card-body">
            <h2>{recipe.name}</h2>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Rating:</strong> ⭐ {recipe.rating}</p>
            <p><strong>Cooking Time:</strong> {recipe.cookTimeMinutes} mins</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
