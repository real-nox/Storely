import { BrowserRouter, Route, Routes } from "react-router";
import "./css/App.css";

//Pages
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
