import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  function SetCount() {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={SetCount}>Click me {count}</button>
    </>
  )
}

export default App;