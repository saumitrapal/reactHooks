import React, { useEffect, useState } from "react";
import axios from "axios"


function useTodo() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get("http://google.com")
      .then((res) => {
        setTodo(res.data.todo)
      })
  }, [])

  return todo;
}


function App() {
  const todos = useTodo();

  return (<div>
      {todos}
  </div>
  )
}

export default App;