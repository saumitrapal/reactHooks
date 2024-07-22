import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


function App() {

  const [selected, setSelected] = useState(1)


  return <div>
    <button onClick={function tapButton() { setSelected(1) }}>1</button>
    <button onClick={function tapButton() { setSelected(2) }}>2</button>
    <button onClick={function tapButton() { setSelected(3) }}>3</button>
    <button onClick={function tapButton() { setSelected(4) }}>4</button>
    <Todo id={selected} />
  </div>

}

function Todo({id}) {

  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(function(response) {
      setTodo(response.date.todo)
    })
  }, [id]);

 return (
  <div>
    <h1>
    {todo.title}
    </h1>
    <h5>
    {todo.description}
    </h5>
   </div>
 )
}

export default App;