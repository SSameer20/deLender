import { useState } from "react";
import { deLender_backend as node } from "declarations/deLender_backend";

function Home() {
  const [greeting, setGreeting] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await node.addMoney(); // Ensure addMoney() exists in Motoko

      if (Array.isArray(response) && response.length === 2) {
        setGreeting(`${response[0]} - Balance: ${response[1]}`);
      } else {
        console.error("Unexpected response format:", response);
        setGreeting("Error: Unexpected response from backend");
      }
    } catch (error) {
      console.error("Error calling backend:", error);
      setGreeting("Error contacting backend");
    }
  }

  return (
    <main>
      <div>
        <h1>User Details</h1>
        <span>Principal Id : {principal}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default Home;
