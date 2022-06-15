import React from "react";
import Sidebar from "./components/sidebar";
import MainScreen from "./components/MainScreen";
function App() {
  // const {user} = useSelector()
  return (
    <div className="App">
      <Sidebar />
      <MainScreen />
    </div>
  );
}

export default App;
