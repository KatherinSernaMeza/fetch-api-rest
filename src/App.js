import { useEffect, useState } from "react";
import "./App.css";
// import "./styles.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <img src={imageUrl} alt="Imagen de perrito aleatoria" />
      <button>
        {/* ⬅️ nuevo */}
        ¡Otro!{" "}
        <span role="img" aria-label="corazón">
          ❤️
        </span>
      </button>
    </div>
  );
}

export default App;
