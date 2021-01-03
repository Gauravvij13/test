import React from "react";
import "./App.css";
import Players from "./pages/Players";
import PlayerContextProvider from "./context/PlayerContextProvider";

function App() {
  return (
    <PlayerContextProvider>
      <Players />
    </PlayerContextProvider>
  );
}

export default App;
