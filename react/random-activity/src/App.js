import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Activity from "./views/Activity";
import Header from "./components/Header";
import ActivityProvider from "./context/ActivityProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ActivityProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activity/:key" element={<Activity />} />
          </Routes>
        </ActivityProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
