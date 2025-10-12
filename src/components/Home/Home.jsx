import React, { useState } from "react";

export default function Home() {
  let [count, setCount] = useState(0);
  let [userName, setUserName] = useState("shahd");

  return (
    <>
      <h1>Name : {userName}</h1>
    </>
  );
}
