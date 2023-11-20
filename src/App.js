import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [podaci, setPodaci] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?start_date=2023-11-01&end_date=2023-11-10&api_key=qkhp6XYpIgLtkAQW26yGlihcoVk1yZdJ76f7vPi6"
    )
      .then((response) => response.json())
      .then((nasaData) => setPodaci(nasaData));
  }, []);

  return (
    <div className="App">
      <h1>Slika dana</h1>
      {podaci.map((pod) => (
        <div key={crypto.randomUUID()}>
          <img src={pod.url} width={500} height={300} alt={podaci.title}></img>
          <p>{pod.title}</p>
          <p>{pod.explanation}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
