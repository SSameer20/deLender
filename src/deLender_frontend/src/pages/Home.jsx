import { useEffect, useState } from "react";
import { deLender_backend as node } from "declarations/deLender_backend";
import Navigation from "../components/Navigation";
import { Principal } from "@dfinity/principal";

export default function Home() {
  const [request, setRequest] = useState([]);
  async function fetchAllLoanRequest() {
    const response = await node.getAllLoanRequest();
    setRequest(response);
    console.log(response);
  }
  useEffect(() => {
    fetchAllLoanRequest();
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Navigation />
      <div>
        {request.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: "500px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <h1>{JSON.stringify(item.borrower).split(":")[1].slice(0, 5)}</h1>
              <span>{JSON.stringify(item.amount)}</span>
              <button>Provide Loan</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
