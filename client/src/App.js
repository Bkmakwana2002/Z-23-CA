import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/components/test";
import Student_Registration from "./pages/components/student-registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />}>
            <Route index element={<Student_Registration />} />{" "}
            <Route path="*" element={<Test />} />{" "}
          </Route>{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
