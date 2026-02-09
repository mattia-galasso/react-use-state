import { useState } from "react";
import Languages from "./components/Languages";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div>
          <h1>Learn Web Development</h1>
        </div>
        <Languages />
      </div>
    </>
  );
}
