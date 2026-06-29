import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./css/App.css";

//Pages
import Homepage from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage Type="home" />} />
          <Route path="/:id" element={<Homepage Type="item" />} />
          <Route path="/cart" element={<Homepage Type="cart" />} />
          <Route path="/checkout" element={<Homepage Type="checkout" />}/>

          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="404" element={<Homepage Type="notfound" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
