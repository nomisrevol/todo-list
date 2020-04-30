import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [placeholder, setPlaceholder] = useState("Loading...");

  useEffect(() => {
    fetch("api/todoist")
      .then(response => {
        if (response.status > 400) {
          return setPlaceholder("Something went wrong!")
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoaded(true);
      });
  }, []);

  return (
    <ul>
      {data.map(todo => {
        return (
          <li key={todo.id}>
            {todo.description} - {todo.due_at}
          </li>
        );
      })}
    </ul>
  );
}

export default App;

