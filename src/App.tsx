import { Routes, Route } from "react-router-dom";
import "./App.css";
import DynamicForm from "./components/dynamic-form";
import ThankyouPage from "./components/ThankyouPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DynamicForm />} />
      <Route path="thanks" element={<ThankyouPage />} />
    </Routes>
  );
}

export default App;
