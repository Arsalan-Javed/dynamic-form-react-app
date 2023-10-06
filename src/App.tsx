import { Routes, Route } from "react-router-dom";
import "./App.css";
import DynamicForm from "./pages/DynamicForm/dynamic-form";
import ThankyouPage from "./pages/ThankyouPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DynamicForm />} />
      <Route path="thanks" element={<ThankyouPage />} />
    </Routes>
  );
}

export default App;
