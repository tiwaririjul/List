import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./Components/ItemList";
import AddList from "./Components/addList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/addlist" element={<AddList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
