import React, { useEffect, useState } from "react";
import "./App.css";

import User from "./User";

function App() {
  const [value, setVal] = useState();
  const [user, setUser] = useState();
  const [loadingVal, setLoadingVal] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);

  useEffect(() => {
    setLoadingVal(true);
    setLoadingUser(true);

    fetch("/api/hello")
      .then((res) => res.text())
      .then((text) => {
        setVal(text);
        console.log(text);
        setLoadingVal(false);
      });

    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => {
        setLoadingUser(false);
        console.log(data);
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {loadingVal && <p>Loading value...</p>}
      {!loadingVal && <p>{value}</p>}
      {loadingVal && <p>Loading user...</p>}
      {!loadingUser && (
        <div
          style={{
            display: "flex",
            width: "50%",
            margin: "auto",
            justifyContent: "center",
          }}
        >
          <User {...user} />
        </div>
      )}
    </div>
  );
}

export default App;
