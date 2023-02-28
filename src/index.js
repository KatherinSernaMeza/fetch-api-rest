import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

fetch("https://dog.ceo/api/breeds/image/random") // ⬅️ 1) llamada a la API, el resultado es una Promise
  .then((response) => response.json()) // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
  .then((dog) => console.log(dog)); // ⬅️ 3) aquí ya tenemos la respuesta en formato objeto

fetch("mock.codes/500")
  .then((response) => {
    if (response.ok) {
      console.log("Todo bien");
    } else {
      console.log("Respuesta de red OK pero respuesta de HTTP no OK");
    }
  })
  .catch((error) => {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  });

// ↘️ para usar await debemos hacerlo dentro de una función declarada como "async"
async function fetchExample() {
  try {
    const response = await fetch("mock.codes/500");
    if (response.ok) {
      console.log("Todo bien");
    } else {
      console.log("Respuesta de red OK pero respuesta de HTTP no OK");
    }
  } catch (error) {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  }
}

fetchExample();
