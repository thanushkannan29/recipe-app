import { useEffect, useState } from "react";
import RecipeList from "./components/RecipeList";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong!");
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">🍽️ Recipe App</h1>

        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {loading && <p className="loading">Loading recipes...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && <RecipeList recipes={recipes} />}
    </div>
  );
}

export default App;
