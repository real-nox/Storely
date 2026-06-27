import { BrowserRouter, Route, Routes } from "react-router";
import "./css/App.css";

//Pages
import Homepage from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage Type={"home"} />} />
          <Route path="/:id" element={<Homepage Type={"item"} />} />

          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
