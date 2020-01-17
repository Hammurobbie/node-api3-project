import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import CharacterList from "./CharacterList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={CharacterList} />
      <Route path="/edit-user/:id" component={EditUser} />
      <Route path="/add-user" component={AddUser} />
    </div>
  );
}

export default App;
