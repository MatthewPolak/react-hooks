import React, { useState } from "react";

export default function Hello() {
  const [name, setName] = useState("World");
  const handleChange = ({ target: { value } }) => {
    setName(value.toUpperCase());
  };

  return (
    <>
      <h1>Hello {name}!</h1>
      <input type="text" onChange={handleChange} />
    </>
  );
}
