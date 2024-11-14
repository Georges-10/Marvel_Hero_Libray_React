import Hero from "./components/SuperHeros/Superhero/Hero";
import SuperHeros from "./components/SuperHeros/SuperHeroes";
import { Heros } from "./heros";
import "./styles.css";

export default function App() {
  return (
    <>
      <header className="App">welcom to comicon </header>
      <main>
        <h1 className="App">Marvel</h1>
      </main>
      <SuperHeros>
        {Heros.map((hero) => (
          <Hero className="hero" {...hero}>
            {" "}
            hero top{" "}
          </Hero>
        ))}
      </SuperHeros>
    </>
  );
}
