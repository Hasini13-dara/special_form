import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import DetailsPage from "./DetailsPage";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
